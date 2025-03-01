import { describe, it, expect } from 'vitest';
import { clamp } from 'src/index';

describe('clamp', () => {
  it('should return the value when it is within the range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it('should return the minimum value when the value is less than the minimum', () => {
    expect(clamp(0, 1, 10)).toBe(1);
  });

  it('should return the maximum value when the value is greater than the maximum', () => {
    expect(clamp(15, 1, 10)).toBe(10);
  });

  it('should return the minimum value when the value is equal to the minimum', () => {
    expect(clamp(1, 1, 10)).toBe(1);
  });

  it('should return the maximum value when the value is equal to the maximum', () => {
    expect(clamp(10, 1, 10)).toBe(10);
  });
});
