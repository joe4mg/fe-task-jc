import { findFactors } from "./findFactors";

describe("findFactors", () => {
  describe("when no number and no range are supplied", () => {
    it("should return an empty array", () => {
      const result = findFactors();
      expect(result.length).toBe(0);
    });
  });
  describe("when number and range supplied", () => {
    it.each`
      number | range  | result
      ${1}   | ${3}   | ${[1, 2, 3]}
      ${50}  | ${149} | ${[50, 100]}
      ${50}  | ${151} | ${[50, 100, 150]}
      ${9}   | ${40}  | ${[9, 18, 27, 36]}
    `(
      "should return factors for $number up to $range",
      ({ number, range, result }) => {
        expect(findFactors(number, range)).toEqual(result);
      }
    );
  });
});
