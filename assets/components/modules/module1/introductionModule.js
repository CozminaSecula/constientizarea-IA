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
  
  // Create objective text container with objectives
  const objectiveTextElement = document.createElement('div');
  objectiveTextElement.className = 'mb-3';
  
  // Add the objectives intro text
  const objectivesIntro = document.createElement('p');
  objectivesIntro.className = 'mb-2';
  objectivesIntro.textContent = 'La finalul acestui modul vei putea:';
  objectiveTextElement.appendChild(objectivesIntro);
  
  // Create and style the ordered list
  const objectivesList = document.createElement('ol');
  objectivesList.className = 'ms-4 mb-0'; // Add left margin and remove bottom margin
  
  // Parse objectives and create list items
  const objectives = Array.isArray(objectiveText) ? objectiveText : objectiveText.split('\n');
  objectives.forEach(objective => {
    if (objective.trim()) {
      const li = document.createElement('li');
      li.className = 'mb-2';
      li.textContent = objective.trim();
      objectivesList.appendChild(li);
    }
  });
  
  // Add list to container
  objectiveTextElement.appendChild(objectivesList);
  
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
    introText: "Indiferent dacă ești un utilizator avansat al celor mai noi tehnologii sau preferi simplitatea, funcțiile bazate pe Inteligență Artificială (IA) și-au făcut treptat apariția în instrumentele de lucru din jurul nostru. Mulți le folosim zilnic fără să ne dăm seama, în timp ce alții poate nu le-au întâlnit încă.",
    objectiveTitle: "Obiectivele modulului",
    objectiveText: [
      "Identifica funcțiile bazate pe IA în aplicațiile pe care le folosești zilnic.",
      "Diferenția între funcțiile tradiționale și cele bazate pe IA.",
      "Evalua impactul acestor funcții asupra activității tale."
    ] 
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
