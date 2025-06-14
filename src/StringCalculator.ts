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

    // Replace new lines with current delimiter to normalize
    const normalizedNumbers: string = numbersToProcess.split("\n").join(",");
    const parts: string[] = normalizedNumbers.split(delimiter);
    return parts.reduce((sum: number, num: string) => sum + parseInt(num), 0);
  }
}


