import React from 'react';

const CopyableHeading = () => {
  const pageTitle = document.title; // Derives the title dynamically from the document
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('URL copied to clipboard!');
    });
  };

  return (
    <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {pageTitle}
      <button
        style={{
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
    </h1>
  );
};

export default CopyableHeading;
