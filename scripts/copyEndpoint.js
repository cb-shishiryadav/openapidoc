document.addEventListener('DOMContentLoaded', function() {
    // Find all endpoint headings and wrap them
    const endpointHeadings = document.querySelectorAll('h3');
    
    endpointHeadings.forEach(heading => {
      if (heading.textContent.startsWith('/')) {
        // Create container
        const container = document.createElement('div');
        container.className = 'endpoint-container';
        
        // Create copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          <span>Copy</span>
        `;
        
        // Add click handler
        copyButton.addEventListener('click', async () => {
          const endpointUrl = heading.textContent;
          try {
            await navigator.clipboard.writeText(endpointUrl);
            copyButton.classList.add('copied');
            copyButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Copied!</span>
            `;
            
            setTimeout(() => {
              copyButton.classList.remove('copied');
              copyButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                <span>Copy</span>
              `;
            }, 2000);
          } catch (err) {
            console.error('Failed to copy:', err);
          }
        });
        
        // Insert elements
        heading.parentNode.insertBefore(container, heading);
        container.appendChild(heading);
        container.appendChild(copyButton);
      }
    });
  });