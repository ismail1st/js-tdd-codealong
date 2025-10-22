// utils.js

// Named export matches your import
export function currentAgeForBirthYear(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}
