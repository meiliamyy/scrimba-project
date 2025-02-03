//tampilkan pesan sukses/gagal

export const showMessage = (message, isSucces = true) => {
  const messageDiv = document.createElement("div");
  messageDiv.textContent = message;
  messageDiv.style.color = isSucces ? "green" : "red";
  document.body.appendChild(messageDiv);

  //hapus pesan setelah 3 detik
  setTimeout(() => {
    messageDiv.remove();
  }, 3000);
};
