export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
}

export const isValidPassword = (password) => {
  return /^[A-Za-z0-9.,:;?!*+%\-<>@[\]{}/\\_$#]{8,32}$/.test(password);
}

export const getValidUsers = (input, users, chosenUsers) => {
  return users.filter(user => (user?.username?.toLowerCase().includes(input?.toLowerCase()) ||
    input?.toLowerCase().includes(user?.username?.toLowerCase()))
    && !chosenUsers?.find(chosenUser => chosenUser.id === user.id));
}
