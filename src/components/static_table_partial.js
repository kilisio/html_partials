"use strict";

// imports

// static table function
export function static_table(id, group, ...args){
    if(id === null){
        id = '';
    }

    if(group === null){
        group = '';
    }

    var table = {
        div: {
            _attrs: {
                id: id,
                class: group
            },
            _include: []
        }
    };
    for(var i=0;i<args.length;i++){
        table.div._include.push( args[i] );
    }
    return table;
}


export function static_row(id, group, ...args){
    if(id === null){
        id = '';
    }

    if(group === null){
        group = '';
    }

    var row = {
        div: {
            _attrs: {
                id: id,
                class: group
            },
            _include: []
        }
    };
    for(var i=0;i<args.length;i++){
        row.div._include.push( args[i] );
    }
    return row;
}


export function static_cell(id, group, obj){
    if(id === null){
        id = '';
    }

    if(group === null){
        group = '';
    }

    return {
        div: {
            _attrs: {
                id: id,
                class: group
            },
            _include: [
                obj
            ]
        }
    };
}

// var row_test = static_row(
//     null,
//     'test_row',
//     static_cell(null, null, 'cell one'),
//     static_cell(null, null, 'cell two'),
//     static_cell(null, null, 'cell three'),
//     static_cell(null, null, 'cell four'),
//     static_cell(null, null, 'cell five'),
//     static_cell(null, null, 'cell six'),
//     static_cell(null, null, 'cell seven')
// );
//
//
// var row_test_2 = static_row(
//     null,
//     'test_row',
//     static_cell(null, null, 'cell one'),
//     static_cell(null, null, 'cell two'),
//     static_cell(null, null, 'cell three'),
//     static_cell(null, null, 'cell four'),
//     static_cell(null, null, 'cell five'),
//     static_cell(null, null, 'cell six'),
//     static_cell(null, null, 'cell seven')
// );
//
// // static_table_partial html object
// export var static_table_partial_html = {
//     _include:[
//         static_table(null, 'table_test',
//             row_test,
//             row_test_2
//         )
//     ]
// };
//
// // static_table_partial component
// export function static_table_partial(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(static_table_partial_html);
//     }else{
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//             '#static_table_partial':[
//
//             ],
//             '.static_table_partial': {
//                 margin: 0,
//                 padding: 0
//             }
//         },
//         html:{
//             'div#static_table_partial.static_table_partial': [
//                 nested_html_components
//             ]
//
//         }
//         
//     };
// }
//     
//
// export var static_table_partial_nested_layout = function(){
// 	return static_table_partial();
// };
//
//
// // static_table_partial html page layout
// var absurd = require("absurd");
// var component_name = 'static_table_partial';
//
// //component imports
//
// export var static_table_partial_page_layout = function(){
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
// 				_include: static_table_partial_nested_layout()
// 			}
// 		}
// 	};
// };
//
// absurd(function(api) {
// 	// print to file
// 	var css_file = "./" + component_name + ".css";
// 	var html_file = "./" + component_name + ".html";
// 	api.morph("html").add(static_table_partial_page_layout()).compileFile(html_file);
// 	api.morph("component").add(static_table_partial_page_layout()).compileFile(css_file);
//
// 	 // print to console
// 	// component
// 	api.morph("component").add(static_table_partial()).compile(function(err, css, html) {
// 		console.log(css);
// 		console.log(html);
// 	});
// 	// component layout
// 	api.morph("component").add(static_table_partial_page_layout()).compile(function(err, css) {
// 		console.log(css);
// 	});
// 	api.morph("html").add(static_table_partial_page_layout()).compile(function(err, html) {
// 		console.log(html);
// 	});
// });
