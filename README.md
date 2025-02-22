# @feldhaus/math

A lightweight math utility library that provides commonly used mathematical functions for JavaScript and TypeScript applications.

## Installation

You can install the package via npm:

```bash
npm install @feldhaus/math
```

## Example

```typescript
import { clamp } from '@feldhaus/math';

const clampedValue = clamp(5, 1, 10); // Output: 5
```

```typescript
import { DEG2RAD } from '@feldhaus/math';

const radian = DEG2RAD * 45; // Output: 0.7853981633974483
```

```typescript
import { lerp } from '@feldhaus/math';

const relativeValue = inverseLerp(10, 20, 15); // Output: 0.5
```

```typescript
import { lerp } from '@feldhaus/math';

const interpolatedValue = lerp(0, 10, 0.5); // Output: 5
```

## License

[MIT](LICENSE)
