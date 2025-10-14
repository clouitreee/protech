import React from 'react';

interface PlaceholderProps {
  type: 'text' | 'image' | 'button' | 'form' | 'card' | 'grid' | 'list' | 'heading' | 'paragraph' | 'link';
  label?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Placeholder component for wireframes
 * 
 * This component is used to create low-fidelity wireframe placeholders
 * for various UI elements. It provides a simple, text-based representation
 * of components without any visual styling.
 * 
 * @param type - The type of placeholder (text, image, button, etc.)
 * @param label - Optional label to display inside the placeholder
 * @param width - Optional width (CSS value)
 * @param height - Optional height (CSS value)
 * @param children - Optional children to render inside the placeholder
 * @param className - Optional additional CSS classes
 */
export const Placeholder: React.FC<PlaceholderProps> = ({
  type,
  label,
  width,
  height,
  children,
  className = '',
}) => {
  const baseStyles: React.CSSProperties = {
    border: '1px dashed #ccc',
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: '#f9f9f9',
    color: '#666',
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    width: width || 'auto',
    height: height || 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const typeSpecificStyles: Record<string, React.CSSProperties> = {
    text: { minHeight: '1.5rem', justifyContent: 'flex-start', textAlign: 'left' },
    image: { minHeight: '200px', backgroundColor: '#e0e0e0' },
    button: { minHeight: '2.5rem', maxWidth: '200px', backgroundColor: '#d0d0d0', fontWeight: 'bold' },
    form: { minHeight: '300px', flexDirection: 'column', alignItems: 'stretch' },
    card: { minHeight: '150px', flexDirection: 'column', alignItems: 'stretch' },
    grid: { minHeight: '200px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' },
    list: { minHeight: '100px', flexDirection: 'column', alignItems: 'flex-start' },
    heading: { minHeight: '2rem', fontSize: '1.25rem', fontWeight: 'bold', justifyContent: 'flex-start', textAlign: 'left' },
    paragraph: { minHeight: '3rem', justifyContent: 'flex-start', textAlign: 'left' },
    link: { minHeight: '1.5rem', justifyContent: 'flex-start', textAlign: 'left', textDecoration: 'underline' },
  };

  const combinedStyles = { ...baseStyles, ...typeSpecificStyles[type] };

  const defaultLabels: Record<string, string> = {
    text: '[Text Placeholder]',
    image: '[Image Placeholder]',
    button: '[Button]',
    form: '[Form Placeholder]',
    card: '[Card Placeholder]',
    grid: '[Grid Placeholder]',
    list: '[List Placeholder]',
    heading: '[Heading Placeholder]',
    paragraph: '[Paragraph Placeholder]',
    link: '[Link Placeholder]',
  };

  const displayLabel = label || defaultLabels[type] || `[${type.toUpperCase()} Placeholder]`;

  return (
    <div style={combinedStyles} className={`placeholder placeholder-${type} ${className}`}>
      {children || displayLabel}
    </div>
  );
};

export default Placeholder;

