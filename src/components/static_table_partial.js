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

