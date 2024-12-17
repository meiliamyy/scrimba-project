const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/",
  ];
  
  let passwordLength = 12;
  
  // Generate a single random character
  function getRandomCharacter() {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  // Generate a random password
  function generateRandomPassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += getRandomCharacter();
    }
    return password;
  }
  
  // Update input fields with generated passwords
  function generatePasswords() {
    const password1 = document.getElementById("password-1");
    const password2 = document.getElementById("password-2");
  
    password1.value = generateRandomPassword();
    password2.value = generateRandomPassword();
  }
  
  // Add event listener to the button
  document.getElementById("generate-btn").addEventListener("click", generatePasswords);


 function copyToClipboard(inputElement) {
    // inputElement.select();
    navigator.clipboard.writeText(inputElement.value);
    alert("Password copied to clipboard!");
  }
  
  document.getElementById("password-1").addEventListener("click", (e) => copyToClipboard(e.target));
  document.getElementById("password-2").addEventListener("click", (e) => copyToClipboard(e.target));


  