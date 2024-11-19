import React from 'react';
import { Copy } from 'lucide-react';

const HeadingWithCopy = ({ as: Component = 'h1', children, ...props }) => {
  // Function to generate slug from heading text
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Function to copy URL with heading anchor
  const copyUrl = () => {
    const slug = generateSlug(children);
    const url = `${window.location.origin}${window.location.pathname}#${slug}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="group flex items-center gap-2">
      <Component 
        id={generateSlug(children)} 
        className="scroll-mt-24"
        {...props}
      >
        {children}
      </Component>
      <button
        onClick={copyUrl}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-gray-100"
        aria-label="Copy link to heading"
      >
        <Copy className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

export default HeadingWithCopy;