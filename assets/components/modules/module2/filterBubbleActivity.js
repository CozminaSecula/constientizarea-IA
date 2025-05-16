import { initActivityCard } from './activityCardSimple.js';

/**
 * Initializes the Filter Bubble activities card
 */
function initFilterBubbleActivity() {
  // Data extracted from structured_content.md
  const moduleData = {
    title: "Activitate practică: 2 minute",
    activities: [
      {
        id: "search-comparison",
        title: "Opțiunea 1: Compară rezultatele căutării",
        description: "Urmează acești pași simpli:",
        steps: [
          "Alege un subiect relevant pentru munca ta (exemplu: 'strategii de management').",
          "Caută-l în browserul tău obișnuit și notează primele 3 rezultate.",
          "Deschide o fereastră incognito/privată și caută exact aceeași frază.",
          "Compară cele două liste de rezultate - observi diferențe?."
        ],
        bonus: null
      },
      {
        id: "recommendation-check",
        title: "Opțiunea 2: Analizează recomandările primite",
        description: "Urmează acești pași simpli:",
        steps: [
          "Deschide o platformă pe care o folosești des (LinkedIn, YouTube, Facebook etc.).",
          "Identifică primele 5 recomandări de conținut.",
          "Notează pe o scală de la 1 la 5 cât de diverse sunt aceste recomandări.",
          "Reflectează: Reprezintă acestea o gamă variată de perspective sau sunt foarte similare?"
        ],
        bonus: null
      }
    ]
  };
  
  // Initialize the component without notes
  const initialize = () => {
    initActivityCard(
      "activity-card-container",
      moduleData.title,
      moduleData.activities,
      false // Don't show notes
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
initFilterBubbleActivity();
