/**
 * Creates a Tabbed Interface component for displaying common examples in popular tools
 * @param {string} title - The section title
 * @param {string} description - The description text
 * @param {Array} tabs - Array of tab objects with title, logo, and items
 * @returns {HTMLElement} - The tabbed interface element
 */
function createTabbedInterface(title, description, tabs) {
  // Create main container
  const tabbedInterfaceModule = document.createElement('div');
  tabbedInterfaceModule.className = 'container mt-5 mb-4';
  
  // Create section title with icon
  const titleContainer = document.createElement('div');
  titleContainer.className = 'd-flex align-items-center mb-4';
  
  // Add section icon
  const titleIcon = document.createElement('i');
  titleIcon.className = 'bi bi-grid-3x3-gap me-2';
  titleIcon.style.fontSize = '1.5rem';
  titleIcon.style.color = ' #000000'; // black
  titleIcon.style.display = 'flex'; // Ensure icon is displayed as flex
  titleIcon.style.alignItems = 'center'; // Center align vertically
  titleIcon.style.justifyContent = 'center'; // Center align horizontally
  titleIcon.style.marginTop = '-2px'; // Fine-tune vertical alignment with title

  // Create title
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
  
  // Create tabs navigation with improved accessibility
  const tabNav = document.createElement('ul');
  tabNav.className = 'nav nav-tabs mb-3';
  tabNav.id = 'toolsTabs';
  tabNav.role = 'tablist';
  tabNav.style.borderBottom = '2px solid #dee2e6'; // Make border more visible
  
  // Create tab content container
  const tabContent = document.createElement('div');
  tabContent.className = 'tab-content';
  tabContent.id = 'toolsTabContent';
  tabContent.style.border = '1px solid #dee2e6'; // Add border to content
  tabContent.style.borderTop = 'none'; // Remove top border
  tabContent.style.padding = '1rem';
  tabContent.style.borderRadius = '0 0 0.25rem 0.25rem';
  
  // Create each tab and its content
  tabs.forEach((tab, index) => {
    // Create tab nav item
    const tabItem = document.createElement('li');
    tabItem.className = 'nav-item';
    tabItem.role = 'presentation';
    
    // Create tab button with improved focus indicators for accessibility
    const tabButton = document.createElement('button');
    tabButton.className = `nav-link ${index === 0 ? 'active' : ''}`;
    tabButton.id = `${tab.id}-tab`;
    tabButton.setAttribute('data-bs-toggle', 'tab');
    tabButton.setAttribute('data-bs-target', `#${tab.id}`);
    tabButton.type = 'button';
    tabButton.role = 'tab';
    tabButton.setAttribute('aria-controls', tab.id);
    tabButton.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tabButton.style.fontWeight = '500';
    tabButton.style.padding = '0.75rem 1rem';
    
    // Apply focus styles for accessibility
    tabButton.style.outlineOffset = '2px';
    
    // Create tab button content with brand icon
    const tabButtonContent = document.createElement('div');
    tabButtonContent.className = 'd-flex align-items-center';
    
    // Add brand icon instead of logo
    const brandIcon = document.createElement('i');
    
    // Set appropriate brand icon class
    switch(tab.id) {
      case 'microsoft365':
        brandIcon.className = 'fab fa-microsoft me-2';
        brandIcon.style.color = ' #1696D2';
        break;
      case 'google-workspace':
        brandIcon.className = 'fab fa-google me-2';
        brandIcon.style.color = ' #1696D2';
        break;
      case 'slack-teams':
        brandIcon.className = 'fab fa-slack me-2';
        brandIcon.style.color = ' #1696D2';
        break;
      default:
        brandIcon.className = 'fas fa-desktop me-2';
    }
    
    brandIcon.style.fontSize = '1.25rem';
    
    // Add title
    const tabTitle = document.createElement('span');
    tabTitle.textContent = tab.title;
    
    // Assemble button content
    tabButtonContent.appendChild(brandIcon);
    tabButtonContent.appendChild(tabTitle);
    
    // Assemble button
    tabButton.appendChild(tabButtonContent);
    tabItem.appendChild(tabButton);
    tabNav.appendChild(tabItem);
    
    // Create tab content pane
    const tabPane = document.createElement('div');
    tabPane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
    tabPane.id = tab.id;
    tabPane.role = 'tabpanel';
    tabPane.setAttribute('aria-labelledby', `${tab.id}-tab`);
    
    // Add focus management for keyboard navigation
    tabPane.setAttribute('tabindex', '0');
    
    // Create list group for features
    const listGroup = document.createElement('ul');
    listGroup.className = 'list-group';
    
    // Add feature items
    tab.items.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item border-start-0 border-end-0';
      
      // Create feature item with icon
      const itemContent = document.createElement('div');
      itemContent.className = 'd-flex align-items-start';
      
      // Add feature icon
      const itemIcon = document.createElement('i');
      itemIcon.className = 'bi bi-stars me-2 mt-1';
      itemIcon.style.color = '#1696D2'; // cyan-60
      
      // Add feature text
      const itemText = document.createElement('span');
      itemText.innerHTML = `<strong>${item.split(':')[0]}:</strong> ${item.split(':')[1] || ''}`;
      
      // Assemble item
      itemContent.appendChild(itemIcon);
      itemContent.appendChild(itemText);
      listItem.appendChild(itemContent);
      listGroup.appendChild(listItem);
    });
    
    // Assemble tab pane
    tabPane.appendChild(listGroup);
    tabContent.appendChild(tabPane);
  });
  
  // Assemble tabbed interface
  tabbedInterfaceModule.appendChild(titleContainer);
  tabbedInterfaceModule.appendChild(descriptionText);
  tabbedInterfaceModule.appendChild(tabNav);
  tabbedInterfaceModule.appendChild(tabContent);
  
  return tabbedInterfaceModule;
}

