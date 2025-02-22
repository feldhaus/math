/**
 * Linearly interpolates between two numbers based on a given factor.
 *
 * @param start - The starting value.
 * @param end - The ending value.
 * @param factor - A value between 0 and 1 that determines the interpolation factor.
 * @returns The interpolated value.
 *
 * @example
 * ```typescript
 * lerp(0, 10, 0.5); // Output: 5
 * lerp(5, 15, 0.25); // Output: 7.5
 * ```
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}
