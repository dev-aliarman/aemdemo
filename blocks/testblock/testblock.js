export default function decorate(block) {
  block.style.background = '#f0f8ff';
  block.style.padding = '1rem';
  block.style.border = '2px solid #007cba';
  block.innerHTML = '<h2>Test Block Works!</h2><p>This is a simple test block.</p>';
}
