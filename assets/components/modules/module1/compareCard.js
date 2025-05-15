/**
 * Creates a Compare Card component for "IA sau nu?" section based on design system specifications
 * @param {string} title - The main section title
 * @param {string} description - The description text under the title
 * @param {Object} iaCard - Object with title and list items for IA functionalities
 * @param {Object} regularCard - Object with title and list items for regular functionalities
 * @returns {HTMLElement} - The compare card element
 */
function createCompareCard(title, description, iaCard, regularCard) {
  // Create main container
  const compareCardModule = document.createElement('div');
  compareCardModule.className = 'container mt-4 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-shuffle me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #FDBF11'; // yellow-60
  titleIcon.style.display = 'flex'; // Ensure icon is displayed as flex
  titleIcon.style.alignItems = 'center'; // Center align vertically
  titleIcon.style.justifyContent = 'center'; // Center align horizontally
  titleIcon.style.marginTop = '-2px'; // Fine-tune vertical alignment with title
  
  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  sectionTitle.style.margin = '0'; // Remove default margin for better alignment
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create description
  const descriptionText = document.createElement('p');
  descriptionText.className = 'mb-4';
  descriptionText.textContent = description;
  
  // Create card container
  const cardContainer = document.createElement('div');
  cardContainer.className = 'd-flex flex-column flex-md-row gap-4';
  
  // Create IA card
  const iaCardElement = document.createElement('div');
  iaCardElement.className = 'card flex-grow-1';
  iaCardElement.style.backgroundColor = ' #CFE8F3'; // cyan-100
  
  // Create IA card header
  const iaCardHeader = document.createElement('div');
  iaCardHeader.className = 'card-header text-white d-flex align-items-center';
  iaCardHeader.style.backgroundColor = ' #1696D2'; // cyan-60

  // Add IA header icon
  const iaHeaderIcon = document.createElement('i');
  iaHeaderIcon.className = 'bi bi-robot me-2';
  
  // Add header text with semantic h4
  const iaHeaderText = document.createElement('h4');
  iaHeaderText.className = 'm-0';
  iaHeaderText.style.fontSize = '1.1rem';
  iaHeaderText.style.fontWeight = '600';
  iaHeaderText.style.color = ' #ffffff'; // Ensure text is white for contrast
  iaHeaderText.textContent = iaCard.title;
  
  // Assemble IA header
  iaCardHeader.appendChild(iaHeaderIcon);
  iaCardHeader.appendChild(iaHeaderText);
  
  // Create IA card body
  const iaCardBody = document.createElement('div');
  iaCardBody.className = 'card-body';
  
  // Create IA list group
  const iaListGroup = document.createElement('ul');
  iaListGroup.className = 'list-group list-group-flush';
  
  // Add IA list items
  iaCard.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item bg-transparent';
    
    // Create item container with icon
    const itemContainer = document.createElement('div');
    itemContainer.className = 'd-flex align-items-start';
    
    // Add check icon
    const checkIcon = document.createElement('i');
    checkIcon.className = 'bi bi-check-circle-fill me-2 mt-1';
    checkIcon.style.color = ' #1696D2'; // cyan-60
    
    // Add item text
    const itemText = document.createElement('span');
    itemText.textContent = item;
    
    // Assemble item container
    itemContainer.appendChild(checkIcon);
    itemContainer.appendChild(itemText);
    
    // Add to list item
    listItem.appendChild(itemContainer);
    iaListGroup.appendChild(listItem);
  });
  
  // Assemble IA card
  iaCardBody.appendChild(iaListGroup);
  iaCardElement.appendChild(iaCardHeader);
  iaCardElement.appendChild(iaCardBody);
  
  // Create regular card
  const regularCardElement = document.createElement('div');
  regularCardElement.className = 'card flex-grow-1';
  regularCardElement.style.backgroundColor = ' #F5F5F5'; // gray-light-100

  // Create regular card header
  const regularCardHeader = document.createElement('div');
  regularCardHeader.className = 'card-header text-white d-flex align-items-center';
  regularCardHeader.style.backgroundColor = ' #000000'; // gray-light-30

  // Add regular header icon
  const regularHeaderIcon = document.createElement('i');
  regularHeaderIcon.className = 'bi bi-gear me-2';
  
  // Add header text with semantic h4
  const regularHeaderText = document.createElement('h4');
  regularHeaderText.className = 'm-0';
  regularHeaderText.style.fontSize = '1.1rem';
  regularHeaderText.style.fontWeight = '600';
  regularHeaderText.style.color = ' #ffffff'; // Ensure text is white for contrast
  regularHeaderText.textContent = regularCard.title;
  
  // Assemble regular header
  regularCardHeader.appendChild(regularHeaderIcon);
  regularCardHeader.appendChild(regularHeaderText);
  
  // Create regular card body
  const regularCardBody = document.createElement('div');
  regularCardBody.className = 'card-body';
  
  // Create regular list group
  const regularListGroup = document.createElement('ul');
  regularListGroup.className = 'list-group list-group-flush';
  
  // Add regular list items
  regularCard.items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item bg-transparent';
    
    // Create item container with icon
    const itemContainer = document.createElement('div');
    itemContainer.className = 'd-flex align-items-start';
    
    // Add icon
    const icon = document.createElement('i');
    icon.className = 'bi bi-dash-circle-fill me-2 mt-1';
    icon.style.color = ' #353535'; // gray-light-30

    // Add item text
    const itemText = document.createElement('span');
    itemText.textContent = item;
    
    // Assemble item container
    itemContainer.appendChild(icon);
    itemContainer.appendChild(itemText);
    
    // Add to list item
    listItem.appendChild(itemContainer);
    regularListGroup.appendChild(listItem);
  });
  
  // Assemble regular card
  regularCardBody.appendChild(regularListGroup);
  regularCardElement.appendChild(regularCardHeader);
  regularCardElement.appendChild(regularCardBody);
  
  // Assemble cards into the container
  cardContainer.appendChild(iaCardElement);
  cardContainer.appendChild(regularCardElement);
  
  // Assemble component
  compareCardModule.appendChild(titleContainer);
  compareCardModule.appendChild(descriptionText);
  compareCardModule.appendChild(cardContainer);
  
  return compareCardModule;
}

