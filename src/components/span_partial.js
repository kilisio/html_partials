"use strict";

// imports



// span partial plugin
export function span(...args){
    var obj = args[0];
    var id = args[1];
    var this_class = args[2];
    return{
        span: {
            _attrs:{
                id: id,
                class: this_class
            },
            _:[
                obj
            ]
        }
    };
}



