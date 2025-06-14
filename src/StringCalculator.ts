export class StringCalculator {
  add(numbers: string): number {
    if (numbers === "") {
      return 0;
    }

    let delimiter: string = ",";
    let numbersToProcess: string = numbers;

    // Check for custom delimiter format: //[delimiter]\n[numbers]
    if (numbers.startsWith("//")) {
      const delimiterLineEnd: number = numbers.indexOf("\n");
      delimiter = numbers.substring(2, delimiterLineEnd);
      numbersToProcess = numbers.substring(delimiterLineEnd + 1);
    }

    // Replace newlines with current delimiter to normalize
    const normalizedNumbers: string = numbersToProcess.replace(
      /\n/g,
      delimiter
    );

    const parts: string[] = normalizedNumbers.split(delimiter);

    // Check for negative numbers
    const numbersArray: number[] = parts.map((num: string) => parseInt(num));
    const negatives: number[] = numbersArray.filter((num: number) => num < 0);

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
    }

    return numbersArray.reduce((sum: number, num: number) => sum + num, 0);
  }
}

