import { describe, test, expect } from "vitest";
import { StringCalculator } from "../StringCalculator";

describe("StringCalculator", () => {
  test("should return 0 for empty string", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    const calculator = new StringCalculator();
    expect(calculator.add("1")).toBe(1);
  });

   test("should return sum of two numbers", () => {
     const calculator = new StringCalculator();
     expect(calculator.add("1,5")).toBe(6);
   });
});
