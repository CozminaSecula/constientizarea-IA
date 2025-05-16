/**
 * Creates an Interactive Reflection Form component
 * @param {string} title - The section title
 * @param {Array} questions - Array of reflection questions
 * @returns {HTMLElement} - The reflection form element
 */
function createReflectionForm(title, questions) {
  // Create main container
  const reflectionFormModule = document.createElement('div');
  reflectionFormModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-journal-text me-2';
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
  card.className = 'card';
  
  // Create card body
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  
  // Create form
  const form = document.createElement('form');
  form.id = 'reflection-form';
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    saveReflection();
  });
  
  // Create dropdown for question selection
  const formGroup = document.createElement('div');
  formGroup.className = 'form-group mb-3';
  
  const dropdownLabel = document.createElement('label');
  dropdownLabel.htmlFor = 'question-selector';
  dropdownLabel.className = 'form-label';
  dropdownLabel.textContent = 'Răspunde pentru tine la una dintre întrebările următoare:';
  
  const dropdown = document.createElement('select');
  dropdown.className = 'form-select mb-3';
  dropdown.id = 'question-selector';
  
  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '-- Selectează o întrebare --';
  defaultOption.selected = true;
  dropdown.appendChild(defaultOption);
  
  // Add question options
  questions.forEach((question, index) => {
    const option = document.createElement('option');
    option.value = `question-${index}`;
    option.textContent = question;
    dropdown.appendChild(option);
  });
  
  // Create textarea for reflection
  const textareaGroup = document.createElement('div');
  textareaGroup.className = 'form-group mb-3';
  
  const textareaLabel = document.createElement('label');
  textareaLabel.htmlFor = 'reflection-text';
  textareaLabel.className = 'form-label';
  textareaLabel.textContent = 'Reflecția ta:';
  
  const textarea = document.createElement('textarea');
  textarea.className = 'form-control';
  textarea.id = 'reflection-text';
  textarea.rows = 4;
  textarea.placeholder = 'Scrie-ți gândurile aici... nu le salvăm nicăieri, folosește spațiul pentru a-ți organiza ideile.';
  
  // Create submit button
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'btn btn-outline-primary';
  submitButton.textContent = 'Salvează reflecția';
  
  // Create feedback area (hidden initially)
  const feedbackArea = document.createElement('div');
  feedbackArea.id = 'reflection-feedback';
  feedbackArea.className = 'mt-3 d-none';
  
  // Assemble form
  formGroup.appendChild(dropdownLabel);
  formGroup.appendChild(dropdown);
  textareaGroup.appendChild(textareaLabel);
  textareaGroup.appendChild(textarea);
  form.appendChild(formGroup);
  form.appendChild(textareaGroup);
  form.appendChild(submitButton);
  
  // Assemble card
  cardBody.appendChild(form);
  cardBody.appendChild(feedbackArea);
  card.appendChild(cardBody);
  
  // Assemble reflection form module
  reflectionFormModule.appendChild(titleContainer);
  reflectionFormModule.appendChild(card);
  
  return reflectionFormModule;
}

/**
 * Saves the reflection and shows feedback
 */
function saveReflection() {
  const questionSelect = document.getElementById('question-selector');
  const reflectionText = document.getElementById('reflection-text');
  const feedbackArea = document.getElementById('reflection-feedback');
  
  if (questionSelect && reflectionText && feedbackArea) {
    const selectedQuestion = questionSelect.options[questionSelect.selectedIndex].textContent;
    const reflection = reflectionText.value.trim();
    
    if (questionSelect.value === '') {
      // No question selected
      feedbackArea.className = 'alert alert-warning mt-3';
      feedbackArea.textContent = 'Te rugăm să selectezi o întrebare.';
      return;
    }
    
    if (reflection === '') {
      // No reflection entered
      feedbackArea.className = 'alert alert-warning mt-3';
      feedbackArea.textContent = 'Te rugăm să scrii o reflecție.';
      return;
    }
    
    // Save reflection to localStorage
    try {
      let savedReflections = JSON.parse(localStorage.getItem('reflections')) || [];
      savedReflections.push({
        question: selectedQuestion,
        reflection: reflection,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('reflections', JSON.stringify(savedReflections));
      
      // Show success feedback
      feedbackArea.className = 'alert alert-success mt-3 fade show';
      
      // Create success content with icon
      const successContent = document.createElement('div');
      successContent.className = 'd-flex align-items-center';
      
      const icon = document.createElement('i');
      icon.className = 'bi bi-check-circle-fill me-3';
      icon.style.fontSize = '1.2rem';
      
      const message = document.createElement('div');
      message.textContent = 'Reflecția ta a fost salvată cu succes!';
      
      successContent.appendChild(icon);
      successContent.appendChild(message);
      
      feedbackArea.innerHTML = '';
      feedbackArea.appendChild(successContent);
      
      // Clear form
      reflectionText.value = '';
      questionSelect.selectedIndex = 0;
      
      // Automatically hide feedback after 5 seconds
      setTimeout(() => {
        feedbackArea.classList.add('fade');
        setTimeout(() => {
          feedbackArea.className = 'mt-3 d-none';
        }, 500);
      }, 5000);
    } catch (error) {
      console.error('Error saving reflection:', error);
      feedbackArea.className = 'alert alert-danger mt-3';
      feedbackArea.textContent = 'A apărut o eroare la salvarea reflecției.';
    }
  }
}

/**
 * Initializes the reflection form module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {Array} questions - Array of reflection questions
 */
function initReflectionForm(elementId, title, questions) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const reflectionFormModule = createReflectionForm(title, questions);
    targetElement.parentNode.replaceChild(reflectionFormModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the reflection form module
 */
function autoInitializeReflectionForm() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Reflecție",
    questions: [
      "Cum ar putea bula de filtrare să îți afecteze deciziile profesionale într-o situație concretă din domeniul tău?",
      "Ce exemplu specific de personalizare te-a surprins cel mai mult dintre cele menționate?",
      "Care este prima acțiune concretă pe care o vei implementa pentru a-ți diversifica sursele de informare?"
    ]
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initReflectionForm(
      "reflection-form-container",
      moduleData.title,
      moduleData.questions
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
autoInitializeReflectionForm();

// Export the functions for use elsewhere if needed
export { createReflectionForm, initReflectionForm };
