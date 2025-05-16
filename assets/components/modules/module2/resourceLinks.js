/**
 * Creates a Resources Card component with accessibility features and translation guidance
 * @returns {HTMLElement} - The resources card element
 */
function createResourcesCard() {
  // Create main container
  const resourcesModule = document.createElement('div');
  resourcesModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-journal-bookmark-fill me-2'; 
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #FDBF11'; // yellow-60
  titleIcon.style.display = 'flex';
  titleIcon.style.alignItems = 'center';
  titleIcon.style.marginTop = '-2px';
  
  // Create title
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = 'Resurse';
  sectionTitle.style.margin = '0';
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create resources card
  const card = document.createElement('div');
  card.className = 'card mb-4';
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create resources section
  const resourcesTitle = document.createElement('h3');
  resourcesTitle.className = 'h4 mb-3';
  resourcesTitle.textContent = 'Află mai multe';
  
  // Create resources list
  const resourcesList = document.createElement('ul');
  resourcesList.className = 'list-group list-group-flush mb-4';
  
  // Define resource types with appropriate icons
  const resourceTypes = {
    wikipedia: { icon: 'bi bi-wikipedia', label: 'Wikipedia' },
    video: { icon: 'bi bi-play-circle-fill', label: 'Video' },
    article: { icon: 'bi bi-file-earmark-text', label: 'Articol' }
  };
  
  // Define resources from structured_content.md
  const resources = [
    {
      title: 'Conceptul de bula de filtrare',
      url: 'https://en.wikipedia.org/wiki/Filter_bubble',
      type: 'wikipedia',
      language: 'EN'
    },
    {
      title: 'Video explicativ despre bula de filtrare',
      url: 'https://www.youtube.com/watch?v=pT-k1kDIRnw&t=148s',
      type: 'video',
      language: 'EN'
    },
    {
      title: 'Articol: Bulele de filtrare și camerele de ecou',
      url: 'https://www.fondationdescartes.org/en/2020/07/filter-bubbles-and-echo-chambers/',
      type: 'article',
      language: 'EN'
    }
  ];
  
  // Add each resource to the list
  resources.forEach(resource => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item border-0 ps-0 d-flex align-items-start';
    
    // Create resource icon container
    const iconContainer = document.createElement('div');
    iconContainer.className = 'me-3 mt-1';
    iconContainer.style.minWidth = '24px';
    
    // Add resource type icon
    const typeIcon = document.createElement('i');
    typeIcon.className = resourceTypes[resource.type].icon;
    typeIcon.style.fontSize = '1.25rem';
    typeIcon.style.color = ' #000000'; // black
    typeIcon.setAttribute('aria-hidden', 'true');
    
    // Add icon to container
    iconContainer.appendChild(typeIcon);
    
    // Create resource content container
    const resourceContent = document.createElement('div');
    resourceContent.className = 'd-flex flex-column';
    
    // Create resource link
    const resourceLink = document.createElement('a');
    resourceLink.href = resource.url;
    resourceLink.textContent = resource.title;
    resourceLink.className = 'mb-1';
    resourceLink.target = '_blank';
    resourceLink.rel = 'noopener noreferrer';
    
    // Add accessibility attributes
    resourceLink.setAttribute('aria-label', `${resource.title} (${resourceTypes[resource.type].label} în limba ${resource.language}. Se deschide într-o fereastră nouă)`);
    
    // Create resource metadata
    const resourceMeta = document.createElement('div');
    resourceMeta.className = 'small text-muted d-flex align-items-center';
    
    // Create badge for resource type
    const typeBadge = document.createElement('span');
    typeBadge.className = 'badge rounded-pill bg-secondary bg-opacity-10 text-secondary me-2';
    typeBadge.textContent = resourceTypes[resource.type].label;
    
    // Create badge for language
    const languageBadge = document.createElement('span');
    languageBadge.className = 'badge rounded-pill bg-info bg-opacity-10 text-info me-2';
    languageBadge.textContent = resource.language;
    
    // Assemble resource metadata
    resourceMeta.appendChild(typeBadge);
    resourceMeta.appendChild(languageBadge);
    
    // Assemble resource content
    resourceContent.appendChild(resourceLink);
    resourceContent.appendChild(resourceMeta);
    
    // Assemble list item
    listItem.appendChild(iconContainer);
    listItem.appendChild(resourceContent);
    
    // Add to resources list
    resourcesList.appendChild(listItem);
  });
  
  // Create translation guide section
  const translationGuideContainer = document.createElement('div');
  translationGuideContainer.className = 'card bg-light mb-0';
  
  const translationGuideBody = document.createElement('div');
  translationGuideBody.className = 'card-body';
  
  const translationGuideHeader = document.createElement('div');
  translationGuideHeader.className = 'd-flex align-items-center mb-3';
  
  // Add translation icon
  const translationIcon = document.createElement('i');
  translationIcon.className = 'bi bi-translate me-2';
  translationIcon.style.fontSize = '1.25rem';
  translationIcon.style.color = '#4561AA'; // blue-60
  
  // Create translation title
  const translationTitle = document.createElement('h4');
  translationTitle.className = 'h5 m-0';
  translationTitle.textContent = 'Ghid de traducere pentru resurse';
  
  // Assemble translation header
  translationGuideHeader.appendChild(translationIcon);
  translationGuideHeader.appendChild(translationTitle);
  
  // Create translation options accordion
  const translationAccordion = document.createElement('div');
  translationAccordion.className = 'accordion';
  translationAccordion.id = 'translationAccordion';
  
  // Define translation methods
  const translationMethods = [
    {
      id: 'youtube-translate',
      title: 'Folosește subtitrările automate YouTube (pentru videoclipuri)',
      content: `
        <ol>
          <li>Deschide videoclipul YouTube</li>
          <li>Apasă pe butonul ⚙️ (setări) din partea de jos a playerului</li>
          <li>Selectează "Subtitrări/CC"</li>
          <li>Selectează "Autotranslate" sau "Traducere automată"</li>
          <li>Alege "Română" din lista de limbi</li>
        </ol>
        <p class="small text-muted">Perfect pentru videoclipuri YouTube. Calitatea traducerii poate varia, dar este accesibilă.</p>
      `
    },
    {
      id: 'google-translate',
      title: 'Folosește Google Translate',
      content: `
        <ol>
          <li>Accesează <a href="https://translate.google.com/" target="_blank" rel="noopener noreferrer">Google Translate</a></li>
          <li>Copiază URL-ul resursei și lipește-l în câmpul de text</li>
          <li>Selectează "Română" ca limbă de destinație</li>
          <li>Fă clic pe linkul generat pentru a deschide site-ul tradus</li>
        </ol>
        <p class="small text-muted">Perfect pentru articole și pagini web. Poate avea erori ocazionale de traducere, dar este rapid și accesibil.</p>
      `
    },
    {
      id: 'ai-translate',
      title: 'Folosește un asistent AI pentru traducere',
      content: `
        <ol>
          <li>Copiază secțiuni de text din resursă</li>
          <li>Lipește în ChatGPT sau alt asistent AI</li>
          <li>Solicită: "Te rog să traduci acest text în română"</li>
        </ol>
        <p class="small text-muted">Ideal pentru traduceri de înaltă calitate și pentru a obține explicații pentru concepte complexe.</p>
      `
    }
  ];
  
  // Add each translation method to the accordion
  translationMethods.forEach((method, index) => {
    // Create accordion item
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';
    
    // Create accordion header
    const accordionHeader = document.createElement('h2');
    accordionHeader.className = 'accordion-header';
    accordionHeader.id = `heading-${method.id}`;
    
    // Create accordion button
    const accordionButton = document.createElement('button');
    accordionButton.className = 'accordion-button collapsed';
    accordionButton.type = 'button';
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', `#collapse-${method.id}`);
    accordionButton.setAttribute('aria-expanded', 'false');
    accordionButton.setAttribute('aria-controls', `collapse-${method.id}`);
    accordionButton.textContent = method.title;
    
    // Create accordion collapse
    const accordionCollapse = document.createElement('div');
    accordionCollapse.id = `collapse-${method.id}`;
    accordionCollapse.className = 'accordion-collapse collapse';
    accordionCollapse.setAttribute('aria-labelledby', `heading-${method.id}`);
    accordionCollapse.setAttribute('data-bs-parent', '#translationAccordion');
    
    // Create accordion body
    const accordionBody = document.createElement('div');
    accordionBody.className = 'accordion-body';
    accordionBody.innerHTML = method.content;
    
    // Assemble accordion parts
    accordionHeader.appendChild(accordionButton);
    accordionCollapse.appendChild(accordionBody);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);
    
    // Add to accordion
    translationAccordion.appendChild(accordionItem);
  });
  
  // Add tip for accessible translation
  const accessibilityTip = document.createElement('div');
  accessibilityTip.className = 'alert alert-info mt-3 mb-0 d-flex align-items-center';
  
  const tipIcon = document.createElement('i');
  tipIcon.className = 'bi bi-info-circle me-3';
  tipIcon.style.fontSize = '1.25rem';
  
  const tipText = document.createElement('div');
  tipText.innerHTML = '<strong>Recomandare:</strong> Pentru cea mai bună experiență de învățare, traducerea cu ajutorul unui asistent AI îți va oferi nu doar textul tradus, dar și clarificări pentru termenii tehnici.';
  
  // Assemble tip
  accessibilityTip.appendChild(tipIcon);
  accessibilityTip.appendChild(tipText);
  
  // Assemble translation guide
  translationGuideBody.appendChild(translationGuideHeader);
  translationGuideBody.appendChild(translationAccordion);
  translationGuideBody.appendChild(accessibilityTip);
  translationGuideContainer.appendChild(translationGuideBody);
  
  // Assemble card content
  cardBody.appendChild(resourcesTitle);
  cardBody.appendChild(resourcesList);
  cardBody.appendChild(translationGuideContainer);
  
  // Assemble card
  card.appendChild(cardBody);
  
  // Assemble resources module
  resourcesModule.appendChild(titleContainer);
  resourcesModule.appendChild(card);
  
  return resourcesModule;
}

/**
 * Initializes the Resources card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 */
function initResourcesCard(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const resourcesModule = createResourcesCard();
    targetElement.parentNode.replaceChild(resourcesModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the Resources card module
 */
function autoInitializeResourcesCard() {
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initResourcesCard("resources-container");
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeResourcesCard();

// Export the functions for use elsewhere if needed
export { createResourcesCard, initResourcesCard };
