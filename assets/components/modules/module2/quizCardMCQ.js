/**
 * Creates an Interactive Quiz Card component
 * @param {string} title - The quiz section title
 * @param {Array} questions - Array of question objects with text, type, options, and correct answers
 * @returns {HTMLElement} - The quiz card element
 */
function createQuizCard(title, questions) {
  // Create main container
  const quizCardModule = document.createElement('div');
  quizCardModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-question-circle me-2';
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
  
  // Create questions container
  const questionsContainer = document.createElement('div');
  questionsContainer.id = 'quiz-questions';
  
  // Create each question
  questions.forEach((question, questionIndex) => {
    // Create question card
    const questionCard = document.createElement('div');
    questionCard.className = 'card border-warning mb-4';
    questionCard.id = `question-${questionIndex}`;
    
    // Create card header
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header bg-warning bg-opacity-10';
    
    // Create question title
    const questionTitle = document.createElement('h5');
    questionTitle.className = 'card-title';
    questionTitle.textContent = question.text;
    
    // Assemble card header
    cardHeader.appendChild(questionTitle);
    
    // Create card body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Create options based on question type
    if (question.type === 'radio') {
      // Single-choice question
      question.options.forEach((option, optionIndex) => {
        const optionId = `q${questionIndex}-option${optionIndex}`;
        
        // Create option container
        const optionContainer = document.createElement('div');
        optionContainer.className = 'form-check mb-2';
        
        // Create radio input
        const radioInput = document.createElement('input');
        radioInput.className = 'form-check-input';
        radioInput.type = 'radio';
        radioInput.name = `question-${questionIndex}`;
        radioInput.id = optionId;
        radioInput.value = option;
        
        // Create label
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = optionId;
        label.textContent = option;
        
        // Assemble option
        optionContainer.appendChild(radioInput);
        optionContainer.appendChild(label);
        cardBody.appendChild(optionContainer);
      });
    } else if (question.type === 'checkbox') {
      // Multi-choice question
      question.options.forEach((option, optionIndex) => {
        const optionId = `q${questionIndex}-option${optionIndex}`;
        
        // Create option container
        const optionContainer = document.createElement('div');
        optionContainer.className = 'form-check mb-2';
        
        // Create checkbox input
        const checkboxInput = document.createElement('input');
        checkboxInput.className = 'form-check-input';
        checkboxInput.type = 'checkbox';
        checkboxInput.name = `question-${questionIndex}`;
        checkboxInput.id = optionId;
        checkboxInput.value = option;
        
        // Create label
        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = optionId;
        label.textContent = option;
        
        // Assemble option
        optionContainer.appendChild(checkboxInput);
        optionContainer.appendChild(label);
        cardBody.appendChild(optionContainer);
      });
    }
    
    // Create feedback area (hidden initially)
    const feedbackArea = document.createElement('div');
    feedbackArea.id = `feedback-${questionIndex}`;
    feedbackArea.className = 'mt-3 d-none';
    cardBody.appendChild(feedbackArea);
    
    // Create check answer button
    const checkButton = document.createElement('button');
    checkButton.className = 'btn btn-warning mt-3';
    checkButton.textContent = 'Verifică răspunsul';
    checkButton.addEventListener('click', () => checkAnswer(questionIndex, question));
    cardBody.appendChild(checkButton);
    
    // Assemble question card
    questionCard.appendChild(cardHeader);
    questionCard.appendChild(cardBody);
    questionsContainer.appendChild(questionCard);
  });
  
  // Assemble quiz card module
  quizCardModule.appendChild(titleContainer);
  quizCardModule.appendChild(questionsContainer);
  
  return quizCardModule;
}

/**
 * Checks the answer for a specific question
 * @param {number} questionIndex - The index of the question
 * @param {Object} question - The question object with correct answers
 */
