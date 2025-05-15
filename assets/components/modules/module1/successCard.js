/**
 * Creates a Success Card component for the congratulations section
 * @param {string} title - The section title
 * @param {string} message - The congratulatory message
 * @param {string} nextModule - Information about the next module
 * @returns {HTMLElement} - The success card element
 */
function createSuccessCard(title, message, nextModule) {
  // Create main container
  const successCardModule = document.createElement('div');
  successCardModule.className = 'container mt-5 mb-5';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-trophy me-2';
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
  
  // Create card
  const card = document.createElement('div');
  card.className = 'card text-center';
  card.style.backgroundColor = ' #CFE8F3'; // cyan-100

  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body py-4';
  
  // Create success icon
  const successIcon = document.createElement('i');
  successIcon.className = 'bi bi-check-circle-fill text-success mb-3';
  successIcon.style.fontSize = '3rem';
  
  // Create message
  const messageElement = document.createElement('p');
  messageElement.className = 'lead';
  messageElement.innerHTML = message;
  
  // Create divider
  const divider = document.createElement('hr');
  divider.className = 'my-4';
  
  // Create next module container
  const nextModuleContainer = document.createElement('div');
  nextModuleContainer.className = 'mt-3';
  
  // Create next module title
  const nextModuleTitle = document.createElement('h4');
  nextModuleTitle.className = 'd-flex align-items-center justify-content-center';
  
  // Add arrow icon
  const arrowIcon = document.createElement('i');
  arrowIcon.className = 'bi bi-arrow-right-circle me-2';
  arrowIcon.style.color = ' #000000'; // black

  // Add next module text
  const nextModuleText = document.createElement('span');
  nextModuleText.textContent = 'Urmează: ' + nextModule;
  
  // Assemble next module title
  nextModuleTitle.appendChild(arrowIcon);
  nextModuleTitle.appendChild(nextModuleText);
  nextModuleContainer.appendChild(nextModuleTitle);
  
  // Create CTA button
  const ctaButton = document.createElement('a');
  ctaButton.href = '#';
  ctaButton.className = 'btn btn-primary btn-lg mt-3';
  ctaButton.textContent = 'Continuă cu Ziua 2';
  ctaButton.setAttribute('role', 'button');
  
  // Assemble card body
  cardBody.appendChild(successIcon);
  cardBody.appendChild(messageElement);
  cardBody.appendChild(divider);
  cardBody.appendChild(nextModuleContainer);
  cardBody.appendChild(ctaButton);
  card.appendChild(cardBody);
  
  // Assemble success card module
  successCardModule.appendChild(titleContainer);
  successCardModule.appendChild(card);
  
  return successCardModule;
}

/**
 * Initializes the success card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {string} message - The congratulatory message
 * @param {string} nextModule - Information about the next module
 */
function initSuccessCard(elementId, title, message, nextModule) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const successCardModule = createSuccessCard(title, message, nextModule);
    targetElement.parentNode.replaceChild(successCardModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the success card module
 */
function autoInitializeSuccessCard() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Felicitări!",
    message: "✨Ai finalizat Ziua 1 a sprintului de învățare IA! ✨<br><br>Împărtășește-ți ideile cu prietenii sau colegii tăi și discută despre cum IA îți poate îmbunătăți munca.",
    nextModule: "Ziua 2: \"Personalizarea & Bula de Filtrare\""
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initSuccessCard(
      "success-card-container",
      moduleData.title,
      moduleData.message,
      moduleData.nextModule
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
autoInitializeSuccessCard();

// Export the functions for use elsewhere if needed
export { createSuccessCard, initSuccessCard };
