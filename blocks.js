export default function buildLibrary() {
  return {
    blocks: [
      {
        name: 'highlight',
        title: 'Highlight',
        description: 'Simple highlight box for important content',
        category: 'Content',
        icon: 'info',
      },
      {
        name: 'quote',
        title: 'Quote',
        description: 'Blockquote with author attribution',
        category: 'Content',
        icon: 'quote',
      },
      {
        name: 'productcard',
        title: 'Product Card',
        description: 'Displays product information in a card format',
        category: 'Commerce',
        icon: 'grid',
      },
      {
        name: 'cards',
        title: 'Cards',
        description: 'Display content in card format',
        category: 'Content',
        icon: 'grid',
      },
      {
        name: 'hero',
        title: 'Hero',
        description: 'Hero section with image and text',
        category: 'Content',
        icon: 'image',
      },
      {
        name: 'carousel',
        title: 'Carousel',
        description: 'Image or content carousel',
        category: 'Content',
        icon: 'carousel',
      },
      {
        name: 'accordion',
        title: 'Accordion',
        description: 'Collapsible content sections',
        category: 'Content',
        icon: 'list',
      },
      {
        name: 'columns',
        title: 'Columns',
        description: 'Multi-column layout',
        category: 'Layout',
        icon: 'columns',
      },
    ],
  };
}
