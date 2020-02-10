"use strict";

export function link(attrs, ...args){
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
    let link = {
        ['a['+ attributes + ']']: {
            _attrs:{...attrs},
            _include:[]
        }
    };
    for(let i=0;i<args.length;i++){
        link['a[' + attributes + ']']._include.push(args[i]);
    }
    return link;
}
