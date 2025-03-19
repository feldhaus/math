import { describe, it, expect } from 'vitest';
import { repeat } from 'src/index';

describe('repeat', () => {
  it('should return the correct repeated value for positive numbers within range', () => {
    expect(repeat(7, 5)).toBe(2);
  });

  it('should return the correct repeated value for negative numbers', () => {
    expect(repeat(-3, 5)).toBe(2);
  });

  it('should return the correct repeated value for numbers greater than the range', () => {
    expect(repeat(12, 5)).toBe(2);
  });

  it('should return the correct repeated value for large numbers', () => {
    expect(repeat(400, 360)).toBe(40);
  });

  it('should return 0 when the value is 0', () => {
    expect(repeat(0, 5)).toBe(0);
  });

  it('should return 0 when the value is a multiple of the range length', () => {
    expect(repeat(10, 5)).toBe(0);
  });

  it('should handle edge cases where the range length is 1', () => {
    expect(repeat(7, 1)).toBe(0);
    expect(repeat(-3, 1)).toBe(0);
  });

  it('should handle edge cases where the range length is negative', () => {
    expect(repeat(7, -5)).toBe(-3);
    expect(repeat(-3, -5)).toBe(-3);
  });
});
