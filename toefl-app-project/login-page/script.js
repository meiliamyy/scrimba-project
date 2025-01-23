function showLogin(type) {
  // Toggle active forms
  document.querySelectorAll(".login-form").forEach((form) => form.classList.remove("active"));
  document.querySelector(`#${type}-login`).classList.add("active");

  // Toggle active tabs
  document.querySelectorAll(".login-tabs button").forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`#${type}-tab`).classList.add("active");
}
