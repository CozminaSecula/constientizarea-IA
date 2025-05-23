/**
 * Creates a Resource Links Card component
 * @param {string} title - The section title
 * @param {Object} resourceGroups - Object containing resource groups with their titles and links
 * @returns {HTMLElement} - The resource links element
 */
function createResourceLinks(title, resourceGroups) {
  // Create main container
  const resourceLinksModule = document.createElement('div');
  resourceLinksModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-journal-bookmark me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #000000'; // black
  titleIcon.style.display = 'flex';
  titleIcon.style.alignItems = 'center';
  titleIcon.style.marginTop = '-2px';
  
  // Create title
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  sectionTitle.style.margin = '0';
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create card
  const card = document.createElement('div');
  card.className = 'card';
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create each resource group
  Object.keys(resourceGroups).forEach(groupKey => {
    const group = resourceGroups[groupKey];
    
    // Create group title
    const groupTitle = document.createElement('h3');
    groupTitle.className = 'h5 mt-4 mb-3';
    groupTitle.textContent = group.title;
    
    // Create links list
    const linksList = document.createElement('ul');
    linksList.className = 'list-group mb-3';
    
    // Add links
    group.links.forEach(link => {
      // Create list item
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item border-0 ps-0';
      
      // Create link
      const linkElement = document.createElement('a');
      linkElement.href = link.url;
      linkElement.target = '_blank'; // Open in new tab
      linkElement.rel = 'noopener noreferrer'; // Security best practice
      linkElement.className = 'd-flex align-items-start text-decoration-none link-hover';
      
      // Add link hover effect
      linkElement.style.transition = 'transform 0.2s ease-in-out';
      linkElement.onmouseover = function() { this.style.transform = 'translateX(3px)'; };
      linkElement.onmouseout = function() { this.style.transform = 'translateX(0)'; };
      
      // Select the appropriate icon based on resource type
      let iconClass;
      
      if (link.url.includes('microsoft')) {
        iconClass = 'bi bi-microsoft';
      } else if (link.url.includes('google')) {
        iconClass = 'bi bi-google';
      } else if (link.url.includes('slack')) {
        iconClass = 'bi bi-slack';
      } else if (link.url.includes('.pdf')) {
        iconClass = 'bi bi-file-pdf';
      } else if (link.url.includes('support')) {
        iconClass = 'bi bi-question-circle';
      } else {
        iconClass = 'bi bi-link-45deg';
      }
      
      // Add link icon
      const linkIcon = document.createElement('i');
      linkIcon.className = `${iconClass} me-2 mt-1`;
      linkIcon.style.color = ' #1696D2'; // cyan-60
      
      // Add link text
      const linkText = document.createElement('span');
      linkText.textContent = link.text;
      
      // Assemble link
      linkElement.appendChild(linkIcon);
      linkElement.appendChild(linkText);
      listItem.appendChild(linkElement);
      linksList.appendChild(listItem);
    });
    
    // Add group title and links list to card body
    cardBody.appendChild(groupTitle);
    cardBody.appendChild(linksList);
  });
  
  // Assemble card
  card.appendChild(cardBody);
  
  // Assemble resource links module
  resourceLinksModule.appendChild(titleContainer);
  resourceLinksModule.appendChild(card);
  
  return resourceLinksModule;
}

/**
 * Initializes the resource links module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {Object} resourceGroups - Object containing resource groups
 */
function initResourceLinks(elementId, title, resourceGroups) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const resourceLinksModule = createResourceLinks(title, resourceGroups);
    targetElement.parentNode.replaceChild(resourceLinksModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the resource links module
 */
function autoInitializeResourceLinks() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Resurse utile",
    resourceGroups: {
      learnMore: {
        title: "Pentru aprofundare",
        links: [
          {
            text: "Funcții IA în Microsoft 365",
            url: "https://www.microsoft.com/ro-ro/microsoft-365/copilot/copilot-for-work#tabs-oc2a1c_tab2"
          },
          {
            text: "Capabilități IA în Google Workspace",
            url: "https://support.google.com/mail/answer/13952129#zippy=%2Cplanuri-google-workspace-business"
          },
          {
            text: "Introducere în IA la locul de muncă",
            url: "https://undetectable.ai/blog/ro/ia-la-locul-de-munca/"
          }
        ]
      },
      settings: {
        title: "Pentru configurare",
        links: [
          {
            text: "Cum să ajustezi funcțiile inteligente din Gmail",
            url: "https://support.google.com/mail/answer/10079371"
          },
          {
            text: "Setări Microsoft Editor",
            url: "https://support.microsoft.com/ro-ro/office/verificarea-gramatical%C4%83-ortografic%C4%83-%C8%99i-mai-multe-%C3%AEn-word-0f43bf32-ccde-40c5-b16a-c6a282c0d251"
          },
          {
            text: "Gestionarea sugestiilor IA în Teams",
            url: "https://support.microsoft.com/ro-ro/office/urm%C4%83ri%C8%9Bi-chaturile-cu-notele-despre-inteligen%C8%9Ba-artificial%C4%83-%C3%AEn-microsoft-teams-0b7efbd0-fd3e-48e7-9a4b-4ea22cdc12c0"
          }
        ]
      }
    }
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initResourceLinks(
      "resource-links-container",
      moduleData.title,
      moduleData.resourceGroups
    );
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeResourceLinks();

// Export the functions for use elsewhere if needed
export { createResourceLinks, initResourceLinks };
