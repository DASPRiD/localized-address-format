import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: [
            {name: 'localizedAddressFormat', file: pkg.browser, format: 'umd', sourcemap: true},
            {file: pkg.main, format: 'cjs', sourcemap: true},
            {file: pkg.module, format: 'es', sourcemap: true},
        ],
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
        ],
    },
];
