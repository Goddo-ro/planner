export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

export const isValidPassword = (password) => {
  return /^[A-Za-z0-9.,:;?!*+%\-<>@[\]{}/\\_$#]{8,32}$/.test(password);
}
