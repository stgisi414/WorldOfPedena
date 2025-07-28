
import React from 'react';

// This function is designed to be simple. It can be extended with more complex regex.
export const parseRichText = (text: string): React.ReactNode => {
  if (!text) return '';

  const parts = text.split(/(\*\*.*?\*\*|\{.*?:.*?\})/g);

  return parts.map((part, index) => {
    // Match **bold**
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
    }
    // Match {color:text}
    if (part.startsWith('{') && part.endsWith('}') && part.includes(':')) {
      const firstColonIndex = part.indexOf(':');
      const color = part.substring(1, firstColonIndex);
      const content = part.substring(firstColonIndex + 1, part.length - 1);
      return <span key={index} style={{ color }}>{content}</span>;
    }
    return part;
  });
};
