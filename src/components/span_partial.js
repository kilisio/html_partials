"use strict";

// imports



// span partial plugin
export function span(...args){
    var obj = args[0];
    var id = args[1] || '""';
    var this_class = args[2] || '""';
    return '<span id=' + id + ' class=' + this_class + '>' + obj + '</span>';
}



// // span_partial html object
// export var span_partial_html = {
//     _include:[
//         span('testing', null, null)
//     ]
// };
//
// //// span_partial css object
// //export var span_partial_css = {
// //	
// //};
//
// // span_partial component
// export function span_partial(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(span_partial_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#span_partial':[
//
//             ],
//             '.span_partial': {
//                 margin: 0,
//                 padding: 0
//             }
//         },
//         html:{
//             'div#span_partial.span_partial': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// }
//
//
// export var span_partial_nested_layout = function(){
// 	return span_partial();
// };
//
//
// // span_partial html page layout
// var component_name = 'span_partial';
// //var page_title = '';
//
//
// export var span_partial_page_layout = function(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
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
// 				_include: span_partial_nested_layout()
// 			}
// 		}
// 	};
// };
//
// // span_partial component test code
// var absurd = require("absurd");
//
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(span_partial_page_layout()).compileFile(html_file);
// 	api.morph("component").add(span_partial_page_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(span_partial()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(span_partial_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(span_partial_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
