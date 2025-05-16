/**
 * Creates the "How does it work?" section
 * Light background with black heading and bullet points
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const howContainer = document.getElementById('how-container');

  // Section content
  const sectionTitle = "Cum funcționează?";
  
  // How it works details for bullet points
  const howPoints = [
    "Format accesibil: Primești zilnic un modul prin email.",
    "Timp minim: Fiecare modul se parcurge în ~15-20 minute.",
    "Aplicare imediată: Exerciții practice pentru utilizare în situații reale."
  ];

  // Create section HTML structure
  const howSectionHTML = `
    <div style="background-color: #F5F5F5; padding: 2rem 0; margin: 4rem 0;">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-5">
            <h2 class="display-4 fw-bold mb-4" style="color: var(--black);">${sectionTitle}</h2>
          </div>
          <div class="col-md-7">
            <!-- List of how it works points -->
            <div class="mt-4">
              ${howPoints.map(text => {
                const [title, description] = text.split(':');
                return `
                  <div class="d-flex align-items-start mb-4">
                    <i class="bi bi-check-circle-fill me-3" style="color: var(--black); font-size: 1.5rem;"></i>
                    <div>
                      <span class="fw-bold" style="color: var(--black); font-size: 1.25rem;">
                        ${title.replace('**', '').replace('**', '')}:
                      </span>
                      <span style="color: var(--black); font-size: 1.25rem;">${description}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the section into the container
  if (howContainer) {
    howContainer.innerHTML = howSectionHTML;
  } else {
    console.error("How container not found");
  }
});
