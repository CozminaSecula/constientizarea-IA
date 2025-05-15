/**
 * Creates the "Who is this course for?" section
 * Dark background with yellow heading matching the provided image
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const audienceContainer = document.getElementById('audience-container');

  // Section content 
  const sectionTitle = "Pentru cine este acest curs";
  const sectionContent = `
  Pe măsură ce inteligența artificială devine tot mai prezentă în viața noastră, 
  este important să înțelegem cum funcționează, chiar și la un nivel de bază. 
  Acest curs este pentru oricine dorește să învețe cum să folosească IA în mod practic, indiferent de nivelul tehnic.
  `;

  // Audience details for numbered columns
  const audienceGroups = [
    "Pentru profesioniștii care utilizează instrumente digitale, dar nu sunt specialiști în IA.",
    "Pentru profesioniștii care doresc să înțeleagă modul în care IA le afectează munca.",
    "Pentru oricine este interesat să își dezvolte o alfabetizare de bază în IA fără o aprofundare tehnică."
  ];

  // Create section HTML structure 
  const audienceSectionHTML = `
    <div style="background-color: #F5F5F5; padding: 2rem 0;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <h2 class="display-4 fw-bold mb-4" style="color: var(--black);">${sectionTitle}</h2>
          </div>
          <div class="col-md-7">
            <p class="lead fw-light mb-4" style="color: var(--black); font-size: 1.25rem; line-height: 1.7;">${sectionContent}</p>

            <!-- List of target audiences -->
            <div class="mt-4">
              ${audienceGroups.map((text, index) => `
                <div class="d-flex align-items-start mb-3">
                  <div class="me-3" style="color: var(--black);">
                    <span class="fw-bold" style="font-size: 1.2rem;">${index + 1}.</span>
                  </div>
                  <p class="mb-0" style="color: var(--black); font-size: 1.25rem;">${text}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the section into the container
  if (audienceContainer) {
    audienceContainer.innerHTML = audienceSectionHTML;
  } else {
    console.error("Audience container not found");
  }
});
