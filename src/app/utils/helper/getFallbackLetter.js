export const getFallbackLetter = (email) => {
  return email?.charAt(0)?.toUpperCase() || '?';
};
