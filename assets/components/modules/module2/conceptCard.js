/**
 * conceptCard.js
 * 
 * A component script that displays concept information with consistent styling.
 * This script uses hard-coded data and automatically initializes
 * itself when loaded and populates the concept container.
 */

/**
 * Creates a Concept Card component based on design specifications
 * @param {string} conceptTitle - The title of the concept
 * @param {string} conceptText - The main concept explanation text
 * @param {Array} insideItems - Items inside the filter bubble
 * @param {Array} outsideItems - Items outside the filter bubble
 * @param {string} conclusionText - Concluding text about the concept
 * @returns {HTMLElement} - The concept card element
 */
function createConceptCard(conceptTitle, conceptText, insideItems, outsideItems, conclusionText) {
  console.log("Creating concept card");
  
  // Create main container
  const mainContainer = document.createElement('div');
  mainContainer.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
// Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-lightbulb me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #FDBF11'; // yellow-60
  titleIcon.style.display = 'flex'; // Ensure icon is displayed as flex
  titleIcon.style.alignItems = 'center'; // Center align vertically
  titleIcon.style.justifyContent = 'center'; // Center align horizontally
  titleIcon.style.marginTop = '-2px'; // Fine-tune vertical alignment with title
  
  
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = `Concept: ${conceptTitle}`;
  sectionTitle.style.margin = '0'; // Remove default margin for better alignment
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create the card container
  const card = document.createElement('div');
  card.className = 'card shadow-sm mb-4';
  
  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create the concept text paragraph
  const conceptParagraph = document.createElement('p');
  // Ensure bold text for "bule de filtrare"
  conceptParagraph.innerHTML = conceptText.replace(/bule de filtrare/, '<strong>bule de filtrare</strong>');
  
  // Create the filter bubble visualization
  const visualizationContainer = document.createElement('div');
  visualizationContainer.className = 'row justify-content-center my-4';
  
  const visualColumn = document.createElement('div');
  visualColumn.className = 'col-md-10 text-center';
  
  // User icon
  const userContainer = document.createElement('div');
  userContainer.className = 'd-inline-block me-3';
  userContainer.innerHTML = `
    <i class="bi bi-person-fill" style="font-size: 2rem;"></i>
    <div>Tu</div>
  `;
  
  // Create the bubble
  const bubbleContainer = document.createElement('div');
  bubbleContainer.className = 'd-inline-block position-relative p-4 border border-2 rounded-circle';
  bubbleContainer.style.width = '230px';
  bubbleContainer.style.height = '230px';
  
  // Add inside items to the bubble
  insideItems.forEach((item, index) => {
    const badge = document.createElement('span');
    badge.className = 'badge m-1';
    const colorInfo = getBadgeColor(index);
    badge.style.backgroundColor = colorInfo.background;
    badge.style.color = colorInfo.text;
    badge.style.opacity = '1';
    badge.textContent = item;
    bubbleContainer.appendChild(badge);
  });
  
  // Add bubble label
  const bubbleLabel = document.createElement('div');
  bubbleLabel.className = 'position-absolute bottom-0 start-50 translate-middle-x fw-bold';
  bubbleLabel.textContent = 'Bula ta de filtrare';
  bubbleContainer.appendChild(bubbleLabel);
  
  // Outside items container
  const outsideContainer = document.createElement('div');
  outsideContainer.className = 'd-inline-block align-top ms-3 pt-2 text-start';
  
  // Add outside items
  outsideItems.forEach((item, index) => {
    const badge = document.createElement('span');
    badge.className = 'badge m-1';
    const colorInfo = getOutsideBadgeColor(index);
    badge.style.backgroundColor = colorInfo.background;
    badge.style.color = colorInfo.text;
    badge.textContent = item;
    outsideContainer.appendChild(badge);
  });
  
  // Assemble the visualization
  visualColumn.appendChild(userContainer);
  visualColumn.appendChild(bubbleContainer);
  visualColumn.appendChild(outsideContainer);
  
  visualizationContainer.appendChild(visualColumn);
  
  // Create conclusion paragraph
  const conclusionParagraph = document.createElement('p');
  conclusionParagraph.textContent = conclusionText;
  
  // Assemble the card body
  cardBody.appendChild(conceptParagraph);
  cardBody.appendChild(visualizationContainer);
  cardBody.appendChild(conclusionParagraph);
  
  // Assemble the card
  card.appendChild(cardBody);
  
  // Assemble the main container
  mainContainer.appendChild(titleContainer);
  mainContainer.appendChild(card);
  
  return mainContainer;
}

