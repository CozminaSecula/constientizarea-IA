/**
 * Creates the "What you will learn?" section
 * Light background with black heading
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const audienceContainer = document.getElementById('what-container');

  // Section content 
  const sectionTitle = "Ce vei învăța?";
  const sectionContent = ` 
  Acest curs practic te ghidează prin 5 module interactive pentru a înțelege cum inteligența artificială funcționează în jurul tău, cum te influențează și cum o poți folosi în avantajul tău.
  `;

  // Audience details for numbered columns
  const audienceGroups = [
    "",
    "",
    ""
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
            <p class="lead fw-normal mb-4" style="color: var(--black); font-size: 1.25rem; line-height: 1.7;">${sectionContent}</p>
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
