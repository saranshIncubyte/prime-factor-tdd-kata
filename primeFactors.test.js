const getPrimeFactors = require("./primeFactors");

describe("Calculates prime factors", () => {
  test("Returns empty array in case of 1", () => {
    expect(getPrimeFactors(1)).toEqual([]);
  });
  expect(getPrimeFactors(2)).toEqual([2]);
  expect(getPrimeFactors(3)).toEqual([3]);
  expect(getPrimeFactors(4)).toEqual([2, 2]);
  expect(getPrimeFactors(5)).toEqual([5]);
  expect(getPrimeFactors(6)).toEqual([2, 3]);
  expect(getPrimeFactors(7)).toEqual([7]);
  expect(getPrimeFactors(8)).toEqual([2, 2, 2]);
  expect(getPrimeFactors(9)).toEqual([3, 3]);
  expect(getPrimeFactors(10)).toEqual([2, 5]);
  expect(getPrimeFactors(11)).toEqual([11]);
  expect(getPrimeFactors(12)).toEqual([2, 2, 3]);
  expect(getPrimeFactors(13)).toEqual([13]);
  expect(getPrimeFactors(14)).toEqual([2, 7]);
  expect(getPrimeFactors(50)).toEqual([2, 5, 5]);
  expect(getPrimeFactors(100)).toEqual([2, 2, 5, 5]);
  expect(getPrimeFactors(280)).toEqual([2, 2, 2, 5, 7]);
  expect(getPrimeFactors(20123648)).toEqual([
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 17, 17, 17,
  ]);
});
