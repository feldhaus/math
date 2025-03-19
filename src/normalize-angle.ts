import { TWO_PI } from './const';
import { repeat } from './repeat';

/**
 * Normalizes an angle to the range [0, 2π].
 *
 * This function ensures that the given angle is wrapped within the range of 0 (inclusive)
 * to 2π (exclusive). It handles both positive and negative angles by using modular arithmetic.
 *
 * @param angle - The angle in radians to be normalized.
 * @returns The normalized angle in the range [0, 2π].
 *
 * @example
 * ```typescript
 * import { normalizeAngle } from './normalize-angle';
 * import { TWO_PI } from './const';
 *
 * normalizeAngle(3 * Math.PI); // Output: π (approximately 3.14159)
 * normalizeAngle(-Math.PI); // Output: π (approximately 3.14159)
 * normalizeAngle(0)); // Output: 0
 * normalizeAngle(TWO_PI); // Output: 0
 * ```
 */
export function normalizeAngle(angle: number): number {
  return repeat(angle, TWO_PI);
}
