import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function CopyUrlButton() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div>
      <CopyToClipboard text={url}>
        <button>Copy URL</button>
      </CopyToClipboard>
    </div>
  );
}

export default CopyUrlButton;