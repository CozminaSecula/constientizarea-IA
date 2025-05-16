/**
 * Creates an Interactive Activity Card component
 * @param {string} title - The activity section title
 * @param {Array} activities - Array of activity objects with title and steps
 * @returns {HTMLElement} - The activity card element
 */
function createActivityCard(title, activities) {
  // Create main container
  const activityCardModule = document.createElement('div');
  activityCardModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-stopwatch me-2';
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
  
  // Create activity card
  const card = document.createElement('div');
  card.className = 'card border-success';
  
  // Create card header
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header bg-success bg-opacity-10';
  cardHeader.textContent = 'Alege o opțiune de activitate:';
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create nav pills for activities
  const navPills = document.createElement('ul');
  navPills.className = 'nav nav-pills mb-3';
  navPills.id = 'activity-tabs';
  navPills.setAttribute('role', 'tablist');
  
  // Create tab content
  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabContent.id = 'activity-content';
  
  // Create each activity tab and content
  activities.forEach((activity, index) => {
    // Create nav item
    const navItem = document.createElement('li');
    navItem.className = 'nav-item';
    navItem.role = 'presentation';
    
    // Create nav link (tab button)
    const navLink = document.createElement('button');
    navLink.className = `nav-link ${index === 0 ? 'active' : ''}`;
    navLink.id = `${activity.id}-tab`;
    navLink.setAttribute('data-bs-toggle', 'pill');
    navLink.setAttribute('data-bs-target', `#${activity.id}`);
    navLink.type = 'button';
    navLink.role = 'tab';
    navLink.setAttribute('aria-controls', activity.id);
    navLink.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    navLink.textContent = activity.title;
    
    // Assemble nav item
    navItem.appendChild(navLink);
    navPills.appendChild(navItem);
    
    // Create tab pane
    const tabPane = document.createElement('div');
    tabPane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
    tabPane.id = activity.id;
    tabPane.role = 'tabpanel';
    tabPane.setAttribute('aria-labelledby', `${activity.id}-tab`);
    
    // Create steps list
    const stepsList = document.createElement('ol');
    stepsList.className = 'list-group list-group-numbered mb-3';
    
    // Add steps
    activity.steps.forEach(step => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item border-0 ps-0';
      listItem.textContent = step;
      stepsList.appendChild(listItem);
    });
    
    // Add bonus if available
    if (activity.bonus) {
      const bonusContainer = document.createElement('div');
      bonusContainer.className = 'mt-3';
      
      const bonusBadge = document.createElement('span');
      bonusBadge.className = 'badge bg-success me-2';
      bonusBadge.textContent = 'Bonus';
      
      const bonusText = document.createElement('span');
      bonusText.textContent = activity.bonus;
      
      bonusContainer.appendChild(bonusBadge);
      bonusContainer.appendChild(bonusText);
      tabPane.appendChild(stepsList);
      tabPane.appendChild(bonusContainer);
    } else {
      tabPane.appendChild(stepsList);
    }
    
    // Create notes area
    const notesSection = document.createElement('div');
    notesSection.className = 'mt-3';
    
    const notesLabel = document.createElement('label');
    notesLabel.htmlFor = `notes-${activity.id}`;
    notesLabel.className = 'form-label';
    notesLabel.textContent = 'Notele tale:';
    
    const notesArea = document.createElement('textarea');
    notesArea.className = 'form-control';
    notesArea.id = `notes-${activity.id}`;
    notesArea.rows = 3;
    notesArea.placeholder = 'Scrie observațiile tale aici...nu le salvăm, sunt doar pentru tine.';
    
    // Assemble notes section
    notesSection.appendChild(notesLabel);
    notesSection.appendChild(notesArea);
    tabPane.appendChild(notesSection);
    
    // Create save button
    const saveButton = document.createElement('button');
    saveButton.className = 'btn btn-success mt-3';
    saveButton.textContent = 'Salvează notițele';
    saveButton.addEventListener('click', () => saveNotes(activity.id));
    tabPane.appendChild(saveButton);
    
    // Add feedback area (hidden initially)
    const feedbackArea = document.createElement('div');
    feedbackArea.id = `feedback-${activity.id}`;
    feedbackArea.className = 'mt-3 d-none';
    tabPane.appendChild(feedbackArea);
    
    // Add tab pane to content
    tabContent.appendChild(tabPane);
  });
  
  // Assemble card
  cardBody.appendChild(navPills);
  cardBody.appendChild(tabContent);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  
  // Assemble activity card module
  activityCardModule.appendChild(titleContainer);
  activityCardModule.appendChild(card);
  
  return activityCardModule;
}

