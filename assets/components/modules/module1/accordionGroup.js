/**
 * Creates an Accordion Group component for identifying AI features
 * @param {string} title - The section title
 * @param {string} description - The description text
 * @param {Array} accordions - Array of accordion objects with title, icon, color, and items
 * @returns {HTMLElement} - The accordion group element
 */
function createAccordionGroup(title, description, accordions) {
  // Create main container
  const accordionGroupModule = document.createElement('div');
  accordionGroupModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-3';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-lightbulb me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #FDBF11'; // yellow-60
  titleIcon.style.display = 'flex'; // Ensure icon is displayed as flex
  titleIcon.style.alignItems = 'center'; // Center align vertically
  titleIcon.style.justifyContent = 'center'; // Center align horizontally
  titleIcon.style.marginTop = '-2px'; // Fine-tune vertical alignment with title


  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = title;
  sectionTitle.style.margin = '0'; 
  
  // Assemble title container
  titleContainer.appendChild(titleIcon);
  titleContainer.appendChild(sectionTitle);
  
  // Create description
  const descriptionText = document.createElement('p');
  descriptionText.className = 'mb-4';
  descriptionText.textContent = description;
  
  // Create accordion container
  const accordionContainer = document.createElement('div');
  accordionContainer.className = 'accordion';
  accordionContainer.id = 'aiFeatureAccordion';
  
  // Add each accordion item
  accordions.forEach((accordion, index) => {
    // Create accordion item
    const accordionItem = document.createElement('div');
    accordionItem.className = 'accordion-item mb-3';
    accordionItem.style.border = '1px solid rgba(0, 0, 0, 0.125)';
    accordionItem.style.borderRadius = '0.25rem';
    
    // Create accordion header
    const accordionHeader = document.createElement('h2');
    accordionHeader.className = 'accordion-header';
    accordionHeader.id = `heading${index}`;
    
    // Create accordion button
    const accordionButton = document.createElement('button');
    accordionButton.className = 'accordion-button';
    accordionButton.type = 'button';
    accordionButton.setAttribute('data-bs-toggle', 'collapse');
    accordionButton.setAttribute('data-bs-target', `#collapse${index}`);
    accordionButton.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    accordionButton.setAttribute('aria-controls', `collapse${index}`);
    
    // Set background color based on accordion type
    accordionButton.style.backgroundColor = accordion.color;
    accordionButton.style.color = ' #ffffff';
    
    // Create button content with icon
    const buttonContent = document.createElement('div');
    buttonContent.className = 'd-flex align-items-center';
    
    // Add icon
    const icon = document.createElement('i');
    icon.className = `bi ${accordion.icon} me-2`;
    
    // Add title
    const headerTitle = document.createElement('h4');
    headerTitle.className = 'm-0';
    headerTitle.style.fontSize = '1.1rem';
    headerTitle.textContent = accordion.title;
    
    // Assemble button content
    buttonContent.appendChild(icon);
    buttonContent.appendChild(headerTitle);
    
    // Add button content to button
    accordionButton.appendChild(buttonContent);
    
    // Create accordion collapse
    const accordionCollapse = document.createElement('div');
    accordionCollapse.id = `collapse${index}`;
    accordionCollapse.className = `accordion-collapse collapse ${index === 0 ? 'show' : ''}`;
    accordionCollapse.setAttribute('aria-labelledby', `heading${index}`);
    accordionCollapse.setAttribute('data-bs-parent', '#aiFeatureAccordion');
    
    // Create accordion body
    const accordionBody = document.createElement('div');
    accordionBody.className = 'accordion-body';
    
    // Create subtitle
    const subtitle = document.createElement('p');
    subtitle.className = 'fw-bold mb-3';
    subtitle.textContent = accordion.subtitle;
    
    // Create list
    const list = document.createElement('ul');
    list.className = 'list-unstyled';
    
    // Add list items
    accordion.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'mb-2';
      
      // Create item with bullet
      const itemText = document.createElement('div');
      itemText.className = 'd-flex align-items-center';
      
      // Create bullet
      const bullet = document.createElement('i');
      bullet.className = 'bi bi-dot me-2 mt-1';
      bullet.style.fontSize = '1.2rem';
      
      // Create text
      const text = document.createElement('span');
      text.textContent = item;
      
      // Assemble item
      itemText.appendChild(bullet);
      itemText.appendChild(text);
      
      // Add to list
      listItem.appendChild(itemText);
      list.appendChild(listItem);
    });
    
    // Assemble accordion body
    accordionBody.appendChild(subtitle);
    accordionBody.appendChild(list);
    
    // Assemble accordion collapse
    accordionCollapse.appendChild(accordionBody);
    
    // Assemble accordion item
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionCollapse);
    
    // Add to container
    accordionContainer.appendChild(accordionItem);
  });
  
  // Assemble accordion group
  accordionGroupModule.appendChild(titleContainer);
  accordionGroupModule.appendChild(descriptionText);
  accordionGroupModule.appendChild(accordionContainer);
  
  return accordionGroupModule;
}

