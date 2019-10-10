"use strict";

// IMPORTS
// var absurd = require("absurd");
// import * as css_plugins from "css_plugins-0.6.9";
// import * as meld from "hypha_meld-0.1.8";

// // TEMPLATE CONFIGURATIONS
// // Template options 
// var options = {
//     default_template:{
//         name: 'default_template',
//         z_index: null
//     }
// };
//
// // page layout template configuration
// var config = {
//     default_template:{
//         template: {
//             laptop:{
//                 landscape: 'default_template',
//                 portrait: 'default_template'
//             },
//             phablet:{
//                 landscape: 'default_template',
//                 portrait: 'default_template'
//             }
//         },
//         components: [
//             static_table_func_templates(options.default_template)
//         ]
//     }
// };


// static table function
export function static_table(attrs, ...args){
    let table = {
        div: {
            _attrs: {...attrs, style: "display:table;"},
            _include: []
        }
    };
    for(let i=0;i<args.length;i++){
        table.div._include.push( args[i] );
    }
    return table;
}


export function static_row(attrs, ...args){
    let row = {
        div: {
            _attrs: {...attrs, style: "display:table-row;"},
            _include: []
        }
    };
    for(let i=0;i<args.length;i++){
        row.div._include.push( args[i] );
    }
    return row;
}


export function static_cell(attrs, ...args){
    let cell = {
        div: {
            _attrs: {...attrs, style: "display:table-cell;"},
            _include: []
        }
    };
    for(let i=0;i<args.length;i++){
        cell.div._include.push( args[i] );
    }
    return cell;
}


