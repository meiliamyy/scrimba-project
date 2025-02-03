import { validateEmail, validatePassword } from "./validation.js";
import { showMessage } from "./ui.js";

const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi input
  if (!validateEmail(email)) {
    showMessage("Email tidak valid!", false);
    return;
  }

  if (!validatePassword(password)) {
    showMessage("Password harus 6 karakter atau lebih!", false);
    return;
  }

  // Jika validasi sukses
  showMessage("Registrasi berhasil! 🎉");
  form.reset();
});
