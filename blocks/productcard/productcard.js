import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.classList.add('product-card-item');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div, index) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'product-card-image';
      } else {
        switch (index) {
          case 1:
            div.className = 'product-card-name';
            break;
          case 2:
            div.className = 'product-card-price';
            break;
          case 3:
            div.className = 'product-card-description';
            break;
          case 4:
            div.className = 'product-card-badge';
            break;
          case 5:
            div.className = 'product-card-rating';
            break;
          default:
            div.className = 'product-card-body';
        }
      }
    });
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.replaceChildren(ul);
}