/**
 * Initializes the compare card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The main section title
 * @param {string} description - The description text
 * @param {Object} iaCard - Object with title and list items for IA functionalities
 * @param {Object} regularCard - Object with title and list items for regular functionalities
 */
function initCompareCard(elementId, title, description, iaCard, regularCard) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const compareCardModule = createCompareCard(title, description, iaCard, regularCard);
    targetElement.parentNode.replaceChild(compareCardModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the compare card module
 */
function autoInitializeCompareCard() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "IA sau nu?",
    description: "Prin ce se deosebește o funcție \"bazată pe IA\" de o funcție obișnuită a unui instrument?",
    iaCard: {
      title: "Funcții bazate pe IA",
      items: [
        "Învață în timp din comportamentul tău.",
        "Fac predicții sau sugestii.",
        "Se adaptează la tiparele tale personale de utilizare.",
        "Înțeleg limbajul natural.",
        "Automatizează decizii complexe."
      ]
    },
    regularCard: {
      title: "Funcții obișnuite",
      items: [
        "Urmează doar reguli fixe.",
        "Se comportă mereu la fel.",
        "Necesită instrucțiuni explicite.",
        "Folosesc doar potrivirea cuvintelor cheie.",
        "Realizează automatizări simple."
      ]
    }
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initCompareCard(
      "compare-card-container", 
      moduleData.title, 
      moduleData.description, 
      moduleData.iaCard, 
      moduleData.regularCard
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
autoInitializeCompareCard();

// Export the functions for use elsewhere if needed
export { createCompareCard, initCompareCard };
