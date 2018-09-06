
var initialState={
		id:'',
		detail:'img/Layer 6.png',
		name:'TOP HOT'
	}
export function load(state=initialState,action){
	switch (action.type) {
		case 'LOAD_IMG':{
			var item=action.img.map((value,index)=>{
				return {id:value.id,detail:value.detail,name:value.name};
			})
			//console.log(item);
			return item;
			//return{id:action.img.id,detail:action.img.detail,name:action.img.name};
		};
		default:
			return state;
	}	
}