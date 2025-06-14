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

   test("should handle three numbers", () => {
     const calculator = new StringCalculator();
     expect(calculator.add("1,2,3")).toBe(6);
   });

   test("should handle new line as delimiter", () => {
     const calculator = new StringCalculator();
     expect(calculator.add("1\n2,3")).toBe(6);
   });

    test("should support custom delimiter", () => {
      const calculator = new StringCalculator();
      expect(calculator.add("//;\n1;2")).toBe(3);
    });
});
