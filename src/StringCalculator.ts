export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    if (numbers.includes(",")) {
      const parts: string[] = numbers.split(",");
      return parseInt(parts[0]) + parseInt(parts[1]);
    }

    return parseInt(numbers);
  }
}