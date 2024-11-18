import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const EndpointHeading = () => {
  const [copied, setCopied] = useState(false);
  const endpointUrl = '/address/validate';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(endpointUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex items-center gap-2 py-2">
      <h2 className="text-xl font-bold">POST {endpointUrl}</h2>
      <button
        onClick={copyToClipboard}
        className="p-1 hover:bg-gray-100 rounded-md transition-colors"
        aria-label="Copy URL"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : (
          <Copy className="w-4 h-4 text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default EndpointHeading;