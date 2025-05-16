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
      title: "Identificarea funcțiilor bazate pe IA",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Recunoaște când o aplicație folosește IA vs. programare tradițională.</li>
          <li>Descoperă funcțiile IA ascunse în aplicațiile tale zilnice.</li>
          <li>Exerciții practice: Identifică și testează funcții IA în propriile aplicații.</li>
        </ol>
      `
    },
    {
      day: "Ziua 2",
      title: " Personalizarea & Bula de Filtrare",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Înțelege cum algoritmii IA îți personalizează conținutul online.</li>
          <li>Recunoaște când te afli într-o "bulă de filtrare" care limitează perspectiva.</li>
          <li>Strategii practice pentru a obține informații mai diverse și echilibrate.</li>
        </ol>
      `
    },
    {
      day: "Ziua 3",
      title: "Gestionarea datelor personale",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Înțelege ce date colectează aplicațiile bazate pe IA.</li>
          <li>Configurarea setărilor de confidențialitate pentru protecție optimă.</li>
          <li>Exerciții practice: Auditează și ajustează permisiunile aplicațiilor tale.</li>
        </ol>
      `
    },
    {
      day: "Ziua 4",
      title: "Luarea deciziilor folosind IA",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Cum influențează recomandările IA alegerile tale zilnice.</li>
          <li>Când să te bazezi pe sugestiile IA și când să le chestionezi.</li>
          <li>Exerciții pentru dezvoltarea gândirii critice în raport cu recomandările algoritmice.</li>
        </ol>
      `
    },
    {
      day: "Ziua 5",
      title: "Automatizarea și productivitatea",
      content: `
        <ol style="font-size: 1.1rem !important; line-height: 1.6 !important;">
          <li>Identifică sarcinile potrivite pentru automatizare cu IA.</li>
          <li>Tehnici pentru a-ți crește productivitatea folosind IA.</li>
          <li>Exerciții practice: Creează un flux de lucru optimizat cu asistență IA.</li>
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
