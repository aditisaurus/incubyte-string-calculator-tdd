export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    const parts: string[] = numbers.split(",");

    return parts.reduce((sum: number, num: string) => sum + parseInt(num), 0);
  }
}