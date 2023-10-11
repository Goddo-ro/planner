export const checkIfUserBelongsTo = (users, userId) => {
  if (!users || !userId) return false;
  return users.some(user => user.id === userId);
}
