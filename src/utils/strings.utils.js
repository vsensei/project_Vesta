export const getFirstLetterCapitalizedString = name => {
  return name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : name;
};
