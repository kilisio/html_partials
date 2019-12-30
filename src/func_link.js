"use strict";

export function link(attrs, ...args){
    let link = {
        a: {
            _attrs:{...attrs},
            _include:[]
        }
    };
    for(let i=0;i<args.length;i++){
        link.a._include.push(args[i]);
    }
    return link;
}
