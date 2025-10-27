export default function decorate(block) {
  // Add a test banner to verify changes are working
  const testBanner = document.createElement('div');
  testBanner.style.cssText = `
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    color: white;
    text-align: center;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 5px;
    animation: pulse 2s infinite;
  `;
  testBanner.innerHTML = '🚀 HERO BLOCK MODIFICATION TEST - Changes are working! 🚀';
  
  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  
  // Insert test banner at the beginning of the hero block
  block.insertBefore(testBanner, block.firstChild);
  
  // Original hero functionality (if any) would go here
  const heroText = block.querySelector('h1, h2, h3');
  if (heroText) {
    heroText.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
  }
}
