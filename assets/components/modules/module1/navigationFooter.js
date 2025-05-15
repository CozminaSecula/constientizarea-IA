/**
 * Creates a Fixed Footer Navigation component
 * @param {Object} navigation - Navigation options including current module info and navigation links
 * @returns {HTMLElement} - The navigation footer element
 */
function createNavigationFooter(navigation) {
  // Create main container
  const navigationFooter = document.createElement('div');
  navigationFooter.className = 'fixed-bottom bg-light py-2 border-top shadow-sm';
  
  // Create inner container for content
  const container = document.createElement('div');
  container.className = 'container-fluid';
  
  // Create row for layout
  const row = document.createElement('div');
  row.className = 'd-flex justify-content-between align-items-center';
  
  // Create back button
  const backButton = document.createElement('button');
  backButton.type = 'button';
  backButton.className = 'btn btn-primary';
  backButton.style.backgroundColor = ' #1696D2';
  backButton.style.borderColor = ' #062635';

  // Create back button content with icon
  const backContent = document.createElement('div');
  backContent.className = 'd-flex align-items-center';
  
  // Add back icon
  const backIcon = document.createElement('i');
  backIcon.className = 'bi bi-arrow-left me-2';
  
  // Add back text
  const backText = document.createElement('span');
  backText.textContent = navigation.backText || 'Înapoi';
  
  // Disable back button if at first module
  if (navigation.isFirstModule) {
    backButton.disabled = true;
    backButton.setAttribute('aria-disabled', 'true');
  } else {
    backButton.addEventListener('click', () => {
      if (navigation.backUrl) {
        window.location.href = navigation.backUrl;
      } else {
        window.history.back();
      }
    });
  }
  
  // Assemble back button
  backContent.appendChild(backIcon);
  backContent.appendChild(backText);
  backButton.appendChild(backContent);
  
  // Create progress indicator
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress w-50 mx-auto d-none d-md-flex';
  progressContainer.style.height = '10px';
  
  // Create progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.style.width = `${navigation.progress}%`;
  progressBar.style.backgroundColor = '#1696D2'; // cyan-60
  progressBar.setAttribute('role', 'progressbar');
  progressBar.setAttribute('aria-valuenow', navigation.progress);
  progressBar.setAttribute('aria-valuemin', '0');
  progressBar.setAttribute('aria-valuemax', '100');
  
    // Store module data for progress sync
  progressBar.setAttribute('data-current-module', navigation.currentModule);
  progressBar.setAttribute('data-total-modules', navigation.totalModules);
  
  // Add descriptive label for screenreaders
  const progressLabel = document.createElement('span');
  progressLabel.className = 'visually-hidden';
  progressLabel.textContent = `Progres curs: ${navigation.progress}% completat. Ești la modulul ${navigation.currentModule} din ${navigation.totalModules}`;
  progressBar.appendChild(progressLabel);
  
  // Create progress text
  const progressText = document.createElement('div');
  progressText.className = 'd-flex d-md-none justify-content-center mb-2';
  progressText.innerHTML = `<strong>${navigation.currentModule}</strong> din ${navigation.totalModules} module`;
  
  // Assemble progress indicator
  progressContainer.appendChild(progressBar);
  
  // Create next button
  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'btn btn-primary';
  nextButton.style.backgroundColor = ' #1696D2';
  nextButton.style.borderColor = ' #062635';

  // Create next button content with icon
  const nextContent = document.createElement('div');
  nextContent.className = 'd-flex align-items-center';
  
  // Add next text
  const nextText = document.createElement('span');
  nextText.textContent = navigation.nextText || 'Înainte';
  
  // Add next icon
  const nextIcon = document.createElement('i');
  nextIcon.className = 'bi bi-arrow-right ms-2';
  
  // Disable next button if at last module
  if (navigation.isLastModule) {
    nextButton.disabled = true;
    nextButton.setAttribute('aria-disabled', 'true');
  } else {
    nextButton.addEventListener('click', () => {
      if (navigation.nextUrl) {
        window.location.href = navigation.nextUrl;
      }
    });
  }
  

  // Assemble next button
  nextContent.appendChild(nextText);
  nextContent.appendChild(nextIcon);
  nextButton.appendChild(nextContent);
  
  // Assemble row
  row.appendChild(backButton);
  row.appendChild(progressContainer);
  row.appendChild(nextButton);
  
  // Add mobile progress text before the row on small screens
  container.appendChild(progressText);
  container.appendChild(row);
  
  // Assemble navigation footer
  navigationFooter.appendChild(container);
  
  return navigationFooter;
}

/**
 * Initializes the navigation footer
 * @param {Object} navigation - Navigation options
 */
function initNavigationFooter(navigation) {
  // Create the navigation footer
  const footer = createNavigationFooter(navigation);
  
  // Add it to the document
  document.body.appendChild(footer);
  
  // Add some padding to the bottom of the page to prevent content from being hidden behind the footer
  const paddingBottom = footer.offsetHeight + 20;
  document.body.style.paddingBottom = `${paddingBottom}px`;
}

/**
 * Auto-initializes the navigation footer
 */
function autoInitializeNavigationFooter() {
  // Navigation data
  const navigationData = {
    currentModule: "1",
    totalModules: "5",
    progress: 20, // 1/5 ~= 20%
    backText: "Introducere",
    backUrl: "../index.html",
    nextText: "Ziua 2",
    isFirstModule: false,
    isLastModule: false,
    nextUrl: "../modules/module2.html"
  };
  
  // Initialize the component when the DOM is ready
  const initialize = () => {
    initNavigationFooter(navigationData);
  };
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    // DOM is already ready, initialize immediately
    setTimeout(initialize, 100);
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeNavigationFooter();

// Export the functions for use elsewhere if needed
export { createNavigationFooter, initNavigationFooter };
