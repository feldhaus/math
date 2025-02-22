/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to be clamped.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 * @returns The clamped value.
 *
 * @example
 * ```typescript
 * clamp(5, 1, 10); // Output: 5
 * clamp(-1, 0, 10); // Output: 0
 * clamp(15, 0, 10); // Output: 10
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
