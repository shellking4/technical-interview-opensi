// An Armstrong number is a number that is the sum of its own digits each raised to the power of the number of digits.
// Write some code to determine whether a number is an Armstrong number.

// Example:

// 9 is an Armstrong number, because 9 = 9^1 = 9
// 10 is not an Armstrong number, because 10 != 1^2 + 0^2 = 1
// 153 is an Armstrong number, because: 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 154 is not an Armstrong number, because: 154 != 1^3 + 5^3 + 4^3 = 1 + 125 + 64 = 190

export function isArmstrongNumber(value: number): boolean {
  let num = value;
  let numberString = String(num);
  const numberDigits = numberString.length;
  let sum = 0;
  for (let i = 0; i < numberDigits; i++) {
    let digit = numberString[i];
    sum += Math.pow(Number(digit), numberDigits)
  }
  return sum === num;
}
