import React from 'react';

interface PlaceholderProps {
  type: 'text' | 'image' | 'button' | 'form' | 'card' | 'grid' | 'list' | 'heading' | 'paragraph' | 'link';
  label?: string;
  width?: string;
  height?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({
  type,
  label,
  width,
  height,
  children,
  className = '',
}) => {
  const baseClasses = 'border border-dashed p-4 my-2 font-mono text-sm flex items-center justify-center text-center';
  const typeSpecificClasses: Record<string, string> = {
    text: 'min-h-6 justify-start text-left',
    image: 'min-h-[200px] bg-surface',
    button: 'min-h-[2.5rem] max-w-[200px] bg-brand font-bold text-brand-fg',
    form: 'min-h-[300px] flex-col items-stretch',
    card: 'min-h-[150px] flex-col items-stretch',
    grid: 'min-h-[200px] grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4',
    list: 'min-h-[100px] flex-col items-start',
    heading: 'min-h-8 text-lg font-bold justify-start text-left',
    paragraph: 'min-h-12 justify-start text-left',
    link: 'min-h-6 justify-start text-left underline',
  };

  const combinedClasses = `${baseClasses} ${typeSpecificClasses[type]} ${className}`;

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
    <div className={combinedClasses}>
      {children || displayLabel}
    </div>
  );
};

export default Placeholder;

