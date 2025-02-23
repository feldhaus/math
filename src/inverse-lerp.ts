/**
 * Calculates the relative position of a value within the range [start, end].
 *
 * @param start - The start value of the range.
 * @param end - The end value of the range.
 * @param value - The value to be interpolated.
 * @returns The relative position of the value within the range [start, end].
 *
 * @example
 * ```typescript
 * inverseLerp(10, 20, 15); // Output: 0.5
 * inverseLerp(0, 100, 75); // Output: 0.75
 * inverseLerp(-10, 10, 0); // Output: 0.5
 * ```
 */
export function inverseLerp(start: number, end: number, value: number): number {
  return (value - start) / (end - start);
}
