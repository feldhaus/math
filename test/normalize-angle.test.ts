import { describe, it, expect } from 'vitest';
import { normalizeAngle, TWO_PI } from 'src/index';

describe('normalizeAngle', () => {
  it('should normalize angles within the range [0, 2π)', () => {
    expect(normalizeAngle(0)).toBe(0);
    expect(normalizeAngle(TWO_PI)).toBe(0);
    expect(normalizeAngle(Math.PI)).toBeCloseTo(Math.PI);
    expect(normalizeAngle(3 * Math.PI)).toBeCloseTo(Math.PI);
  });

  it('should normalize negative angles to the range [0, 2π)', () => {
    expect(normalizeAngle(-Math.PI)).toBeCloseTo(Math.PI);
    expect(normalizeAngle(-TWO_PI)).toBe(0);
    expect(normalizeAngle(-3 * Math.PI)).toBeCloseTo(Math.PI);
  });

  it('should handle large positive angles', () => {
    expect(normalizeAngle(10 * TWO_PI)).toBe(0);
    expect(normalizeAngle(10 * TWO_PI + Math.PI)).toBeCloseTo(Math.PI);
  });

  it('should handle large negative angles', () => {
    expect(normalizeAngle(-10 * TWO_PI)).toBe(0);
    expect(normalizeAngle(-10 * TWO_PI - Math.PI)).toBeCloseTo(Math.PI);
  });
});
