import clear from 'rollup-plugin-clear';
import cleanup from 'rollup-plugin-cleanup';
// import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
// import { terser } from "rollup-plugin-terser";
import generatePackageJson from 'rollup-plugin-generate-package-json';
import json from 'rollup-plugin-json';
// import replace from 'rollup-plugin-replace';
// import obfuscator from 'rollup-plugin-obfuscator';
import * as pkgson from "../../package.json";


export default [
    	{
            input: 'src/lib.js',
            output: {
                file: 'dist/lib/lib.js',
                format: 'cjs'
            },
            plugins: [
                clear({
                    targets: ['dist/lib'],
                }),
                json({
                    include: 'node_modules/**',
                }),
                resolve(),
                commonJS({
                    include: 'node_modules/**'
                }),
                cleanup(),
                generatePackageJson({
                    outputFolder: '',
                    baseContents: {
                        "name": "@kilisio/" + pkgson.name + "",
                        "version": pkgson.version,
                        "author": "kilisio",
                        "dependencies": {},
                        "main": "lib",
                        // "publishConfig": {
                        //		"registry":"registry.npmjs.org"
                        // },
                        // "scripts": {
                        // 	"start": ""
                        // }
                    }
                }),
            ]
        },
];
