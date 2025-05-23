/**
 * Creates a "Îndepărtarea din bula ta" card with strategies and tips
 * @returns {HTMLElement} - The bubble escape strategies card element
 */
function createBubbleEscapeCard() {
  // Create main container
  const bubbleEscapeCard = document.createElement('div');
  bubbleEscapeCard.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-filter-circle me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #000000'; // black
  titleIcon.style.display = 'flex';
  titleIcon.style.alignItems = 'center';
  titleIcon.style.marginTop = '-2px';
  
  // Create title
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = 'Strategii pentru a ieși din bula ta';
  sectionTitle.style.margin = '0';
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create description text
  const descriptionText = document.createElement('p');
  descriptionText.textContent = 'Iată câteva metode simple pe care le poți aplica imediat:';
  descriptionText.className = 'mb-4';
  
  // Create main card
  const card = document.createElement('div');
  card.className = 'card border-success mb-4';
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create quick ideas section
  const quickIdeasTitle = document.createElement('h3');
  quickIdeasTitle.className = 'h4 mb-3';
  quickIdeasTitle.textContent = 'Idei';

  // Create ideas list
  const ideasList = document.createElement('ol');
  ideasList.className = 'list-group list-group-numbered mb-4';
  
  // Ideas content
  const ideas = [
    {
      text: 'Folosește modul incognito/privat când cercetezi subiecte importante.',
      bold: 'Folosește modul incognito/privat'
    },
    {
      text: 'Urmărește conștient surse cu perspective diferite de ale tale.',
      bold: 'Urmărește conștient surse cu perspective diferite'
    },
    {
      text: 'Ajustează setările platformelor pentru a reduce personalizarea excesivă.',
      bold: 'Ajustează setările platformelor'
    },
    {
      text: 'Utilizează motoare de căutare alternative (ex. DuckDuckGo) pentru cercetări importante.',
      bold: 'Utilizează motoare de căutare alternative '
    },
    {
      text: 'Fii conștient/ă de comportamentul tău online - fiecare clic influențează ce vei vedea în viitor.',
      bold: 'Fii conștient/ă de comportamentul tău online'
    }
  ];
  
  // Add each idea to the list
  ideas.forEach(idea => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item border-0 ps-0';
    
    // Create text with bold part
    const boldPart = document.createElement('strong');
    boldPart.textContent = idea.bold + ' ';
    
    // Add the bold part and the rest of the text
    listItem.appendChild(boldPart);
    listItem.appendChild(document.createTextNode(idea.text.substring(idea.bold.length)));
    
    ideasList.appendChild(listItem);
  });
  
  // Create settings guide section
  const settingsTitle = document.createElement('h3');
  settingsTitle.className = 'h4 mb-3';
  settingsTitle.textContent = 'Ghid de setări';
  
  // Create accordion for settings
  const accordion = document.createElement('div');
  accordion.className = 'accordion mb-3';
  accordion.id = 'settingsAccordion';
  
  // Settings content
  const settings = [
    {
      platform: 'Google',
      steps: 'Mergi la Confidențialitate Google → Activitate web și în aplicații → Dezactivează'
    },
    {
      platform: 'LinkedIn',
      steps: 'Profil → Setări → Preferințe cont → Preferințe feed'
    },
    {
      platform: 'Facebook',
      steps: 'Setări → Preferințe News Feed → Prioritizează ce vezi primul'
    }
  ];
  
  // Add each setting to the accordion
  settings.forEach((setting, index) => {
    // Create accordion item
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item';
    
    // Create accordion header
    const accordionHeader = document.createElement('h2');
    accordionHeader.className = 'accordion-header';
    accordionHeader.id = `heading-${index}`;
    
    // Create accordion button
    const accordionButton = document.createElement('button');
    accordionButton.className = 'accordion-button collapsed';
    accordionButton.type = 'button';
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', `#collapse-${index}`);
    accordionButton.setAttribute('aria-expanded', 'false');
    accordionButton.setAttribute('aria-controls', `collapse-${index}`);
    
    // Create platform name with bold styling
    const platformName = document.createElement('strong');
    platformName.textContent = setting.platform;
    accordionButton.appendChild(platformName);
    
    // Create accordion collapse
    const accordionCollapse = document.createElement('div');
    accordionCollapse.id = `collapse-${index}`;
    accordionCollapse.className = 'accordion-collapse collapse';
    accordionCollapse.setAttribute('aria-labelledby', `heading-${index}`);
    accordionCollapse.setAttribute('data-bs-parent', '#settingsAccordion');
    
    // Create accordion body
    const accordionBody = document.createElement('div');
    accordionBody.className = 'accordion-body';
    accordionBody.textContent = setting.steps;
    
    // Assemble accordion parts
    accordionHeader.appendChild(accordionButton);
    accordionCollapse.appendChild(accordionBody);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);
    
    // Add to accordion
    accordion.appendChild(accordionItem);
  });
  
  // Create helper tip
  const helperTip = document.createElement('div');
  helperTip.className = 'alert alert-info d-flex align-items-center mt-4 mb-0';
  
  const tipIcon = document.createElement('i');
  tipIcon.className = 'bi bi-info-circle me-3';
  tipIcon.style.fontSize = '1.25rem';
  
  const tipText = document.createElement('div');
  tipText.textContent = 'Verifică periodic setările platformelor pe care le folosești, deoarece acestea se pot modifica odată cu actualizările.';
  
  helperTip.appendChild(tipIcon);
  helperTip.appendChild(tipText);
  
  // Assemble card content
  cardBody.appendChild(quickIdeasTitle);
  cardBody.appendChild(ideasList);
  cardBody.appendChild(settingsTitle);
  cardBody.appendChild(accordion);
  cardBody.appendChild(helperTip);
  
  // Assemble card
  card.appendChild(cardBody);
  
  // Assemble main content
  bubbleEscapeCard.appendChild(titleContainer);
  bubbleEscapeCard.appendChild(descriptionText);
  bubbleEscapeCard.appendChild(card);
  
  return bubbleEscapeCard;
}

/**
 * Initializes the Bubble Escape card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 */
function initBubbleEscapeCard(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const bubbleEscapeCard = createBubbleEscapeCard();
    targetElement.parentNode.replaceChild(bubbleEscapeCard, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the Bubble Escape card module
 */
function autoInitializeBubbleEscapeCard() {
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initBubbleEscapeCard("bubble-escape-container");
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeBubbleEscapeCard();

// Export the functions for use elsewhere if needed
export { createBubbleEscapeCard, initBubbleEscapeCard };