function checkAnswer(questionIndex, question) {
  const feedbackArea = document.getElementById(`feedback-${questionIndex}`);
  let isCorrect = false;
  let selectedAnswers = [];
  
  // Get selected answers based on question type
  if (question.type === 'radio') {
    const selectedOption = document.querySelector(`input[name="question-${questionIndex}"]:checked`);
    if (selectedOption) {
      selectedAnswers = [selectedOption.value];
      isCorrect = selectedAnswers[0] === question.correctAnswer;
    }
  } else if (question.type === 'checkbox') {
    const checkboxes = document.querySelectorAll(`input[name="question-${questionIndex}"]:checked`);
    checkboxes.forEach(checkbox => {
      selectedAnswers.push(checkbox.value);
    });
    
    // Check if selected answers match correct answers (same length and all items match)
    isCorrect = selectedAnswers.length === question.correctAnswers.length && 
                question.correctAnswers.every(answer => selectedAnswers.includes(answer));
  }
  
  // Show feedback
  feedbackArea.className = 'mt-3';
  feedbackArea.innerHTML = '';
  
  if (selectedAnswers.length === 0) {
    // No answer selected
    const alert = document.createElement('div');
    alert.className = 'alert alert-info';
    alert.textContent = 'Te rugăm să selectezi un răspuns.';
    feedbackArea.appendChild(alert);
  } else if (isCorrect) {
    // Correct answer
    const alert = document.createElement('div');
    alert.className = 'alert alert-success';
    
    // Create check icon with improved spacing
    const icon = document.createElement('i');
    icon.className = 'bi bi-check-circle-fill me-3'; // Increased margin from me-2 to me-3
    icon.style.fontSize = '1.2rem'; // Slightly larger icon
    icon.style.verticalAlign = 'middle'; // Better vertical alignment
    
    // Add feedback message
    const message = document.createElement('span');
    message.textContent = 'Corect! ' + (question.explanation || '');
    message.style.verticalAlign = 'middle'; // Consistent vertical alignment with icon
    
    // Assemble alert
    alert.appendChild(icon);
    alert.appendChild(message);
    feedbackArea.appendChild(alert);
  } else {
    // Incorrect answer
    const alert = document.createElement('div');
    alert.className = 'alert alert-danger';
    
    // Create error icon with improved spacing
    const icon = document.createElement('i');
    icon.className = 'bi bi-x-circle-fill me-3'; // Increased margin from me-2 to me-3
    icon.style.fontSize = '1.2rem'; // Slightly larger icon
    icon.style.verticalAlign = 'middle'; // Better vertical alignment
    
    // Add feedback message
    const message = document.createElement('span');
    message.textContent = 'Incorect. ' + (question.explanation || '');
    message.style.verticalAlign = 'middle'; // Consistent vertical alignment with icon
    
    // Assemble alert
    alert.appendChild(icon);
    alert.appendChild(message);
    feedbackArea.appendChild(alert);
  }
}

/**
 * Initializes the quiz card module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {Array} questions - Array of question objects
 */
function initQuizCard(elementId, title, questions) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const quizCardModule = createQuizCard(title, questions);
    targetElement.parentNode.replaceChild(quizCardModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the quiz card module
 */
function autoInitializeQuizCard() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Verificare rapidă: Ești într-o bulă de filtrare",
    questions: [
      {
        text: "Care dintre acestea este un semn că s-ar putea să te afli într-o bulă de filtrare? (Selectează toate variantele aplicabile)",
        type: "checkbox",
        options: [
          "Vezi constant știri care se aliniază cu opiniile tale.",
          "Întâlnești rar perspective care ți-ar contesta opiniile.",
          "Primești recomandări care nu au legătură cu interesele tale.",
          "Rezultatele căutării tale diferă de cele ale altora, chiar pentru aceiași termeni."
        ],
        correctAnswers: [
          "Vezi constant știri care se aliniază cu opiniile tale.",
          "Întâlnești rar perspective care ți-ar contesta opiniile.",
          "Rezultatele căutării tale diferă de cele ale altora, chiar pentru aceiași termeni."
        ],
        explanation: "Este posibil să te afli într-o bulă de filtrare, atunci când vezi constant știri care se aliniază cu opiniile tale, întâlnești rar perspective care ți-ar contesta opiniile, rezultatele căutării tale diferă de cele ale altora, chiar pentru aceiași termeni. Acestea sunt semne că algoritmii de filtrare îți personalizează conținutul pentru a se potrivi cu preferințele tale."
      }
    ]
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initQuizCard(
      "quiz-card-container",
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
autoInitializeQuizCard();

// Export the functions for use elsewhere if needed
export { createQuizCard, initQuizCard };
