"use strict";

// IMPORTS
//import * as css_plugins from "css_plugins_lib";
//import * as html_partials from "html_partials_lib";



// // SCRIPTS
// var eqcss = {
// 	script:{
// 		_attrs:{
// 			src: './assets/scripts/eqcss/EQCSS.min.js'
// 		}
// 	}
// };



// FUNCTIONS
    };
    for(var i=0;i<args.length;i++){
        list.ul.push({ li: args[i] });
    }
    return list;
}

// // CSS VARIABLES
//
//
//
// // HTML VARIABLES
// var inline_script = {
//     'script[type="text/javascript"]':{
//         _include:[
//
//         ]
//     }	
// };
//
// var inline_style = {
//     style:{
//         _include:[
//             //css_plugins.scale('.list_func', 'landscape', 1366, 768),
//             //css_plugins.scale('.list_func', 'portrait', 1366, 768)
//         ]
//     }
// };
//
// var test = {
//     id: "testings"
// };
//
// // HTML OBJECT
// export var list_func_html = {
//     _include:[
//         inline_style,
//         inline_script,
//         list(test, 'jane','austin','james','cameron')
//     ]
// };
//
//
//
//// CSS OBJECT
//export var list_func_base_css = {
//};
//export var list_func_component_css = {
    //'@media (min-width: 769px) and (orientation: landscape)':{
    //	margin: 0,
    //	padding: 0
    //},
    //'@media (min-width: 769px) and (orientation: portrait)':{
    //	margin: 0,
    //	padding: 0
    //},
    //'@media (max-width: 768px) and (orientation: landscape)':{
    //	margin: 0,
    //	padding: 0
    //},
    //'@media (max-width: 768px) and (orientation: portrait)':{
    //	margin: 0,
    //	padding: 0
    //}
//};
//
// // COMPONENT
// export function list_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(list_func_html);
//     }else{
//         nested_html_components._include.push(list_func_html);
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '%base%': [
//             ],
//             '%component%.list_func': [
//             ],
//             '%%.list_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':[
//                 ],
//                 '@media (min-width: 769px) and (orientation: portrait)':[
//                 ],
//                 '@media (max-width: 768px) and (orientation: landscape)':[
//                 ],
//                 '@media (max-width: 768px) and (orientation: portrait)':[
//                 ]
//             },
//             '.list_func': {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0
//                 }
//             },
//             span: {
//                 '@media (min-width: 769px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0,
//                     width: '100%',
//                     display: 'inline-block'
//                 },
//                 '@media (min-width: 769px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (max-width: 768px) and (orientation: landscape)':{
//                     margin: 0,
//                     padding: 0
//                 },
//                 '@media (max-width: 768px) and (orientation: portrait)':{
//                     margin: 0,
//                     padding: 0
//                 }
//             }
//         },
//         html:{
//             'div#list_func.list_func': [
//                 nested_html_components
//             ]
//
//         }
//         
//     };
// }
//     
//
// // HTML PAGE LAYOUT
//
// export var list_func_nested_layout = function(){
// 	return list_func();
// };
//
// var component_name = 'list_func';
// //var page_title = '';
//
//
// export function list_func_page_layout(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
// 			_attrs:{
// 				style: "width:100%;height:100%;"
// 			},
// 			head: {
// 				_include: [
// 					'<link rel="stylesheet" type="text/css" href="' + component_name + '.css"/>'
// 				],
// 				title: component_name 
// 			},
// 			body: {
// 				_attrs:{
// 					style: "margin:0;padding:0;"
// 				},
// 				_include: [ 
// 					list_func_nested_layout(),
// 					eqcss
// 				]
// 			}
// 		}
// 	};
// }
//
//
// // ABSURD JS CONSOLE AND FILE TEST CODE
// var absurd = require("absurd-0.3.158");
//
//
// absurd(function(api) {
// 	// // print to file
// 	// var css_file = "./" + component_name + ".css";
// 	// var html_file = "./" + component_name + ".html";
// 	// api.morph("html").add(list_func_page_layout()).compileFile(html_file);
// 	// api.morph("component").add(list_func_page_layout()).compileFile(css_file);
//
// 	// print to console
// 	// // component
// 	// api.morph("component").add(list_func()).compile(function(err, css, html) {
// 	//		console.log(css);
// 	//		console.log(html);
// 	// });
// 	// component layout
// 	api.morph("component").add(list_func_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(list_func_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });



// // EXPRESS MIDDLEWARES
// var list_func_page_css, list_func_page_html;
//
// absurd().morph("component").add(list_func_page_layout()).compile(function(err, css) {
// 	   list_func_page_css = css;
// });
//
// absurd().morph("html").add(list_func_page_layout()).compile(function(err, html) {
// 	   list_func_page_html = html;
// });
//
// export function list_func_css_mid(req, res){
// 	res.send(list_func_page_css);
// } 
//
// export function list_func_html_mid(req, res){
// 	res.send(list_func_page_html);
// } 
//
//
//
// // EXPRESS TEST SERVER
//
// // server imports
// var express = require('express');
// var helmet = require('helmet');
// var path = require('path');
//
//
// // global express server variables
// var app = express();
//
// var setContentType = function(type) {
// 	   return function(req, res, next) {
// 		   res.setHeader('Content-Type', 'text/' + type);
// 		   next();
// 	   };
// };
//
// // execute helmet before responding to requests
// app.use(helmet());
//
// //set default path to web app resources
// app.use('/assets',  express.static(path.join( __dirname, 'assets' )));
// app.use('/db',  express.static(path.join( __dirname, 'db' )));
// app.use('/log',	express.static(path.join( __dirname, 'log' )));
//
// // web application routes
// app.get('/', setContentType("html"), list_func_html_mid);
//
// // list_func component specific routes
// app.get('/list_func.css', setContentType("css"), list_func_css_mid);
// app.get('/list_func.html', setContentType("html"), list_func_html_mid);
//
//
// // start server
// var port = process.env.PORT || 8080;
// app.listen(port);
// console.log('listening on port ' + port);
//
//
// // open in browser
// const open_browser = require('open');
//
// (async () => {
// 	await open_browser('http://127.0.0.1:8080', {app: ['firefox', '-new-tab']});
// })();