/**
 * Saves notes for an activity and shows feedback
 * @param {string} activityId - The ID of the activity
 */
function saveNotes(activityId) {
  const notesArea = document.getElementById(`notes-${activityId}`);
  const feedbackArea = document.getElementById(`feedback-${activityId}`);
  
  if (notesArea && feedbackArea) {
    const notes = notesArea.value.trim();
    
    // Show feedback
    feedbackArea.className = 'alert alert-success mt-3';
    feedbackArea.innerHTML = '';
    
    // Create check icon
    const icon = document.createElement('i');
    icon.className = 'bi bi-check-circle-fill me-3';
    icon.style.fontSize = '1.2rem';
    icon.style.verticalAlign = 'middle';
    
    // Add feedback message
    const message = document.createElement('span');
    message.textContent = notes ? 'Notițele tale au fost salvate!' : 'Activitate marcată ca finalizată!';
    message.style.verticalAlign = 'middle';
    
    // Assemble feedback
    feedbackArea.appendChild(icon);
    feedbackArea.appendChild(message);
    
    // Save notes to localStorage
    if (notes) {
      try {
        let savedNotes = JSON.parse(localStorage.getItem('activityNotes')) || {};
        savedNotes[activityId] = notes;
        localStorage.setItem('activityNotes', JSON.stringify(savedNotes));
      } catch (error) {
        console.error('Error saving notes to localStorage:', error);
      }
    }
  }
}

/**
 * Initializes the activity card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {Array} activities - Array of activity objects
 */
function initActivityCard(elementId, title, activities) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const activityCardModule = createActivityCard(title, activities);
    targetElement.parentNode.replaceChild(activityCardModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the activity card module
 */
function autoInitializeActivityCard() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Activitate practică: 2 minute",
    activities: [
      {
        id: "option-a",
        title: "Pentru utilizatorii instrumentelor cu funcții IA:",
        steps: [
          "Identifică 3 aplicații pe care le-ai folosit astăzi.",
          "Pentru fiecare, găsește o funcție care ar putea folosi IA (conform caracteristicilor învățate).",
          "Notează cum te ajută sau te împiedică această funcție în activitatea ta zilnică."
        ],
        bonus: null
      },
      {
        id: "option-b",
        title: "Pentru cei fără acces la astfel de instrumente:",
        steps: [
          "Din lista de exemple prezentate, alege 3 funcționalități care ți-ar fi cele mai utile.",
          "Descrie concret cum ți-ar îmbunătăți fluxul de lucru.",
          "Ce task repetat zilnic ai putea automatiza cu ajutorul IA?"
        ],
        bonus: null
      }
    ]
  };
  
  // Load previously saved notes
  const loadSavedNotes = () => {
    try {
      const savedNotes = JSON.parse(localStorage.getItem('activityNotes')) || {};
      
      moduleData.activities.forEach(activity => {
        const notesArea = document.getElementById(`notes-${activity.id}`);
        if (notesArea && savedNotes[activity.id]) {
          notesArea.value = savedNotes[activity.id];
        }
      });
    } catch (error) {
      console.error('Error loading saved notes:', error);
    }
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initActivityCard(
      "activity-card-container",
      moduleData.title,
      moduleData.activities
    );
    // Load saved notes after DOM is fully loaded
    setTimeout(loadSavedNotes, 500);
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeActivityCard();

// Export the functions for use elsewhere if needed
export { createActivityCard, initActivityCard };
