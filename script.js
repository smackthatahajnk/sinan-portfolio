// UPDATE FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// MOBILE NAVIGATION TOGGLE
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.gap = "14px";
    nav.style.padding = "16px";
    nav.style.background = "rgba(255,255,255,0.98)";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "20px";
    nav.style.borderRadius = "12px";
    nav.style.boxShadow = "0 8px 30px rgba(16,24,40,0.08)";
  } else {
    nav.style.display = "";
    nav.style.flexDirection = "";
    nav.style.background = "";
    nav.style.position = "";
    nav.style.boxShadow = "";
  }
});

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");
const mailtoBtn = document.getElementById("mailtoBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please fill all fields.";
    formNote.style.color = "red";
    return;
  }

  formNote.textContent = "Message ready! Click 'Open email' to send via Gmail app.";
  formNote.style.color = "#6b7280";
});

// MAILTO (GMAIL AUTO OPEN)
mailtoBtn.addEventListener("click", () => {

  const name = document.getElementById("name").value || "User";
  const email = document.getElementById("email").value || "No email provided";
  const message = document.getElementById("message").value || "";

  const subject = encodeURIComponent(`Portfolio Contact — From ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Your Gmail address
  window.location.href =
    `mailto:mhd.sinan.6198@gmail.com?subject=${subject}&body=${body}`;
});
