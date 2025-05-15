/**
 * Creates an Introduction component based on design system specifications
 * @param {string} introText - Introduction paragraph text
 * @param {string} objectiveTitle - Title of the objective section
 * @param {string} objectiveText - Text for the objective section
 * @returns {HTMLElement} - The introduction module element
 */
function createIntroduction(introText, objectiveTitle, objectiveText) {
  // Create main container
  const introductionModule = document.createElement('div');
  introductionModule.className = 'card mb-4';
  
  // Create card header with accent
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header d-flex align-items-center';
  cardHeader.style.borderLeft = 'solid 3px #FDBF11'; // yellow-60 accent

  // Add icon to header
  const headerIcon = document.createElement('i');
  headerIcon.className = 'bi bi-info-circle me-2';
  
  // Add header text
  const headerText = document.createElement('h3');
  headerText.className = 'm-0';
  headerText.textContent = 'Introducere';
  
  // Assemble header
  cardHeader.appendChild(headerIcon);
  cardHeader.appendChild(headerText);
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body ';
  
  // Add introduction text
  const introParagraph = document.createElement('p');
  introParagraph.className = 'card-text';
  introParagraph.textContent = introText;
  
  // Create objective block
  const objectiveBlock = document.createElement('div');
  objectiveBlock.className = 'alert alert-info mt-3';
  
  // Create a wrapper for the icon and title to display them inline
  const objectiveTitleWrapper = document.createElement('div');
  objectiveTitleWrapper.className = 'd-flex align-items-center mb-2';
  
  // Add icon to header
  const objectiveIcon = document.createElement('i');
  objectiveIcon.className = 'bi bi-bullseye me-2'; // Bootstrap icon for an objective
  
  // Create objective title
  const objectiveTitleElement = document.createElement('h4');
  objectiveTitleElement.className = 'alert-heading mb-0';
  objectiveTitleElement.textContent = objectiveTitle;
  
  // Add icon and title to the wrapper
  objectiveTitleWrapper.appendChild(objectiveIcon);
  objectiveTitleWrapper.appendChild(objectiveTitleElement);
  
  // Create objective text
  const objectiveTextElement = document.createElement('p');
  objectiveTextElement.className = 'mb-0';
  objectiveTextElement.textContent = objectiveText;
  
  // Assemble objective block
  objectiveBlock.appendChild(objectiveTitleWrapper);
  objectiveBlock.appendChild(objectiveTextElement);
  
  // Assemble card body
  cardBody.appendChild(introParagraph);
  cardBody.appendChild(objectiveBlock);
  
  // Assemble introduction module
  introductionModule.appendChild(cardHeader);
  introductionModule.appendChild(cardBody);
  
  return introductionModule;
}

/**
 * Initializes the introduction module with the given element ID
 * @param {string} elementId - The ID of the element to replace with the introduction
 * @param {string} introText - Introduction paragraph text
 * @param {string} objectiveTitle - Title of the objective section
 * @param {string} objectiveText - Text for the objective section
 */
function initIntroduction(elementId, introText, objectiveTitle, objectiveText) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const introductionModule = createIntroduction(introText, objectiveTitle, objectiveText);
    targetElement.parentNode.replaceChild(introductionModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the introduction module by extracting data from the page
 * This function runs automatically when the script is loaded
 */
function autoInitializeIntroduction() {
  console.log("Auto-initializing introduction module");
  
  // Extract data from structured_content.md
  const moduleData = {
    introText: "Te-ai întrebat vreodată de ce vezi același tip de conținut sau aceiași oameni pe Facebook? Sau poate aceleași persoane pe LinkedIn? Acesta este efectul algoritmilor; ei personalizează ceea ce vezi pe fiecare platformă, analizând activitatea ta anterioară.",
    objectiveTitle: "Obiectivul de astăzi",
    objectiveText: "Să înțelegem cum Inteligența Artificială (IA) modelează ceea ce vedem online prin personalizare și să învățăm să recunoaștem când ne aflăm într-o bulă de filtre care ne limitează perspectiva."
  };
  
  // Initialize the introduction when the DOM is ready
  const initialize = () => {
    const targetElement = document.getElementById("introduction-container");
    if (targetElement) {
      const introductionModule = createIntroduction(
        moduleData.introText,
        moduleData.objectiveTitle,
        moduleData.objectiveText
      );
      targetElement.innerHTML = '';
      targetElement.appendChild(introductionModule);
    } else {
      console.error("Element with ID 'introduction-container' not found.");
    }
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeIntroduction();

// Export the functions for use elsewhere if needed
export { createIntroduction, initIntroduction, autoInitializeIntroduction };
