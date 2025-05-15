/**
 * Creates the Call to Action section for course enrollment
 */
document.addEventListener('DOMContentLoaded', function() {
  // Target container
  const ctaContainer = document.getElementById('cta-container');

  // CTA content
  const ctaTitle = "Alătură-te cursului gratuit";
  const ctaSubtitle = "Primește lecțiile direct în inbox-ul tău";

  // Create CTA HTML structure
  const ctaSectionHTML = `
    <div class="container my-5 py-5">
      <div class="row justify-content-center">
        <div class="col-md-8 text-center">
          <h2 class="display-4 fw-bold mb-3">${ctaTitle}</h2>
          <p class="lead mb-4">${ctaSubtitle}</p>
          
          <div class="card shadow">
            <div class="card-body p-4">
              <form id="enrollmentForm" class="needs-validation" novalidate>
                <div class="row g-3">
                  <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label">Prenume</label>
                    <input type="text" class="form-control" id="firstName" required>
                    <div class="invalid-feedback">
                      Introduceți prenumele.
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label">Nume</label>
                    <input type="text" class="form-control" id="lastName" required>
                    <div class="invalid-feedback">
                      Introduceți numele.
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" required>
                  <div class="invalid-feedback">
                    Introduceți o adresă de email validă.
                  </div>
                </div>
                <div class="form-check mb-3">
                  <input class="form-check-input" type="checkbox" id="agreeTerms" required>
                  <label class="form-check-label" for="agreeTerms">
                    Sunt de acord cu <a href="#" data-bs-toggle="modal" data-bs-target="#termsModal">termenii și condițiile</a>
                  </label>
                  <div class="invalid-feedback">
                    Trebuie să fiți de acord înainte de a vă înscrie.
                  </div>
                </div>
                <button class="btn btn-primary btn-lg w-100" type="submit">
                  <i class="fas fa-paper-plane me-2"></i>Înscrie-mă la curs
                </button>
              </form>
            </div>
          </div>
          
          <p class="mt-4 text-muted small">
            <i class="fas fa-lock me-1"></i> Datele tale sunt în siguranță. Nu facem spam și nu împărtășim informațiile tale.
          </p>
        </div>
      </div>
    </div>
    
    <!-- Terms and Conditions Modal -->
    <div class="modal fade" id="termsModal" tabindex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="termsModalLabel">Termeni și condiții</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h6>1. Utilizarea cursului</h6>
            <p>Prin înscrierea în acest curs gratuit, veți primi 5 emailuri educaționale despre inteligența artificială.</p>
            
            <h6>2. Confidențialitatea datelor</h6>
            <p>Datele dvs. personale vor fi folosite exclusiv pentru trimiterea conținutului cursului și nu vor fi împărtășite cu terți.</p>
            
            <h6>3. Dezabonare</h6>
            <p>Vă puteți dezabona în orice moment utilizând link-ul de dezabonare din fiecare email.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Am înțeles</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insert the CTA section into the container
  if (ctaContainer) {
    ctaContainer.innerHTML = ctaSectionHTML;
    
    // Add form validation
    const form = document.getElementById('enrollmentForm');
    if (form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          // Here you would typically send the form data to your backend
          // For demo purposes, just show a success message
          form.innerHTML = `
            <div class="text-center py-4">
              <i class="fas fa-check-circle text-success" style="font-size: 3rem;"></i>
              <h3 class="mt-3">Înregistrare cu succes!</h3>
              <p class="mb-0">Verifică email-ul pentru a confirma înscrierea la curs.</p>
            </div>
          `;
        }
        form.classList.add('was-validated');
      });
    }
    
    // Fix for the terms modal close button
    const termsCloseBtn = document.querySelector('#termsModal .btn-primary');
    if (termsCloseBtn) {
      termsCloseBtn.addEventListener('click', function() {
        const termsModal = bootstrap.Modal.getInstance(document.getElementById('termsModal'));
        if (termsModal) {
          termsModal.hide();
        }
      });
    }
  } else {
    console.error("CTA container not found");
  }
});
