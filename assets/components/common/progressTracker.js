/**
 * Creates a progress tracking system that updates as the user scrolls
 * through the module content
 * @returns {HTMLElement} - The progress tracking element
 */
function createProgressTracker() {
  // Create progress bar container
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress fixed-top';
  progressContainer.style.height = '6px';
  progressContainer.style.borderRadius = '0';
  progressContainer.style.zIndex = '1030';
  
  // Create progress bar fill
  const progressFill = document.createElement('div');
  progressFill.className = 'progress-bar progress-fill'; // Added progress-fill class for easier selection
  progressFill.style.width = '0%';
  progressFill.style.backgroundColor = '#1696D2'; // cyan-60
  progressFill.style.transition = 'width 0.3s ease-out';
  progressFill.setAttribute('role', 'progressbar');
  progressFill.setAttribute('aria-valuenow', '0');
  progressFill.setAttribute('aria-valuemin', '0');
  progressFill.setAttribute('aria-valuemax', '100');
  
  // Assemble progress tracker
  progressContainer.appendChild(progressFill);
  
  return progressContainer;
}

/**
 * Calculates the current scroll progress
 * @returns {number} - The scroll progress as a percentage (0-100)
 */
function calculateScrollProgress() {
  // Get the scrollable height (total height - viewport height)
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  
  // Calculate the scroll percentage
  return scrollableHeight > 0 ? (scrollPosition / scrollableHeight) * 100 : 0;
}

/**
 * Updates the progress across all related progress indicators on the page
 * @param {number} scrollProgress - The current scroll progress (0-100)
 */
function updateAllProgressIndicators(scrollProgress) {
  // Update the main progress tracker (this component)
  // Fixed selector - was looking for '.progress-bar.progress-fill' but that element didn't exist
  const progressBar = document.querySelector('.progress.fixed-top .progress-bar');
  if (progressBar) {
    progressBar.style.width = `${scrollProgress}%`;
    progressBar.setAttribute('aria-valuenow', scrollProgress.toFixed(0));
  } else {
    console.warn('Main progress bar not found in the DOM');
  }
  
  // Update the header module progress if it exists
  const headerProgress = document.querySelector('#header-container .progress-bar');
  if (headerProgress) {
    // Header shows module completion progress (based on scroll position)
    headerProgress.style.width = `${scrollProgress}%`;
    headerProgress.setAttribute('aria-valuenow', scrollProgress.toFixed(0));
    
    // Add screen reader announcement for significant progress milestones
    if (scrollProgress === 25 || scrollProgress === 50 || scrollProgress === 75 || scrollProgress >= 95) {
      announceProgress(scrollProgress);
    }
  }
  
  // Save progress to localStorage
  saveProgress(scrollProgress);
}

/**
 * Announces progress to screen readers
 * @param {number} progress - The current progress percentage
 */
function announceProgress(progress) {
  // Create or get the live region for screen reader announcements
  let announcer = document.getElementById('progress-announcer');
  
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'progress-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
  }
  
  // Announce the progress milestone
  if (progress >= 95) {
    announcer.textContent = 'Ai ajuns la sfârșitul lecției. Felicitări!';
  } else {
    announcer.textContent = `Ai parcurs ${Math.round(progress)}% din lecție`;
  }
}

/**
 * Updates the progress bar based on current scroll position
 */
function updateProgressBar() {
  const progress = calculateScrollProgress();
  
  // For debugging
  console.log(`Scroll progress: ${progress.toFixed(1)}%`);
  
  updateAllProgressIndicators(progress);
  
  // If we're at the end of the page, mark module as completed
  if (progress > 90) {
    markModuleAsCompleted();
  }
}

/**
 * Saves the current progress to localStorage
 * @param {number} progress - The progress percentage
 */
function saveProgress(progress) {
  try {
    // Get the current page identifier (can be customized based on your needs)
    const pageIdentifier = window.location.pathname;
    
    // Get existing progress data
    let progressData = JSON.parse(localStorage.getItem('moduleProgress')) || {};
    
    // Update progress for current page
    progressData[pageIdentifier] = progress;
    
    // Save back to localStorage
    localStorage.setItem('moduleProgress', JSON.stringify(progressData));
    
    // If progress is near completion (> 90%), mark module as completed
    if (progress > 90) {
      markModuleAsCompleted();
    }
    
    // Sync with navigation footer
    syncNavigationProgress(progress);
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
  }
}

