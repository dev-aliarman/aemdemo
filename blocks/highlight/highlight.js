export default function decorate(block) {
  block.classList.add('highlight-box');
  
  [...block.children].forEach((row) => {
    row.classList.add('highlight-row');
  });
}
