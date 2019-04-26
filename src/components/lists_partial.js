"use strict";

// imports


// plugin_partial
export function lists(...args){
    var list = {
        ul: []
    };
    for(var i=0;i<args.length;i++){
        list.ul.push({ li: args[i] });
    }
    return list;
}




// // lists_partial_view html object
// export var lists_partial_view_html = {
//     div:[
//         lists_partials(
//             'jane',
//             'james',
//             'john'
//         )
//     ]
// };
//
// // lists_partial_view component
// export var lists_partial_view = function(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(lists_partial_view_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#lists_partial_view':[
//
//             ],
//             '.lists_partial_view': {
//                 margin: 0,
//                 padding: 0
//             }
//         },
//         html:{
//             'div#lists_partial_view.lists_partial_view': [
//                 nested_html_components
//             ]
//
//         }
//         
//     };
// };
//
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
// 				_include: lists_partial_view()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(lists_partial_view_layout()).compileFile(html_file);
// 	api.morph("component").add(lists_partial_view_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(lists_partial_view()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(lists_partial_view_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(lists_partial_view_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
