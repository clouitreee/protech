import React from 'react';
import { cn } from '@/src/lib/cn';

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
  const baseClasses = cn(
    'border border-dashed border-gray-400 p-4 m-2 text-gray-600 font-mono text-sm',
    'flex items-center justify-center text-center',
    'bg-surface',
    className
  );

  const typeSpecificClasses: Record<string, string> = {
    text: 'min-h-6 justify-start text-left',
    image: 'min-h-52 bg-gray-200',
    button: 'min-h-10 max-w-52 bg-brand-primary text-white font-bold',
    form: 'min-h-72 flex-col items-stretch',
    card: 'min-h-36 flex-col items-stretch',
    grid: 'min-h-52 grid grid-cols-auto-fit-minmax-150px-1fr gap-4',
    list: 'min-h-24 flex-col items-start',
    heading: 'min-h-8 text-lg font-bold justify-start text-left',
    paragraph: 'min-h-12 justify-start text-left',
    link: 'min-h-6 justify-start text-left underline',
  };

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
    <div
      style={{
        width: width || 'auto',
        height: height || 'auto',
      }}
      className={cn(baseClasses, typeSpecificClasses[type])}
    >
      {children || displayLabel}
    </div>
  );
};

export default Placeholder;

