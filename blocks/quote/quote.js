export default function decorate(block) {
  const quote = document.createElement('blockquote');
  quote.classList.add('quote-container');
  
  [...block.children].forEach((row) => {
    const div = document.createElement('div');
    while (row.firstElementChild) div.append(row.firstElementChild);
    
    [...div.children].forEach((cell, index) => {
      if (index === 0) {
        cell.className = 'quote-text';
      } else if (index === 1) {
        cell.className = 'quote-author';
      }
    });
    
    quote.append(div);
  });
  
  block.replaceChildren(quote);
}
