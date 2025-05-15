import { initActivityCard } from './activityCardSimple.js';

/**
 * Initializes the Filter Bubble activities card
 */
function initFilterBubbleActivity() {
  // Data extracted from structured_content.md
  const moduleData = {
    title: "Încearcă: Activitate de 2 minute",
    activities: [
      {
        id: "search-comparison",
        title: "Opțiunea 1: Compară rezultatele căutării",
        description: "Caută un subiect legat de muncă în browserul tău obișnuit, apoi într-o fereastră privată/incognito (aceasta împiedică istoricul tău de navigare să influențeze rezultatele). Notează orice diferențe în rezultate.",
        steps: [
          "Alege un subiect relevant pentru munca ta",
          "Caută în browserul tău normal",
          "Deschide o fereastră incognito/privată și caută exact aceeași frază",
          "Compară primele 3 rezultate din fiecare fereastră"
        ],
        bonus: null
      },
      {
        id: "recommendation-check",
        title: "Opțiunea 2: Verifică recomandările primite",
        description: "Uită-te la recomandările de conținut dintr-un instrument pe care îl folosești. Sunt variate sau similare?",
        steps: [
          "Deschide o platformă pe care o folosești regulat și care afișează recomandări",
          "Uită-te la primele 5-10 elemente recomandate",
          "Notează cât de similare sau diferite sunt unele de altele",
          "Gândește-te: Cât de bine reprezintă acestea gama completă de opțiuni?"
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
