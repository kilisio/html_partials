"use strict";

// FUNCTIONS
export function select(attrs, ...args){
    let attributes; 
    if(attrs.state === undefined){
        attributes = '';
    }else{
        attributes = attrs.state.join(' ');
    }
	for (var t in attrs){
    	if (attrs.hasOwnProperty(t)){
            if(t === 'state'){
                delete attrs[t];
            }
    	}
	}
    let select = {
        ['select['+ attributes +']']: {
            _attrs:{...attrs},
            _include:[]
        }
    };
    for(let i=0;i<args.length;i++){
        select['select['+ attributes +']']._include.push(args[i]);
    }
    return select;
}

export function option(attrs, ...args){
    let attributes; 
    if(attrs.state === undefined){
        attributes = '';
    }else{
        attributes = attrs.state.join(' ');
    }
	for (var t in attrs){
    	if (attrs.hasOwnProperty(t)){
            if(t === 'state'){
                delete attrs[t];
            }
    	}
	}
    let option = {
        ['option['+ attributes +']']: {
            _attrs:{...attrs},
            _include:[]
        }
    };
    for(let i=0;i<args.length;i++){
        option['option['+ attributes +']']._include.push(args[i]);
    }
    return option;
}




// // HTML OBJECT
// export var div_func_html = {
//     _include:[
//         select({},
//             option({},'option 1'),
//             option({},'option 2'),
//             option({},'option 3'),
//             option({},'option 4'),
//             option({},'option 5'),
//             option({},'option 6'),
//             option({},'option 7'),
//             option({},'option 8'),
//             option({},'option 9'),
//             option({},'option 10'),
//             option({},'option 11'),
//         )
//     ]
// };
//
//
//
//
// // COMPONENT
// export function div_func(...args) {
//     var nested_html_components = { _include: [] };
//     if(args.length === 0){
//             nested_html_components._include.push(div_func_html);
//     }else{
//         nested_html_components._include.push(div_func_html);
//         for(var i=0; i<args.length; i++) {
//             nested_html_components._include.push(args[i]);
//         }
//     }
//
//     return {
//         css:{
//         },
//         html:{
//             'div#div_func.div_func': [
//                 nested_html_components
//             ]
//
//         }
//
//     };
// }
//
//
// // ABSURD JS CONSOLE AND FILE TEST CODE
// var absurd = require("absurd-0.3.158");
//
//
// absurd(function(api) {
// 	api.morph("component").add(div_func()).compile(function(err, css, html) {
// 			console.log(css);
// 			console.log(html);
// 	});
// });
//
//
//
