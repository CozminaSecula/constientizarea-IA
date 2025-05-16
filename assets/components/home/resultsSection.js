/**
 * Creates the "Expected Results" section
 * Light background with black heading and bullet points
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const resultsContainer = document.getElementById('results-container');

  // Section content
  const sectionTitle = "Rezultate așteptate";
  const sectionIntro = "După cele 5 module vei putea:";
  
  // Results list
  const resultPoints = [
    "Identifica funcțiile IA în aplicațiile pe care le folosești.",
    "Înțelege cum algoritmii influențează informațiile pe care le primești.",
    "Proteja mai eficient datele tale personale.",
    "Lua decizii mai informate despre tehnologiile pe care le adopți.",
    "Folosi IA pentru a-ți crește productivitatea."
  ];

  // Create section HTML structure
  const resultsSectionHTML = `
    <div style="background-color: #F5F5F5; padding: 2rem 0; margin: 4rem 0;">
      <div class="container">
        <div class="row align-items-start">
          <div class="col-md-5">
            <h2 class="display-4 fw-bold mb-4" style="color: var(--black);">${sectionTitle}</h2>
            <p class="lead mb-4" style="color: var(--black); font-size: 1.25rem;">${sectionIntro}</p>
          </div>
          <div class="col-md-7">
            <!-- List of results -->
            <div class="mt-4">
              ${resultPoints.map(text => `
                <div class="d-flex align-items-start mb-3">
                  <i class="bi bi-check-lg me-3" style="color: var(--black); font-size: 1.5rem;"></i>
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
  if (resultsContainer) {
    resultsContainer.innerHTML = resultsSectionHTML;
  } else {
    console.error("Results container not found");
  }
});
