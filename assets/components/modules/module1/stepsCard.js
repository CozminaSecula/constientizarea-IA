/**
 * Creates a Steps Card component for the awareness exercise
 * @param {string} title - The section title
 * @param {Array} sections - Array of section objects with title, steps, and bonus
 * @returns {HTMLElement} - The steps card element
 */
function createStepsCard(title, sections) {
  // Create main container
  const stepsCardModule = document.createElement('div');
  stepsCardModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-clipboard-check me-2';
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
  card.className = 'card border-primary';
  
  // Create sections
  sections.forEach((section, index) => {
    // Create section container with appropriate background
    const sectionContainer = document.createElement('div');
    sectionContainer.className = index === 0 ? 'p-4 mb-0' : 'p-4';
    sectionContainer.style.backgroundColor = index === 0 ? ' #CFE8F3' : ' #ECECEC'; // cyan-100 //grey-light-90

    // Create section header
    const sectionHeader = document.createElement('div');
    sectionHeader.className = 'd-flex align-items-center mb-3';
    
    // Add section icon
    const sectionIcon = document.createElement('i');
    sectionIcon.className = section.icon + ' me-2';
    sectionIcon.style.fontSize = '1.25rem';
    sectionIcon.style.color = index === 0 ? ' #000000' : ' #000000'; // black

    // Create section title
    const sectionHeading = document.createElement('h3');
    sectionHeading.className = 'm-0';
    sectionHeading.style.fontSize = '1.25rem';
    sectionHeading.textContent = section.title;
    
    // Assemble section header
    sectionHeader.appendChild(sectionIcon);
    sectionHeader.appendChild(sectionHeading);
    
    // Create steps list
    const stepsList = document.createElement('ol');
    stepsList.className = 'list-group list-group-numbered mb-3';
    
    // Add steps
    section.steps.forEach(step => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item border-0 ps-0';
      listItem.style.backgroundColor = 'transparent';
      listItem.textContent = step;
      stepsList.appendChild(listItem);
    });
    
    // Add bonus if available
    if (section.bonus) {
      const bonusContainer = document.createElement('div');
      bonusContainer.className = 'mt-3';
      
      const bonusBadge = document.createElement('span');
      bonusBadge.className = 'badge bg-primary me-2';
      bonusBadge.textContent = 'Bonus';
      
      const bonusText = document.createElement('span');
      bonusText.textContent = section.bonus;
      
      bonusContainer.appendChild(bonusBadge);
      bonusContainer.appendChild(bonusText);
      sectionContainer.appendChild(sectionHeader);
      sectionContainer.appendChild(stepsList);
      sectionContainer.appendChild(bonusContainer);
    } else {
      sectionContainer.appendChild(sectionHeader);
      sectionContainer.appendChild(stepsList);
    }
    
    // Add section to card
    card.appendChild(sectionContainer);
  });
  
  // Assemble steps card module
  stepsCardModule.appendChild(titleContainer);
  stepsCardModule.appendChild(card);
  
  return stepsCardModule;
}

/**
 * Initializes the steps card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {Array} sections - Array of section objects
 */
function initStepsCard(elementId, title, sections) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const stepsCardModule = createStepsCard(title, sections);
    targetElement.parentNode.replaceChild(stepsCardModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the steps card module
 */
function autoInitializeStepsCard() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Exercițiu de conștientizare IA: 30 de secunde",
    sections: [
      {
        title: "Pentru utilizatorii instrumentelor cu IA:",
        icon: "bi bi-tools",
        steps: [
          "Mâine, când deschizi prima aplicație de lucru, observă cu atenție interfața.",
          "Identifică un element care oferă sugestii personalizate sau automatizează o decizie.",
          "Întreabă-te: Această funcție mă ajută cu adevărat sau doar complică lucrurile?"
        ],
        bonus: "Găsește în setările aplicației unde poți personaliza comportamentul acestei funcții."
      },
      {
        title: "Pentru cei fără acces curent la instrumente IA:",
        icon: "bi bi-search",
        steps: [
          "Alege o sarcină repetitivă care îți ocupă zilnic cel puțin 15 minute.",
          "Caută online un instrument bazat pe IA care ar putea automatiza această sarcină.",
          "Evaluează beneficiile potențiale: timp economisit vs. efort de învățare."
        ],
        bonus: "Discută cu un coleg despre o funcție IA pe care o folosește și ce impact are asupra productivității sale."
      }
    ]
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initStepsCard(
      "steps-card-container",
      moduleData.title,
      moduleData.sections
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
autoInitializeStepsCard();

// Export the functions for use elsewhere if needed
export { createStepsCard, initStepsCard };
