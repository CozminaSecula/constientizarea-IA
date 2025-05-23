/**
 * Creates a Key Points Card component
 * @returns {HTMLElement} - The key points card element
 */
function createKeyPointsCard() {
  // Create main container
  const keyPointsModule = document.createElement('div');
  keyPointsModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-lightbulb me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #000000'; // black
  titleIcon.style.display = 'flex';
  titleIcon.style.alignItems = 'center';
  titleIcon.style.marginTop = '-2px';
  
  // Create title
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = 'Puncte cheie de reținut';
  sectionTitle.style.margin = '0';
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create card
  const card = document.createElement('div');
  card.className = 'card border-primary';
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Add intro text
  const introText = document.createElement('p');
  introText.className = 'mb-3';
  introText.textContent = 'Amintește-ți aceste puncte esențiale:';
  cardBody.appendChild(introText);
  
  // Create key points list
  const keyPointsList = document.createElement('ul');
  keyPointsList.className = 'list-group list-group-flush mb-3';
  
  // Define key points from structured_content.md
  const keyPoints = [
    {
      term: 'Personalizarea',
      description: 'nu este bună sau rea - este un instrument care poate fi util sau limitativ.'
    },
    {
      term: 'Conștientizarea',
      description: 'este primul pas pentru a contracara prejudecățile informaționale.'
    },
    {
      term: 'Diversitatea perspectivelor ',
      description: 'duce la decizii mai bune și stimulează inovația.'
    }
  ];
  
  // Add key points to the list
  keyPoints.forEach(point => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item border-0 ps-0 d-flex';
    
    const bulletPoint = document.createElement('i');
    bulletPoint.className = 'bi bi-check-circle me-2 mt-1';
    bulletPoint.style.color = '#12719E'; // cyan-60
    bulletPoint.style.fontSize = '0.9rem';
    
    const pointContent = document.createElement('div');
    
    const boldTerm = document.createElement('strong');
    boldTerm.textContent = point.term + ' ';
    boldTerm.style.color = '#12719E'; // cyan-60

    pointContent.appendChild(boldTerm);
    pointContent.appendChild(document.createTextNode(point.description));
    
    listItem.appendChild(bulletPoint);
    listItem.appendChild(pointContent);
    keyPointsList.appendChild(listItem);
  });
  
  // Add key points list to card body
  cardBody.appendChild(keyPointsList);
  
  // Add tip
  const tipContainer = document.createElement('div');
  tipContainer.className = 'alert alert-info mt-3 mb-0 d-flex';
  
  const tipIcon = document.createElement('i');
  tipIcon.className = 'bi bi-info-circle me-3 mt-1';
  tipIcon.style.fontSize = '1.25rem';
  
  const tipText = document.createElement('div');
  tipText.textContent = 'Recunoașterea acestor concepte te va ajuta să navighezi mai eficient în spațiul digital personalizat.';
  
  tipContainer.appendChild(tipIcon);
  tipContainer.appendChild(tipText);
  cardBody.appendChild(tipContainer);
  
  // Add card body to card
  card.appendChild(cardBody);
  
  // Assemble key points module
  keyPointsModule.appendChild(titleContainer);
  keyPointsModule.appendChild(card);
  
  return keyPointsModule;
}

/**
 * Initializes the Key Points card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 */
function initKeyPointsCard(elementId) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const keyPointsModule = createKeyPointsCard();
    targetElement.parentNode.replaceChild(keyPointsModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the Key Points card module
 */
function autoInitializeKeyPointsCard() {
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initKeyPointsCard("key-points-container");
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeKeyPointsCard();

// Export the functions for use elsewhere if needed
export { createKeyPointsCard, initKeyPointsCard };
