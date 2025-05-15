/**
 * Creates a Header Module component based on design system specifications
 * @param {string} title - The title of the lesson
 * @param {string} duration - The duration of the lesson (e.g., "30 minute")
 * @param {string} type - The type of lesson (e.g., "Learning module")
 * @returns {HTMLElement} - The header module element
 */
function createHeaderModule(title, duration, type) {
  console.log("Creating header module with:", { title, duration, type });
  
  // Create main container with gradient background
  const headerModule = document.createElement('div');
  headerModule.className = 'container-fluid py-3 mb-4';
  headerModule.style.background = 'linear-gradient(to right, #1696D2, #A2D4EC)'; // cyan-70 to cyan-50
  headerModule.style.color = 'black';
  headerModule.style.borderRadius = '0.25rem';
  
  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'container py-2';
  
  // Create title
  const titleElement = document.createElement('h1');
  titleElement.className = 'display-4';
  titleElement.style.fontWeight = '600';
  titleElement.textContent = title;
  
  // Create subtitle with duration and type
  const subtitleElement = document.createElement('h2');
  subtitleElement.className = 'lead';
  subtitleElement.textContent = `${duration} ${type}`;
  
  // Append title and subtitle to content container
  contentContainer.appendChild(titleElement);
  contentContainer.appendChild(subtitleElement);
  
  // Assemble header module (without progress bar)
  headerModule.appendChild(contentContainer);
  
  return headerModule;
}

/**
 * Initializes the header module with the given element ID
 * @param {string} elementId - The ID of the element to replace with the header
 * @param {string} title - The title of the lesson
 * @param {string} duration - The duration of the lesson
 * @param {string} type - The type of lesson
 */
function initHeaderModule(elementId, title, duration, type) {
  console.log("Initializing header module for element:", elementId);
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    console.log("Target element found, replacing with header module");
    const headerModule = createHeaderModule(title, duration, type);
    targetElement.parentNode.replaceChild(headerModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the header module by extracting data from the page
 * This function runs automatically when the script is loaded
 */
function autoInitializeHeaderModule() {
  console.log("Auto-initializing header module");
  
  // Extract data from structured_content.md 
  // This could be enhanced to fetch from the actual markdown file
  const moduleData = {
    title: 'Personalizarea & "Bula de Filtrare"',
    duration: "",
    type: "Conștientizarea IA"
  };
  
  // Initialize the header when the DOM is ready
  const initialize = () => {
    initHeaderModule("header-container", 
                     moduleData.title, 
                     moduleData.duration, 
                     moduleData.type);
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeHeaderModule();

// Only export what's needed for external use
export { createHeaderModule, initHeaderModule };
