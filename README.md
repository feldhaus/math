# @feldhaus/math

A lightweight math utility library that provides commonly used mathematical functions for JavaScript and TypeScript applications.

## Installation

You can install the package via npm:

```bash
npm install @feldhaus/math
```

## Available Functions

- **clamp**: Clamps a number between a minimum and maximum value. [Source](https://github.com/feldhaus/vector/blob/main/src/clamp.ts)
- **inverseLerp**: Calculates the relative position of a value within a range. [Source](https://github.com/feldhaus/vector/blob/main/src/inverseLerp.ts)
- **lerp**: Linearly interpolates between two values. [Source](https://github.com/feldhaus/vector/blob/main/src/lerp.ts)
- **repeat**: Repeats a number within a range by wrapping it around. [Source](https://github.com/feldhaus/vector/blob/main/src/repeat.ts)

## Available Constants

- **RAD2DEG**: Conversion factor from radians to degrees `180 / Math.PI`.
- **DEG2RAD**: Conversion factor from degrees to radians `Math.PI / 180`.
- **HALF_PI**: Half of Pi (π/2) `Math.PI / 2`.
- **QUARTER_PI**: Quarter of Pi (π/4) `Math.PI / 4`.
- **TWO_PI**: Two times Pi (2π) `Math.PI * 2`.
- **TAU**: Tau, which is equivalent to 2π `Math.PI * 2`.

## Examples

```typescript
import { clamp } from '@feldhaus/math';

const clampedValue = clamp(5, 1, 10); // Output: 5
```

```typescript
import { DEG2RAD } from '@feldhaus/math';

const radians = DEG2RAD * 45; // Output: 0.7853981633974483
```

```typescript
import { inverseLerp } from '@feldhaus/math';

const relativeValue = inverseLerp(10, 20, 15); // Output: 0.5
```

```typescript
import { lerp } from '@feldhaus/math';

const interpolatedValue = lerp(0, 10, 0.5); // Output: 5
```

```typescript
import { repeat } from '@feldhaus/repeat';

repeat(12, 5); // Output: 2
repeat(400, 360); // Output: 40
```

## Usage in Browser

You can also include the library directly in your HTML file using a UMD build:

```html
<script src="https://unpkg.com/@feldhaus/math/dist/index.umd.js"></script>
```

This will expose the library as `FMath` on the global window object, allowing you to use the functions like this:

```html
<script>
  const clampedValue = FMath.clamp(1, 5, 10);
  console.log(clampedValue); // Output: 5
</script>
```

## License

[MIT](LICENSE)
