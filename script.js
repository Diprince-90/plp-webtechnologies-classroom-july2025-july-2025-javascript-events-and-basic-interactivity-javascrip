// FORM VALIDATION
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  // Simple custom validation
  if (name === "" || email === "") {
    message.textContent = "All fields are required.";
    message.style.color = "red";
  } else if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});

// INTERACTIVE FEATURE 1: Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function() {
  const passwordField = document.getElementById("passwordField");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
});

// INTERACTIVE FEATURE 2: Click Counter
let count = 0;
document.getElementById("counterBtn").addEventListener("click", function() {
  count++;
  document.getElementById("clickCount").textContent = count;
});