/**
 * Get color class for inside bubble badges
 * @param {number} index - Index of the item
 * @returns {Object} Object with background and text colors
 */
function getBadgeColor(index) {
  const colors = [
    { background: '#000000', text: '#FFFFFF' }, // Black background, white text
    { background: '#FDBF11', text: '#000000' }, // Yellow background, black text
    { background: '#12719E', text: '#FFFFFF' }  // Blue background, white text
  ];
  return colors[index % colors.length];
}

/**
 * Get color class for outside bubble badges
 * @param {number} index - Index of the item
 * @returns {Object} Object with background and text colors
 */
function getOutsideBadgeColor(index) {
  const colors = [
    { background: '#000000', text: '#FFFFFF' }, // Black background, white text
    { background: '#FDBF11', text: '#000000' }, // Yellow background, black text
    { background: '#12719E', text: '#FFFFFF' }  // Blue background, white text
  ];
  return colors[index % colors.length];
}

/**
 * Hard-coded concept data
 */
const conceptData = {
  conceptTitle: 'Bula de filtrare',
  conceptText: 'Bula de filtrare este rezultatul algoritmilor personalizați care selectează conținutul pe care îl vezi online. Algoritmii încearcă să-ți arate doar ce cred că te interesează, creând astfel o "bulă" în jurul tău, care filtrează opiniile contrare sau informațiile diverse.',
  insideItems: ['Știri similare', 'Opinii familiare', 'Persoane care gândesc ca tine'],
  outsideItems: ['Perspective diferite', 'Informații contradictorii', 'Opinii diverse'],
  conclusionText: 'Fiind conștient de existența bulelor de filtrare, poți lua măsuri pentru a-ți diversifica intenționat sursele de informare și pentru a căuta perspective diferite de ale tale.'
};

/**
 * Initializes the concept card module
 * @param {string} elementId - The ID of the element to replace with the concept card
 */
function initConceptCard(elementId) {
  console.log("Initializing concept card for element:", elementId);
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }
  
  try {
    // Create and insert the concept card using hard-coded data
    const conceptCard = createConceptCard(
      conceptData.conceptTitle,
      conceptData.conceptText,
      conceptData.insideItems,
      conceptData.outsideItems,
      conceptData.conclusionText
    );
    
    targetElement.parentNode.replaceChild(conceptCard, targetElement);
    console.log("Concept card successfully initialized");
  } catch (error) {
    console.error("Failed to initialize concept card:", error);
    renderErrorState(targetElement);
  }
}

/**
 * Render an error state when initialization fails
 * @param {HTMLElement} element - The element to render the error in
 */
function renderErrorState(element) {
  if (!element) return;
  
  const errorAlert = document.createElement('div');
  errorAlert.className = 'alert alert-warning';
  errorAlert.innerHTML = `
    <strong>Notice:</strong> The concept card could not be loaded correctly. 
    Please refresh the page or contact support if the problem persists.
  `;
  
  element.parentNode.replaceChild(errorAlert, element);
}

/**
 * Auto-initializes the concept card
 * This function runs automatically when the script is loaded
 */
function autoInitializeConceptCard() {
  console.log("Auto-initializing concept card");
  
  // Initialize the concept card when the DOM is ready
  const initialize = () => {
    initConceptCard("concept-container");
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeConceptCard();

// Export functions for potential external use
export { createConceptCard, initConceptCard };
