/**
 * Repeats a number within a specified range, ensuring the result is always positive.
 * This function effectively calculates the modulo operation with support for negative numbers.
 *
 * @param value - The number to be repeated within the range.
 * @param length - The range length within which the number should be repeated.
 * @returns The repeated number within the range [0, length).
 *
 * @example
 * ```typescript
 * repeat(7, 5); // Output: 2
 * repeat(-3, 5); // Output: 2
 * repeat(12, 5); // Output: 2
 * repeat(400, 360); // Output: 40
 * ```
 */
export function repeat(value: number, length: number): number {
  return ((value % length) + length) % length;
}