/**
 * Initializes the tabbed interface module with the given element ID
 * @param {string} elementId - The ID of the element to replace
 * @param {string} title - The section title
 * @param {string} description - The description text
 * @param {Array} tabs - Array of tab objects with title, logo, and items
 */
function initTabbedInterface(elementId, title, description, tabs) {
  const targetElement = document.getElementById(elementId);
  if (targetElement) {
    const tabbedInterfaceModule = createTabbedInterface(title, description, tabs);
    targetElement.parentNode.replaceChild(tabbedInterfaceModule, targetElement);
  } else {
    console.error(`Element with ID "${elementId}" not found.`);
  }
}

/**
 * Auto-initializes the tabbed interface module
 */
function autoInitializeTabbedInterface() {
  // Extract data from structured_content.md
  const moduleData = {
    title: "Exemple comune în instrumente populare",
    description: "Exemple de funcții bazate pe IA în instrumente populare de productivitate.",
    tabs: [
      {
        id: "microsoft365",
        title: "Microsoft 365",
        logo: "https://img.icons8.com/color/48/000000/microsoft-office-2019.png",
        items: [
          "Editorul inteligent: Analizează textul și sugerează îmbunătățiri de stil, ton și claritate.",
          "Designer PowerPoint: Propune automat layout-uri profesionale adaptate conținutului tău.",
          "Funcții de analiză Excel: Identifică tipare în date și completează automat serii complexe."
        ]
      },
      {
        id: "google-workspace",
        title: "Google Workspace",
        logo: "https://img.icons8.com/color/48/000000/google-workspace.png",
        items: [
          "Smart Compose în Gmail: Completează propoziții întregi în timp ce redactezi emailuri.",
          "Transcrierea Meet: Convertește automat discuțiile din întâlniri în text.",
          "Smart Reply: Generează răspunsuri scurte personalizate pentru emailurile primite."
        ]
      },
      {
        id: "slack-teams",
        title: "Slack/Teams",
        logo: "https://img.icons8.com/color/48/000000/slack-new.png",
        items: [
          "Filtrare inteligentă a notificărilor: Evidențiază mesajele importante și reduce zgomotul.",
          "Răspunsuri sugerate: Propune formulări adecvate contextului conversației.",
          "Căutare semantică: Găsește informații relevante chiar dacă nu folosești termenii exacți."
        ]
      }
    ]
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initTabbedInterface(
      "tabbed-interface-container",
      moduleData.title,
      moduleData.description,
      moduleData.tabs
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
autoInitializeTabbedInterface();

// Export the functions for use elsewhere if needed
export { createTabbedInterface, initTabbedInterface };
