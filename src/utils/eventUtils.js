export const checkIfUserBelongsTo = (users, userId) => {
  return users.some(user => user.id === userId);
}
