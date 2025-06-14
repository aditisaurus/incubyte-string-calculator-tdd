export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    // Replace new lines with commas to normalize
    const normalizedNumbers: string = numbers.split("\n").join(",");

    const parts: string[] = normalizedNumbers.split(",");

    return parts.reduce((sum: number, num: string) => sum + parseInt(num), 0);
  }
}