/**
 * Synchronizes navigation footer progress with current module progress
 * @param {number} moduleProgress - The current module progress
 */
function syncNavigationProgress(moduleProgress) {
  // Find navigation footer progress bar
  const navFooterProgress = document.querySelector('.fixed-bottom .progress-bar');
  if (navFooterProgress) {
    // Get the total progress percentage from the navigation data
    const totalModules = parseInt(navFooterProgress.getAttribute('data-total-modules') || '7');
    const currentModule = parseInt(navFooterProgress.getAttribute('data-current-module') || '1');
    
    // Calculate the base progress from previous modules
    const baseProgress = ((currentModule - 1) / totalModules) * 100;
    
    // Calculate additional progress from current module (weighted by current module's portion)
    const additionalProgress = (moduleProgress / 100) * (1 / totalModules) * 100;
    
    // Set the total course progress
    const totalProgress = baseProgress + additionalProgress;
    navFooterProgress.style.width = `${totalProgress}%`;
    navFooterProgress.setAttribute('aria-valuenow', totalProgress.toFixed(0));
  }
}

/**
 * Marks the current module as completed
 */
function markModuleAsCompleted() {
  try {
    // Get the current module identifier
    const moduleIdentifier = 'module1'; // This could be dynamic based on page
    
    // Get existing completion data
    let completionData = JSON.parse(localStorage.getItem('completedModules')) || {};
    
    // Mark as completed with timestamp
    completionData[moduleIdentifier] = {
      completed: true,
      timestamp: new Date().toISOString()
    };
    
    // Save back to localStorage
    localStorage.setItem('completedModules', JSON.stringify(completionData));
    
    // Optionally, update navigation or show completion indicator
    updateCompletionIndicators();
  } catch (error) {
    console.error('Error marking module as completed:', error);
  }
}

/**
 * Updates any completion indicators on the page
 */
function updateCompletionIndicators() {
  // This could update completion badges, enable next module buttons, etc.
  // For now, we'll just find any completion indicators and update them
  const completionIndicators = document.querySelectorAll('.completion-indicator');
  completionIndicators.forEach(indicator => {
    indicator.classList.add('completed');
    if (indicator.querySelector('.completion-text')) {
      indicator.querySelector('.completion-text').textContent = 'Completat';
    }
  });
}

/**
 * Loads saved progress from localStorage
 */
function loadSavedProgress() {
  try {
    // Get the current page identifier
    const pageIdentifier = window.location.pathname;
    
    // Get existing progress data
    let progressData = JSON.parse(localStorage.getItem('moduleProgress')) || {};
    
    // Get progress for current page
    const savedProgress = progressData[pageIdentifier];
    
    // If we have saved progress, update the progress bar
    if (savedProgress !== undefined) {
      const progressBar = document.querySelector('.progress-bar');
      if (progressBar) {
        progressBar.style.width = `${savedProgress}%`;
        progressBar.setAttribute('aria-valuenow', savedProgress.toFixed(0));
      }
      
      // Optionally scroll to position
      // Commented out to avoid unexpected scrolling when the user returns
      // window.scrollTo(0, (savedProgress / 100) * (document.documentElement.scrollHeight - window.innerHeight));
    }
  } catch (error) {
    console.error('Error loading progress from localStorage:', error);
  }
}

/**
 * Initializes the progress tracking system
 */
function initProgressTracker() {
  // Create and add the progress tracker to the document
  const progressTracker = createProgressTracker();
  document.body.prepend(progressTracker);
  
  // Add scroll event listener to update progress
  window.addEventListener('scroll', updateProgressBar, { passive: true });
  
  // Add resize event listener to recalculate progress on window resize
  window.addEventListener('resize', updateProgressBar, { passive: true });
  
  // Load any saved progress
  loadSavedProgress();
  
  // Initial progress calculation
  updateProgressBar();
}

/**
 * Auto-initializes the progress tracking system
 */
function autoInitializeProgressTracker() {
  // Initialize when the DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initProgressTracker);
  } else {
    // DOM is already ready, initialize immediately
    initProgressTracker();
  }
}

// Automatically run the initialization when the script is loaded
autoInitializeProgressTracker();

// Export functions for use elsewhere if needed
export { initProgressTracker, updateProgressBar };
