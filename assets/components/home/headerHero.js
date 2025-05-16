/**
 * Creates a Hero Jumbotron for the Course Page
 * Based on design specifications from course-page-design.md
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const headerHeroContainer = document.getElementById('header-hero-container');

  // Create course title and description content from course-page.md
  const courseTitleText = "Conștientizarea Inteligenței Artificiale:";
  const courseSubtitleText = "Cum îți influențează inteligența artificială viața de zi cu zi";
  
  // Split the description into three logical parts
  const courseDescriptionPart1 = "Curs practic de conștientizare interacțiunii cu IA în 5 zile, prin email.";
  const courseDescriptionPart2 = "";
  const courseDescriptionPart3 = "";

  // Create header hero HTML structure with updated styling
  const headerHeroHTML = `
    <div class="jumbotron jumbotron-fluid py-5 mb-5" style="background: linear-gradient(135deg, var(--cyan-60) 0%, var(--cyan-40) 100%);">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-10 mx-auto text-center">
            <h1 class="display-3 fw-bold mb-3">
              <span style="color:  #FDBF11;">${courseTitleText}</span>
              <span class="text-white">${courseSubtitleText}</span>
            </h1>
            
            <div style="max-width: 800px; margin: 0 auto; line-height: 1.7;">
              <p class="lead text-white mb-1" style="font-size: 1.5rem;">
                ${courseDescriptionPart1}
              </p>
              <p class="lead text-white fw-bold mb-1" style="font-size: 1.5rem;">
                ${courseDescriptionPart2}
              </p>
              <p class="lead text-white fw-bold mb-3" style="font-size: 1.3rem;">
                ${courseDescriptionPart3}
              </p>
            </div>
            
            <button class="btn btn-lg px-5 py-3" style="background-color: white; color: black; font-weight: 600;" onclick="scrollToSignUp()" aria-label="Înscrie-te la curs gratuit">
              <i class="fas fa-envelope me-2" aria-hidden="true"></i>Înscrie-te gratuit
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the header hero into the container
  if (headerHeroContainer) {
    headerHeroContainer.innerHTML = headerHeroHTML;
  } else {
    console.error("Header hero container not found");
  }
});