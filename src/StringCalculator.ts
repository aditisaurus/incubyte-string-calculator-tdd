export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") return 0;

    const { delimiter, numbersText } = this.extractDelimiter(numbers);
    const normalizedText = numbersText.split("\n").join(delimiter);
    const nums = normalizedText.split(delimiter).map((n) => parseInt(n));

    this.checkForNegatives(nums);

    return nums.reduce((sum, num) => sum + num, 0);
  }

  private extractDelimiter(input: string) {
    if (!input.startsWith("//")) {
      return { delimiter: ",", numbersText: input };
    }

    const newlineIndex = input.indexOf("\n");
    return {
      delimiter: input.slice(2, newlineIndex),
      numbersText: input.slice(newlineIndex + 1),
    };
  }

  private checkForNegatives(numbers: number[]): void {
    const negatives = numbers.filter((n) => n < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }
  }
}