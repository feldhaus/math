/**
 * Clamps a number between a minimum and maximum value.
 *
 * @param value - The number to be clamped.
 * @param min - The minimum value to clamp to.
 * @param max - The maximum value to clamp to.
 * @returns The clamped value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
