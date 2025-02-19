# @feldhaus/math

A lightweight math utility library that provides commonly used mathematical functions for JavaScript and TypeScript applications.

## Functions

### `clamp(value: number, min: number, max: number): number`

Clamps a number between a minimum and maximum value.

**Parameters:**

- `value`: The number to be clamped.
- `min`: The minimum value to clamp to.
- `max`: The maximum value to clamp to.

**Returns:**

- The clamped value.

**Example:**

```typescript
import { clamp } from '@feldhaus/math';

const clampedValue = clamp(10, 1, 5); // Returns 5
```

---

### `lerp(start: number, end: number, threshold: number): number`

Linearly interpolates between two numbers based on a given threshold.

**Parameters:**

- `start`: The starting value.
- `end`: The ending value.
- `threshold`: A value between 0 and 1 that determines the interpolation factor.

**Returns:**

- The interpolated value.

**Example:**

```typescript
import { lerp } from '@feldhaus/math';

const interpolatedValue = lerp(0, 100, 0.5); // Returns 50
```

## Installation

You can install the package via npm:

```bash
npm install @feldhaus/math
```

## Future Plans

This library is a work in progress, and more mathematical functions will be added in the future. Stay tuned for updates!

## License

[MIT](LICENSE)
