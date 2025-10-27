import { readBlockConfig } from '../../scripts/aem.js';

/**
 * Creates a product card element
 * @param {Object} product - The product data
 * @returns {Element} The product card element
 */
function createProductCard(product) {
  const card = document.createElement('div');
  card.classList.add('product-card-item');

  const {
    name = 'Product Name',
    price = '$0.00',
    image = '/icons/placeholder.svg',
    url = '#',
    description = '',
    badge = '',
    rating = 0,
  } = product;

  const stars = rating > 0 ? '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating)) : '';

  card.innerHTML = `
    <div class="product-card-content">
      ${badge ? `<div class="product-badge">${badge}</div>` : ''}
      <div class="product-image">
        <a href="${url}" aria-label="View ${name}">
          <img src="${image}" alt="${name}" loading="lazy">
        </a>
      </div>
      <div class="product-info">
        <h3 class="product-name">
          <a href="${url}">${name}</a>
        </h3>
        ${description ? `<p class="product-description">${description}</p>` : ''}
        ${stars ? `<div class="product-rating">${stars}</div>` : ''}
        <div class="product-price">${price}</div>
        <div class="product-actions">
          <a href="${url}" class="button primary">View Product</a>
        </div>
      </div>
    </div>
  `;

  return card;
}

/**
 * Parses product data from block content
 * @param {Element} block - The block element
 * @returns {Array} Array of product objects
 */
function parseProductsFromBlock(block) {
  const products = [];
  const rows = block.querySelectorAll(':scope > div');

  rows.forEach((row) => {
    const cells = row.querySelectorAll(':scope > div');
    if (cells.length >= 3) {
      const imageEl = cells[0]?.querySelector('img');
      const linkEl = cells[1]?.querySelector('a') || cells[0]?.querySelector('a');

      products.push({
        name: cells[1]?.textContent?.trim() || 'Product',
        price: cells[2]?.textContent?.trim() || '$0.00',
        image: imageEl?.src || '/icons/placeholder.svg',
        url: linkEl?.href || '#',
        description: cells[3]?.textContent?.trim() || '',
        badge: cells[4]?.textContent?.trim() || '',
        rating: parseFloat(cells[5]?.textContent?.trim()) || 0,
      });
    }
  });

  return products;
}

/**
 * Main decoration function for the product card block
 * @param {Element} block - The block element
 */
export default async function decorate(block) {
  const config = readBlockConfig(block);
  const {
    columns = '3',
    'card-style': cardStyle = 'default',
    'show-rating': showRating = 'true',
    'max-items': maxItems = '12',
  } = config;

  try {
    // Parse products from block content
    const products = parseProductsFromBlock(block);

    if (products.length === 0) {
      block.innerHTML = '<p class="no-products">No products available.</p>';
      return;
    }

    // Limit number of products
    const maxProducts = parseInt(maxItems, 10) || products.length;
    const displayProducts = products.slice(0, maxProducts);

    // Clear block content
    block.innerHTML = '';

    // Create products container
    const container = document.createElement('div');
    container.classList.add('products-container');
    container.classList.add(`columns-${columns}`);
    container.classList.add(`style-${cardStyle}`);

    // Create product cards
    displayProducts.forEach((product) => {
      if (showRating === 'false') {
        product.rating = 0; // Hide rating if disabled
      }
      const card = createProductCard(product);
      container.appendChild(card);
    });

    block.appendChild(container);

    // Add structured data for SEO
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: displayProducts.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.name,
          image: product.image,
          url: product.url,
          offers: {
            '@type': 'Offer',
            price: product.price.replace(/[^0-9.]/g, ''),
            priceCurrency: 'USD',
          },
        },
      })),
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schemaData);
    block.appendChild(scriptTag);
  } catch (error) {
    console.error('Error loading product cards:', error);
    block.innerHTML = '<p class="error-message">Unable to load products at this time.</p>';
  }
}
