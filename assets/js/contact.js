const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  if (!contactForm.reportValidity()) {
    formStatus.textContent = "Please check the required fields and try again.";
    return;
  }

  formStatus.textContent =
    "Your details are valid, but nothing was sent because this form is not connected to a booking service yet. Please email hello@adventureescapesa.co.za to make your inquiry.";
});

contactForm.addEventListener("input", () => {
  formStatus.textContent = "";
});

contactForm.addEventListener("change", () => {
  formStatus.textContent = "";
});
