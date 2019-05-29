"use strict";

// imports



// plugin_partial
export function links(...args){
    var href = args[0];
    var alt_text = args[1];
    var id = args[2];
    var this_class = args[3];
    return{
        a: {
            _attrs:{
                href: href,
                id: id,
                class: this_class
            },
            _:[
                alt_text
            ]
        }
    };
}



// // links_partial_view html object
// export var links_partial_view_html = {
//     div: links('file:///home/kilisio/google_drive/documentation/src/assets/online_portfolio/site_map.svg','site map image','active', 'testing')
// };
//
// // links_partial_view component
// export var links_partial_view = function(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(links_partial_view_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#links_partial_view':[
//
//             ],
//             '.links_partial_view': {
//                 margin: 0,
//                 padding: 0
//             },
//             'a#active':{
//                 color: 'green'
//             }
//         },
//         html:{
//             'div#links_partial_view.links_partial_view': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// };
//
// // links_partial_view html page layout
// var absurd = require("absurd");
// var component_name = 'links_partial';
//
// //component imports
//
// export var links_partial_view_layout = function(){
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
// 				_include: links_partial_view()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(links_partial_view_layout()).compileFile(html_file);
// 	api.morph("component").add(links_partial_view_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(links_partial_view()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(links_partial_view_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(links_partial_view_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
