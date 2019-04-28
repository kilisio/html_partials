"use strict";

// imports

// image partial function
export function image(...args){
    var src = args[0];
    var alt_text = args[1];
    var id = args[4];
    return  '<img src=' + src + ' alt=' + alt_text + ' id=' + id + ' />';
}


