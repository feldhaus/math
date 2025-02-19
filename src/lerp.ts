/**
 * Linearly interpolates between two numbers based on a given threshold.
 *
 * @param start - The starting value.
 * @param end - The ending value.
 * @param threshold - A value between 0 and 1 that determines the interpolation factor.
 * @returns The interpolated value.
 */
export function lerp(start: number, end: number, threshold: number): number {
    return start + (end - start) * threshold;
  }
  