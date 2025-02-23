import { describe, it, expect } from 'vitest';
import { inverseLerp } from '@/inverse-lerp';

describe('inverse-lerp', () => {
  it('should return 0.5 for values within the range [10, 20] with value 15', () => {
    expect(inverseLerp(10, 20, 15)).toBe(0.5);
  });

  it('should return 0.75 for values within the range [0, 100] with value 75', () => {
    expect(inverseLerp(0, 100, 75)).toBe(0.75);
  });

  it('should return 0.5 for values within the range [-10, 10] with value 0', () => {
    expect(inverseLerp(-10, 10, 0)).toBe(0.5);
  });

  it('should return 0 for values within the range [10, 20] with value 10', () => {
    expect(inverseLerp(10, 20, 10)).toBe(0);
  });

  it('should return 1 for values within the range [10, 20] with value 20', () => {
    expect(inverseLerp(10, 20, 20)).toBe(1);
  });

  it('should return -0.5 for values within the range [10, 20] with value 5', () => {
    expect(inverseLerp(10, 20, 5)).toBe(-0.5);
  });

  it('should return 1.5 for values within the range [10, 20] with value 25', () => {
    expect(inverseLerp(10, 20, 25)).toBe(1.5);
  });
});
