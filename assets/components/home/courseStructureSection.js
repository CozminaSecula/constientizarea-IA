/**
 * Creates the "Course Structure" section
 * Accordion component as specified in course-page-design.md
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const courseStructureContainer = document.getElementById('course-structure-container');

  // Section content from course-page.md
  const sectionTitle = "Structura cursului";
  
  // Course structure content for each day
  const courseStructure = [
    {
      day: "Ziua 1",
      title: "Inteligența artificială (IA) la locul de muncă",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Află despre caracteristicile IA și cum sunt diferite de cele tradiționale.</li>
          <li>Explorează exemple de instrumente IA utilizate în mediul de lucru.</li>
          <li>Reflectează asupra modului în care IA îți influențează activitățile zilnice.</li>
        </ol>
      `
    },
    {
      day: "Ziua 2",
      title: " Personalizarea & Bule de Filtrare",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Află cum IA personalizează fluxurile de lucru și rezultatele căutării.</li>
          <li>Explorează conceptul de "bule de filtrare" și cum afectează informațiile pe care le primești.</li>
          <li>Reflectează asupra modului în care personalizarea IA îți influențează deciziile.</li>
        </ol>
      `
    },
    {
      day: "Ziua 3",
      title: "Gestionarea datelor tale",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Află despre tipurile de date personale pe care IA le colectează.</li>
          <li>Explorează cum să îți protejezi datele în mediul digital.</li>
          <li>Reflectează asupra modului în care gestionarea datelor îți influențează viața de zi cu zi.</li>
        </ol>
      `
    },
    {
      day: "Ziua 4",
      title: "Luarea deciziilor folosind IA",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Află cum IA poate sprijini procesul decizional.</li>
          <li>Explorează exemple de utilizare a IA în luarea deciziilor.</li>
          <li>Reflectează asupra modului în care IA îți influențează deciziile.</li>
        </ol>
      `
    },
    {
      day: "Ziua 5",
      title: "Utilizarea IA la locul de muncă",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Află despre instrumentele IA disponibile pentru profesioniști.</li>
          <li>Explorează cum să integrezi IA în fluxurile tale de lucru.</li>
          <li>Reflectează asupra modului în care IA îți influențează munca.</li>
        </ol>
      `
    }
  ];

  // Create accordion items HTML
  const accordionItemsHTML = courseStructure.map((day, index) => `
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapse-day-${index + 1}" 
                aria-expanded="${index === 0 ? 'true' : 'false'}" 
                aria-controls="collapse-day-${index + 1}" 
                style="font-size: 1.25rem !important; padding: 1rem 1.25rem !important; font-weight: 500 !important;">
          <strong>${day.day}:</strong> <span class="ms-2">${day.title}</span>
        </button>
      </h2>
      <div id="collapse-day-${index + 1}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#courseStructureAccordion">
        <div class="accordion-body" style="font-size: 1.15rem !important; padding: 1.25rem 1.5rem !important; line-height: 1.6 !important;">
          ${day.content}
        </div>
      </div>
    </div>
  `).join('');

  // Create section HTML structure
  const courseStructureSectionHTML = `
    <div class="container my-5">
      <div class="row">
        <div class="col-md-4">
          <h2 class="display-4 fw-bold mb-5" style="font-size: 2.5rem !important; line-height: 1.2 !important;">${sectionTitle}</h2>
        </div>
        <div class="col-md-8">
          <div class="accordion" id="courseStructureAccordion" style="--bs-accordion-border-width: 1px !important;">
            ${accordionItemsHTML}
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the section into the container
  if (courseStructureContainer) {
    courseStructureContainer.innerHTML = courseStructureSectionHTML;
  } else {
    console.error("Course structure container not found");
  }
});
