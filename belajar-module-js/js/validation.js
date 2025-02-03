//validasi email

export const validateEmail = (email) => {
  return email.includes("@") && email.includes(".");
};

//validasi password (min 6 karakter)

export const validatePassword = (password) => {
  return password.length >= 6;
};
