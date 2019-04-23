import clear from 'rollup-plugin-clear';
import cleanup from 'rollup-plugin-cleanup';
import copy from 'rollup-plugin-copy';

export default {
    input: 'src/lib.js',
    output: {
        file: 'lib/lib.js',
        format: 'esm'
    },
    plugins: [
        clear({
            targets: ['lib'],
        }),
        cleanup(),
        copy({
            targets: [
                'src/assets',
                'src/db',
                'src/log'
            ]
        })
    ]
};