/**
 * Initializes the accordion group module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {string} description - The description text
 * @param {Array} accordions - Array of accordion objects with title, icon, color, and items
 */
function initAccordionGroup(elementId, title, description, accordions) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const accordionGroupModule = createAccordionGroup(title, description, accordions);
    targetElement.parentNode.replaceChild(accordionGroupModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the accordion group module
 */
function autoInitializeAccordionGroup() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Cum să identifici funcțiile bazate pe IA în instrumentele tale",
    description: "Iată câteva categorii de funcții bazate pe IA întâlnite frecvent:",
    accordions: [
      {
        title: "Funcții care învață",
        subtitle: "Se adaptează și se îmbunătățesc pe baza interacțiunilor tale anterioare.",
        icon: "bi-graph-up",
        color: "#62A8CB", // cyan-90
        items: [
          "Sugestii de text care se adaptează la stilul tău de scriere și oferă completări mai relevante.",
          "Organizator de fotografii care învață să recunoască mai bine persoanele și obiectele importante pentru tine.",
          "Flux de știri persoanlizat care afișează mai mult conținut similar cu cel cu care interacționezi frecvent."
        ]
      },
      {
        title: "Funcții predictive",
        subtitle: "Funcții care anticipează nevoile tale.",
        icon: "bi-reception-4",
        color: "#78C26D", // green-90
        items: [
          "Răspunsuri inteligente la email care se potrivesc stilului tău de comunicare.",
          "Sugestii de programare care propun întâlniri bazate pe conținutul conversațiilor tale.",
          "Text predictiv care completează automat frazele când scrii mesaje pe telefon."
        ]
      },
      {
        title: "Funcții de automatizare",
        subtitle: "Funcții care automatizează sarcini repetitive.",
        icon: "bi-magic",
        color: "#E16B67", // red-90
        items: [
          "Sortarea automată a emailurilor în categorii relevante.",
          "Transcriere și rezumare, transformă înregistrările audio în text și extrag punctele principale.",
          "Extragerea datelor, identifică și organizează informațiile din documente scanate."
        ]
      },
      {
        title: "Funcții lingvistice",
        subtitle: "Funcții care înțeleg și procesează limbajul uman",
        icon: "bi-chat-dots",
        color: "#FFD173", // yellow-90
        items: [
          "Asistenți de căutare care înțeleg întrebări complexe și oferă răspunsuri directe, nu doar linkuri.",
          "Asistenți vocali care interpretează comenzi verbale și răspund în mod natural.",
          "Corectare gramaticală avansată, oferă sugestii de îmbunătățire care țin cont de context și intenție."
        ]
      }
    ]
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initAccordionGroup(
      "accordion-group-container", 
      moduleData.title, 
      moduleData.description, 
      moduleData.accordions
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
autoInitializeAccordionGroup();

// Export the functions for use elsewhere if needed
export { createAccordionGroup, initAccordionGroup };
