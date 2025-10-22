import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    const birthYear = 1984;

    // dynamically calculate expected age
    const expectedAge = new Date().getFullYear() - birthYear;

    const ageOfPerson = currentAgeForBirthYear(birthYear);
    expect(ageOfPerson).toBe(expectedAge);
  });
});
