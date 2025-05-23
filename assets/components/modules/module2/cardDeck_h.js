/**
 * cardDeck.js
 * 
 * A component script that displays filter bubble identification examples with consistent styling.
 * This script uses hard-coded data and automatically initializes
 * itself when loaded and populates the specified container.
 */

/**
 * Creates a Card Deck component based on design specifications
 * @param {string} title - The title of the card deck section
 * @param {string} description - The description text for the card deck
 * @param {Array} categories - Array of category objects with their details
 * @returns {HTMLElement} - The card deck element
 */
function createCardDeck(title, description, categories) {
  console.log("Creating horizontal card deck");
  
  // Create main container
  const mainContainer = document.createElement('div');
  mainContainer.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-grid-3x3-gap me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #000000'; // black
  titleIcon.style.display = 'flex';
  titleIcon.style.alignItems = 'center';
  titleIcon.style.justifyContent = 'center';
  titleIcon.style.marginTop = '-2px';
  
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  sectionTitle.style.margin = '0';
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create the card container
  const card = document.createElement('div');
  card.className = 'card shadow-sm mb-4';
  
  // Create the card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Add description paragraph
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.textContent = description;
  cardBody.appendChild(descriptionParagraph);
  
  // Create horizontal card layout with flexbox instead of card-deck
  const cardContainer = document.createElement('div');
  cardContainer.className = 'd-flex flex-row flex-wrap'; // Use flexbox for horizontal layout
  
  // Add category cards
  categories.forEach((category) => {
    // Create category card wrapper
    const categoryCol = document.createElement('div');
    categoryCol.className = 'pe-3 pb-3'; // Add padding for spacing between cards
    categoryCol.style.flex = '1'; // Allow cards to grow evenly
    categoryCol.style.minWidth = '300px'; // Set minimum width for cards
    
    // Create category card
    const categoryCard = document.createElement('div');
    categoryCard.className = 'card h-100'; // Full height card
    
    // Add category header with icon
    const categoryHeader = document.createElement('div');
    categoryHeader.className = `card-header ${category.headerClass || ''}`;
    // Apply custom background color if provided
    if (category.headerBgColor) {
      categoryHeader.style.backgroundColor = category.headerBgColor;
    }
    
    const headerContent = document.createElement('h5'); 
    headerContent.className = 'd-flex align-items-center mb-0';
    
    // Add icon with proper styling
    const icon = document.createElement('i');
    icon.className = category.icon + ' me-2';
    
    const headerText = document.createTextNode(category.title);
    headerContent.appendChild(icon);
    headerContent.appendChild(headerText);
    
    categoryHeader.appendChild(headerContent);
    categoryCard.appendChild(categoryHeader);
    
    // Add category body with bullet points
    const categoryBody = document.createElement('div');
    categoryBody.className = 'card-body';
    
    if (category.points && category.points.length > 0) {
      const pointsList = document.createElement('ul');
      pointsList.className = 'list-unstyled mb-0';
      
      category.points.forEach(point => {
        const listItem = document.createElement('li');
        listItem.className = 'mb-2';
        
        // Using the same bullet style as before
        const bulletPoint = document.createElement('div');
        bulletPoint.className = 'd-flex';
        
        const bulletIcon = document.createElement('i');
        bulletIcon.className = 'fas fa-circle me-2 text-black';
        bulletIcon.style.fontSize = '0.5rem';
        bulletIcon.style.marginTop = '0.5rem';
        
        const pointText = document.createElement('span');
        pointText.textContent = point;
        
        bulletPoint.appendChild(bulletIcon);
        bulletPoint.appendChild(pointText);
        listItem.appendChild(bulletPoint);
        pointsList.appendChild(listItem);
      });
      
      categoryBody.appendChild(pointsList);
    }
    
    categoryCard.appendChild(categoryBody);
    categoryCol.appendChild(categoryCard);
    cardContainer.appendChild(categoryCol);
  });
  
  cardBody.appendChild(cardContainer);
  card.appendChild(cardBody);
  
  // Assemble main container
  mainContainer.appendChild(titleContainer);
  mainContainer.appendChild(card);
  
  return mainContainer;
}

/**
 * Hard-coded filter bubble examples data
 */
const filterBubbleData = {
  title: 'Cum să identifici bulele de filtrare',
  description: 'Iată câteva exemple concrete de bule de filtrare pe care le poți întâlni zilnic:',
  categories: [
    {
      title: 'Pe platformele sociale',
      icon: 'bi bi-share',
      headerBgColor: '#CFE8F3', // Add custom background color
      points: [
        'Fluxul tău de știri afișează tot mai multe articole similare cu cele pe care ai dat clic anterior.',
        'Observi că vezi tot mai puține opinii diferite de ale tale.',
        'Conținutul de la aceiași creatori apare frecvent în partea de sus a fluxului tău de știri.'
      ]
    },
    {
      title: 'În experiențele de cumpărături online',
      icon: 'bi bi-cart',
      headerBgColor: '#CFE8F3', // Use headerBgColor instead of headerClass
      points: [
        'Primești recomandări de produse bazate strict pe istoricul tău de navigare.',
        'Vezi sugestii de tipul "Clienții care au cumpărat acest produs au cumpărat și...".',
        'Vezi doar produse similare cu ce ai cumpărat deja.'
      ]
    },
    {
      title: 'La locul de muncă',
      icon: 'bi bi-briefcase',
      headerBgColor: '#CFE8F3', // Use headerBgColor instead of headerClass
      points: [
        'Când cauți informații profesionale, rezultatele favorizează sursele accesate anterior.',
        'Instrumentele de comunicare prioritizează mesajele de la contactele frecvente.',
        'Sistemele interne evidențiază în principal conținut relevant pentru departamentul tău.'
      ]
    }
  ]
};

/**
 * Initializes the card deck module
 * @param {string} elementId - The ID of the element to replace with the card deck
 */
function initCardDeck(elementId) {
  console.log("Initializing horizontal card deck for element:", elementId);
  const targetElement = document.getElementById(elementId);
  
  if (!targetElement) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }
  
  try {
    // Create and insert the card deck using hard-coded data
    const cardDeck = createCardDeck(
      filterBubbleData.title,
      filterBubbleData.description,
      filterBubbleData.categories
    );
    
    targetElement.parentNode.replaceChild(cardDeck, targetElement);
    console.log("Horizontal card deck successfully initialized");
  } catch (error) {
    console.error("Failed to initialize horizontal card deck:", error);
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
    <strong>Notice:</strong> The card deck could not be loaded correctly. 
    Please refresh the page or contact support if the problem persists.
  `;
  
  element.parentNode.replaceChild(errorAlert, element);
}

/**
 * Auto-initializes the card deck
 * This function runs automatically when the script is loaded
 */
function autoInitializeCardDeck() {
  console.log("Auto-initializing horizontal card deck");
  
  // Initialize the card deck when the DOM is ready
  const initialize = () => {
    initCardDeck("cardDeckHorizontal");
  };
  
  // Make sure to run only after the page is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize with a small delay to ensure other scripts have loaded
    setTimeout(initialize, 300); // Increased timeout for better reliability
  }
}

// Make sure this runs
autoInitializeCardDeck();
console.log("Horizontal card deck script loaded");

// Export functions for potential external use
export { createCardDeck, initCardDeck };
