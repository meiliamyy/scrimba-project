/*
Challenge:
1. Log out the phrase "Modal Opened!" 
   after a 1.5 second delay.
*/

const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalText = document.getElementById("modal-text");
const consentForm = document.getElementById("consent-form");
const declineBtn = document.getElementById("decline-btn");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  console.log("hovered");
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");

  const consentFormData = new FormData(consentForm);
  // console.log(consentFormData);

  const fullName = consentFormData.get("full name");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">Uploading your data to the dark web...</p>
    </div>`;
  setTimeout(function () {
    // const uploadText = document.getElementById("upload-text");
    // uploadText.innerHTML = `Making the sale...`;
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
          <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2> 
          <p>We just sold the rights to your eternal soul.</p>
          <div class="idiot-gif">
            <img src="/16.cookie-consent/images/bugatti.jpg" />
          </div>
          `;
    modalCloseBtn.disabled = false;
  }, 3000);
});

// const uploadText = document.getElementById("upload-text");
