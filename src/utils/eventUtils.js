export const checkIfDateIsExpired = (date) => {
  return new Date(date) < new Date();
}

export const checkIfUserBelongsTo = (users, userId) => {
  return users.some(user => user.id === userId);
}
