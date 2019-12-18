import clear from 'rollup-plugin-clear';
import cleanup from 'rollup-plugin-cleanup';
// import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import generatePackageJson from 'rollup-plugin-generate-package-json';
import json from 'rollup-plugin-json';
// import replace from 'rollup-plugin-replace';
// import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'
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
                //	replace({
                //		delimiters: ['', ''],
                //		'#!/usr/bin/env node': ''
                //	}),
                // replace({
                //	   exclude: 'node_modules/**',
                //	   delimiters: ['./', '/'],
                //	   values: {
                //		   assets: './' + pkgson.name + '/assets/',
                //		   db: './' + pkgson.name + '/db/',
                //		   log: './' + pkgson.name + '/log/'
                //	   }
                // }),
                // replace({
                //	   exclude: 'node_modules/**',
                //	   delimiters: ['@', '@'],
                //	   values: {
                //		   package_name: pkgson.name,
                //		   package_version: pkgson.version
                //	   }
                // }),
                    json({
                        include: 'node_modules/**',
                    }),
                    resolve(),
                    commonJS({
                        include: 'node_modules/**'
                    }),
                    cleanup(),
                    terser(),
                //	obfuscator({
                //		fileOptions:{},
                //		globalOptions: false,
                //		include: ['**/*.js'],
                //		exclude: ['node_modules/**']
                //	}),
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
                //	copy({
                //		targets: [
                //			{
                //				src: [], 
                //				dest: ''
                //			},
                //		]
                //	}),
                //	serve({
                //		open: 'true',
                //		contentBase: 'src',
                //		host: 'localhost',
                //		port: '5000',
                //		verbose: false
                //	}),
                //	livereload('src')
            ]
        },
];
