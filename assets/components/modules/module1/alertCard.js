/**
 * Creates an Alert Card component for "Ce nu este IA" section
 * @param {string} title - The section title
 * @param {string} description - The description text
 * @param {Array} items - Array of items that are not AI
 * @returns {HTMLElement} - The alert card element
 */
function createAlertCard(title, description, items) {
  // Create main container
  const alertCardModule = document.createElement('div');
  alertCardModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-exclamation-triangle me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #FDBF11'; // yellow-60
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
  
  // Create alert
  const alertElement = document.createElement('div');
  alertElement.className = 'alert alert-danger';
  alertElement.style.backgroundColor = ' #ECECEC'; // grey--light-90
  alertElement.style.borderColor = ' #ECECEC'; // grey--light-90
  alertElement.style.color = ' #000000'; // body-color
  
  // Create alert header
  const alertHeader = document.createElement('div');
  alertHeader.className = 'd-flex align-items-center mb-3';
  
  // Add alert icon
  const alertIcon = document.createElement('i');
  alertIcon.className = 'bi bi-exclamation-circle me-3';
  alertIcon.style.fontSize = '1.25rem';
  alertIcon.style.color = ' #000000'; // black

  // Add description text
  const descriptionText = document.createElement('h4');
  descriptionText.className = 'mb-0 fw-bold';
  descriptionText.textContent = description;
  
  // Assemble alert header
  alertHeader.appendChild(alertIcon);
  alertHeader.appendChild(descriptionText);
  alertElement.appendChild(alertHeader);
  
  // Create list for items
  const itemsList = document.createElement('ul');
  itemsList.className = 'list-group mt-3';
  itemsList.style.border = 'none';
  itemsList.style.listStyleType = 'none'; // Remove default list styling
  itemsList.style.padding = '0';
  
  // Add items with bullet points
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'mb-2 d-flex align-items-center';
    listItem.style.backgroundColor = 'transparent';
    
    // Create bullet point with icon
    const bulletIcon = document.createElement('i');
    bulletIcon.className = 'bi bi-circle-fill me-2 mt-1';
    bulletIcon.style.color = ' #000000'; // black
    bulletIcon.style.fontSize = '0.25rem';
    bulletIcon.setAttribute('aria-hidden', 'true');
    
    // Create text element
    const itemText = document.createElement('span');
    itemText.textContent = item;
    
    // Assemble list item
    listItem.appendChild(bulletIcon);
    listItem.appendChild(itemText);
    
    itemsList.appendChild(listItem);
  });

  // Assemble alert
  alertElement.appendChild(itemsList);
  
  // Assemble alert card module
  alertCardModule.appendChild(titleContainer);
  alertCardModule.appendChild(alertElement);
  
  return alertCardModule;
}

/**
 * Initializes the alert card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {string} description - The description text
 * @param {Array} items - Array of items that are not AI
 */
function initAlertCard(elementId, title, description, items) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const alertCardModule = createAlertCard(title, description, items);
    targetElement.parentNode.replaceChild(alertCardModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the alert card module
 */
function autoInitializeAlertCard() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Ce nu este IA",
    description: "Nu tot ce este \"inteligent\" este IA. Iată câteva funcționalități confundate frecvent cu IA:",
    items: [
      "Filtre de email de bază cu reguli configurate de tine",
      "Funcții de căutare standard (fără procesarea limbajului natural)",
      "Calcule sau formule simple",
      "Mementouri de calendar programate de tine",
      "Șabloane de raport create de tine"
    ]
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initAlertCard(
      "alert-card-container",
      moduleData.title,
      moduleData.description,
      moduleData.items
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
autoInitializeAlertCard();

// Export the functions for use elsewhere if needed
export { createAlertCard, initAlertCard };
