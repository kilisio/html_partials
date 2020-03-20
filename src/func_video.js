export function video(attrs, ...args){
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
    let video = {
        ['video['+ attributes +']']: {
            _attrs:{...attrs},
            _include:[]
        }
    };
    for(let i=0;i<args.length;i++){
        video['video['+ attributes +']']._include.push(args[i]);
    }
    return video;
}