// // TEMPLATE FUNCTIONS
// export function static_table_func_templates(options){
//     // devices component mockup design properties
//     let component_template_options = {...options};
//     let component_details = {
//         project: '',
//         name: 'static_table_func',
//         classifier: '.static_table_func',
//         identifier: '#static_table_func'
//     };
//     let media = {
//         laptop:{
//             landscape:{
//                 orientation:'landscape',
//                 max_width: null,
//                 max_height: null,
//                 min_width: 769,
//                 min_height: null,
//                 width: 1366,
//                 height: 768
//             },
//             portrait:{
//                 orientation: 'portrait',
//                 max_width: null,
//                 max_height: null,
//                 min_width: 769,
//                 min_height: null,
//                 width: 768,
//                 height: 1366
//             }
//         },
//         phablet:{
//             landscape:{
//                 orientation:'landscape',
//                 max_width: 768,
//                 max_height: null,
//                 min_width: null,
//                 min_height: null,
//                 width: 768,
//                 height: 432
//             },
//             portrait:{
//                 orientation: 'portrait',
//                 max_width: 768,
//                 max_height: null,
//                 min_width: null,
//                 min_height: null,
//                 width: 432,
//                 height: 768
//             }
//         }
//     };
//
//     // inline scripts variables
//
//
//     // inline styles variables
//     let scale = {
//         laptop_landscape: css_plugins.scale(component_details.project + component_details.classifier, media.laptop.landscape),
//         laptop_portrait: css_plugins.scale(component_details.project + component_details.classifier, media.laptop.portrait),
//         phablet_landscape: css_plugins.scale(component_details.project + component_details.classifier, media.phablet.landscape),
//         phablet_portrait: css_plugins.scale(component_details.project + component_details.classifier, media.phablet.portrait)
//     };
//
//
//     // html attributes
//     let row_attr = {
//         'class': 'test_row'
//     };
//
//     let cell_attr = {
//         'class': 'test_cell'
//     };
//
//     let table_attr = {
//         'class': 'test_table'
//     };
//
//
//
//     // html variables
//     let row_test = static_row(row_attr,
//         static_cell(cell_attr, 'cell one'),
//         static_cell(cell_attr, 'cell two'),
//         static_cell(cell_attr, 'cell three'),
//         static_cell(cell_attr, 'cell four'),
//         static_cell(cell_attr, 'cell five'),
//         static_cell(cell_attr, 'cell six'),
//         static_cell(cell_attr, 'cell seven')
//     );
//     
//     
//     let row_test_2 = static_row(row_attr,
//         static_cell(cell_attr, 'cell one'),
//         static_cell(cell_attr, 'cell two'),
//         static_cell(cell_attr, 'cell three'),
//         static_cell(cell_attr, 'cell four'),
//         static_cell(cell_attr, 'cell five'),
//         static_cell(cell_attr, 'cell six'),
//         static_cell(cell_attr, 'cell seven')
//     );
//
//     let table = static_table(table_attr,
//         row_test,
//         row_test_2
//     );
//
//
//     // css variables
//
//
//     // template config
//     let template = {
//         laptop:{
//             landscape:{
//                 fonts: [],
//                 styles: [scale.laptop_landscape],
//                 scripts: [],
//                 html: [table],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: css_plugins.xy(50, media.laptop.landscape).y,
//                         left: css_plugins.xy(100, media.laptop.landscape).x,
//                         width: '800px',
//                         height: '400px',
//                         '.test_table': {
//                             margin: '0 auto',
//                             padding: 0,
//                             width: '100%'
//                         }
//                     }
//                 }
//             },
//             portrait:{
//                 fonts: [],
//                 styles: [scale.laptop_portrait],
//                 scripts: [],
//                 html: [],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: css_plugins.xy(0, media.laptop.portrait).y,
//                         left: css_plugins.xy(0, media.laptop.portrait).x,
//                         width: 0,
//                         height: 0
//                     }
//                 }
//             }
//         },
//         phablet:{
//             landscape:{
//                 fonts: [],
//                 styles: [scale.phablet_landscape],
//                 scripts: [],
//                 html: [],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: css_plugins.xy(0, media.phablet.landscape).y,
//                         left: css_plugins.xy(0, media.phablet.landscape).x,
//                         width: 0,
//                         height: 0
//                     }
//                 }
//             },
//             portrait:{
//                 fonts: [],
//                 styles: [scale.phablet_portrait],
//                 scripts: [],
//                 html: [],
//                 css:{
//                     [component_details.project + component_details.identifier]:[],
//                     [component_details.project + component_details.classifier]:{
//                         'z-index': component_template_options.z_index || 'auto',
//                         margin: 0,
//                         padding: 0,
//                         position: 'absolute',
//                         top: css_plugins.xy(0, media.phablet.portrait).y,
//                         left: css_plugins.xy(0, media.phablet.portrait).x,
//                         width: 0,
//                         height: 0
//                     }
//                 }
//             }
//         },
//     };
//
//
//     return {
//         details:{...component_details},
//         templates:{
//             default_template:{
//                 laptop:{
//                     landscape:{
//                         media: media.laptop.landscape,
//                         html:{
//                             scripts: [...template.laptop.landscape.scripts],
//                             styles: [...template.laptop.landscape.styles],
//                             base: [...template.laptop.landscape.html]
//                         },
//                         css:{
//                             fonts: [template.laptop.landscape.fonts],
//                             base: [template.laptop.landscape.css]
//                         }
//                     },
//                     portrait:{
//                         media: media.laptop.portrait,
//                         html:{
//                             scripts: [...template.laptop.portrait.scripts],
//                             styles: [...template.laptop.portrait.styles],
//                             base: [...template.laptop.portrait.html]
//                         },
//                         css:{
//                             fonts: [template.laptop.portrait.fonts],
//                             base: [template.laptop.portrait.css]
//                         }
//                     }
//                 },
//                 phablet:{
//                     landscape:{
//                         media: media.phablet.landscape,
//                         html:{
//                             scripts: [...template.phablet.landscape.scripts],
//                             styles: [...template.phablet.landscape.styles],
//                             base: [...template.phablet.landscape.html]
//                         },
//                         css:{
//                             fonts: [template.phablet.landscape.fonts],
//                             base: [template.phablet.landscape.css]
//                         }
//                     },
//                     portrait:{
//                         media: media.phablet.portrait,
//                         html:{
//                             scripts: [...template.phablet.portrait.scripts],
//                             styles: [...template.phablet.portrait.styles],
//                             base: [...template.phablet.portrait.html]
//                         },
//                         css:{
//                             fonts: [template.phablet.portrait.fonts],
//                             base: [template.phablet.portrait.css]
//                         }
//                     }
//                 }
//             }
//         }
//     };
// }
//
// export default static_table_func_templates;
//
// // // PARSE TEMPLATE
// var component_template = meld.template_parser(config);
//
// // PRINT COMPONENT TEMPLATE OUTPUT TO CONSOLE
// absurd(function(api) {
//     api.morph("component").add(component_template).compile(function(err, css, html) {
//             console.log(css);
//             console.log(html);
//     });
// });
//
//
// // PAGE LAYOUT
// var page_details = {
// 	name: 'static_table_func',
// 	page_title: null
// };
//
// // external script files
// var eqcss = {
// 	script:{
// 		_attrs:{
// 			src: './assets/scripts/eqcss/EQCSS.min.js'
// 		}
// 	}
// };
//
// // component page layout
// function static_table_func_layout(){
// 	return {
// 		_:"<!DOCTYPE html>",
// 		html: {
// 			_attrs:{
// 				   style: "width:100%;height:100%;overflow:hidden;"
// 			},
// 			head: {
// 				_include: [
// 					'<link rel="stylesheet" type="text/css" href="' + page_details.name + '.css"/>'
// 				],
// 				title: page_details.page_title || page_details.name 
// 			},
// 			body: {
// 				_attrs:{
// 					style: "margin:0;padding:0;"
// 				},
// 				_include: [ 
// 					component_template,
// 					eqcss
// 				]
// 			}
// 		}
// 	};
// }
//
// // EXPRESS SERVER CONFIGURATIONS
// // express server middlewares
// var static_table_func_css, static_table_func_html;
//
// absurd().morph("component").add(static_table_func_layout()).compile(function(err, css) {
// 	   static_table_func_css = css;
// });
//
// absurd().morph("html").add(static_table_func_layout()).compile(function(err, html) {
// 	   static_table_func_html = html;
// });
//
// export function static_table_func_css_mid(req, res){
// 	res.send(static_table_func_css);
// } 
//
// export function static_table_func_html_mid(req, res){
// 	res.send(static_table_func_html);
// } 
//
//
//
// // express testing server
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
// app.get('/', setContentType("html"), static_table_func_html_mid);
//
// // static_table_func component specific routes
// app.get('/static_table_func.css', setContentType("css"), static_table_func_css_mid);
// app.get('/static_table_func.html', setContentType("html"), static_table_func_html_mid);
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
