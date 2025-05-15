/**
 * Creates the "What Will You Learn in 5 Days?" section
 * Styled with underlined day indicators instead of rounded pills
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const dailyContentContainer = document.getElementById('daily-content-container');

  // Section content from course-page.md
  const sectionTitle = "Ce vei învăța în 5 zile";
  const dailyContent = [
    {
      day: "Ziua 1:",
      title: "Cum interacționezi cu IA în timpul unei zile de lucru",
      description: ""
    },
    {
      day: "Ziua 2:",
      title: "Cum personalizează IA fluxurile, rezultatele căutării și recomandările",
      description: ""
    },
    {
      day: "Ziua 3:",
      title: "Gestionarea eficientă a datelor tale",
      description: ""
    },
    {
      day: "Ziua 4:",
      title: "Folosirea IA în luarea deciziilor",
      description: ""
    },
    {
      day: "Ziua 5:",
      title: "Utilizarea IA la locul de muncă",
      description: ""
    }
  ];

  // Create list items HTML with consistent styling and better spacing
  const listItemsHTML = dailyContent.map((day, index) => `
    <div class="d-flex align-items-start mb-4">
      <div class="me-4" style="min-width: 80px;">
        <span class="fw-bold" style="font-size: 1.25rem !important; display: inline-block;">
          ${day.day}
        </span>
      </div>
      <div class="flex-grow-1">
        <h3 class="mb-0 fw-normal" style="font-size: 1.25rem !important; color: black; line-height: 1.4;">
          ${day.title}
        </h3>
      </div>
    </div>
  `).join('');

  // Create section HTML structure with proper spacing from previous section
  const dailyContentSectionHTML = `
    <div style="background-color: #F5F5F5; padding: 2.5rem 0; margin-top: 3rem;">
      <div class="container">
        <h2 class="display-4 fw-bold mb-5" style="color: var(--black); font-size: 2.5rem !important;">
          ${sectionTitle}
        </h2>
        <div class="mt-4">
          ${listItemsHTML}
        </div>
      </div>
    </div>
  `;

  // Insert the section into the container
  if (dailyContentContainer) {
    dailyContentContainer.innerHTML = dailyContentSectionHTML;
  } else {
    console.error("Daily content container not found");
  }
});
