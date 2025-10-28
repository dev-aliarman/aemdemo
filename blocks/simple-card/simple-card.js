export default function decorate(block) {
  const rows = [...block.children];

  let titleText = '';
  let bodyText = '';

  if (rows.length > 0) {
    const titleRow = rows.find(
      (row) => row.children[0]?.textContent.toLowerCase().trim() === 'title',
    );

    titleText = titleRow?.children[1]?.textContent.trim() || 'Default Title';

    const bodyRow = rows.find(
      (row) => row.children[0]?.textContent.toLowerCase().trim() === 'text',
    );

    bodyText = bodyRow?.children[1]?.textContent.trim() || 'No body text provided.';
  }

  block.textContent = '';

  const cardElement = document.createElement('div');
  cardElement.className = 'simple-card-wrapper';

  const titleElement = document.createElement('h3');
  titleElement.className = 'simple-card-title';
  titleElement.textContent = titleText;

  const bodyElement = document.createElement('p');
  bodyElement.className = 'simple-card-body';
  bodyElement.textContent = bodyText;

  cardElement.append(titleElement, bodyElement);
  block.append(cardElement);
}
