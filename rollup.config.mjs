import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs.min.js',
        format: 'cjs',
        sourcemap: true,
        plugins: [terser()],
      },
      {
        file: 'dist/index.esm.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.min.js',
        format: 'esm',
        sourcemap: true,
        plugins: [terser()],
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'FMath',
        sourcemap: true,
      },
      {
        file: 'dist/index.umd.min.js',
        format: 'umd',
        name: 'FMath',
        sourcemap: true,
        plugins: [terser()],
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        rootDir: 'src',
        declaration: false,
        declarationMap: false,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [dts()],
  },
];
