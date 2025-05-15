/**
 * Creates the "How Is This Course Different?" section
 * Feature list with icons as specified in course-page-design.md
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const courseFeaturesContainer = document.getElementById('course-features-container');

  // Section content from course-page.md
  const sectionTitle = "Cum este acest curs diferit?";
  const features = [
    {
      icon: "fas fa-clock",
      title: "Scurt și concentrat",
      description: "Fiecare zi are un subiect specific. Cursul este livrat prin email, astfel încât să poți învăța în ritmul tău."
    },
    {
      icon: "fas fa-tools",
      title: "Practic și relevant",
      description: "Se concentrază pe aplicații practice ale inteligenței artificiale în viața de zi cu zi, care deja este integrată în instrumentele tale de lucru."
    },
    {
      icon: "fas fa-user-friends",
      title: "Non-tehnic",
      description: "Nu este necesară o experiență tehnică prealabilă. Cursul este destinat oricui dorește să învețe despre IA și nu necesită cunoștințe tehnice."
    },
    {
      icon: "fas fa-bolt",
      title: "Aplicabil imediat",
      description: "Fiecare zi include activități simple pe care le poți încerca imediat, astfel încât să poți aplica ceea ce ai învățat în viața ta de zi cu zi."
    }
  ];

  // Create features HTML
  const featuresHTML = features.map(feature => `
    <div class="col-md-6 mb-4">
      <div class="feature-item d-flex align-items-start">
        <div class="feature-icon me-3 mt-1 text-primary">
          <i class="${feature.icon}" style="font-size: 1.4rem;"></i>
        </div>
        <div class="feature-content">
          <h3 class="display-8 mb-2 fw-bold" style="font-size: 1.25rem;">${feature.title}</h3>
          <p class="text-secondary mb-0" style="font-size: 1.15rem;">${feature.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Create section HTML structure
  const courseFeaturesSectionHTML = `
    <div class="container my-5 py-4 bg-light">
      <h2 class="display-4 fw-bold mb-5">${sectionTitle}</h2>
      <div class="row">
        ${featuresHTML}
      </div>
    </div>
  `;

  // Insert the section into the container
  if (courseFeaturesContainer) {
    courseFeaturesContainer.innerHTML = courseFeaturesSectionHTML;
  } else {
    console.error("Course features container not found");
  }
});
