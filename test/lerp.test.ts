import { describe, it, expect } from 'vitest';
import { lerp } from 'src/index';

describe('lerp', () => {
  it('should return the start value when threshold is 0', () => {
    expect(lerp(0, 10, 0)).toBe(0);
    expect(lerp(5, 15, 0)).toBe(5);
  });

  it('should return the end value when threshold is 1', () => {
    expect(lerp(0, 10, 1)).toBe(10);
    expect(lerp(5, 15, 1)).toBe(15);
  });

  it('should return the correct interpolated value for a given threshold', () => {
    expect(lerp(0, 10, 0.5)).toBe(5);
    expect(lerp(5, 15, 0.5)).toBe(10);
    expect(lerp(10, 20, 0.25)).toBe(12.5);
  });

  it('should handle negative values correctly', () => {
    expect(lerp(-10, 10, 0.5)).toBe(0);
    expect(lerp(-20, -10, 0.5)).toBe(-15);
  });

  it('should handle threshold values outside the range [0, 1]', () => {
    expect(lerp(0, 10, -0.5)).toBe(-5);
    expect(lerp(0, 10, 1.5)).toBe(15);
  });
});
