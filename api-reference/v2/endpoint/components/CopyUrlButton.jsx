// components/CopyUrlButton.jsx
import React from 'react';

const CopyUrlButton = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('URL copied to clipboard!');
    });
  };

  return (
    <button
      style={{
        marginTop: '8px',
        padding: '5px 10px',
        fontSize: '14px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
      onClick={copyToClipboard}
    >
      Copy URL
    </button>
  );
};

export default CopyUrlButton;
