"use strict";

// imports

// image partial function
export function image(...args){
    var src = args[0];
    var alt_text = args[1] || '""';
    var id = args[2] || '""';
    var group = args[3] || '""';
    return  '<img src=' + src + ' alt=' + alt_text + ' id=' + id + ' class=' + group + ' />';
}


// // image_partial html object'
// export var image_partial_html = {
//     _include:[
//         image('file:///home/kilisio/google_drive/documentation/src/assets/online_portfolio/site_map.svg', null, null)
//     ]
// };
//
// // image_partial component
// export function image_partial(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(image_partial_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#image_partial':[
//
//             ],
//             '.image_partial': {
//                 margin: 0,
//                 padding: 0
//             }
//         },
//         html:{
//             'div#image_partial.image_partial': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// }
//
// // image_partial html page layout
// var absurd = require("absurd");
// var component_name = 'image_partial';
//
// //component imports
//
// export var image_partial_layout = function(){
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
// 				_include: image_partial()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(image_partial_layout()).compileFile(html_file);
// 	api.morph("component").add(image_partial_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(image_partial()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(image_partial_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(image_partial_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
