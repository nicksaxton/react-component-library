import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import styles from 'rollup-plugin-styles';
import typescript from '@rollup/plugin-typescript';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        assetFileNames: '[name]-[hash][extname]',
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        assetFileNames: '[name]-[hash][extname]',
        file: packageJson.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      styles()
    ]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];
