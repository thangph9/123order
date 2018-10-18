
export function loadAdd(state=5,action){
	switch (action.type) {
		case 'LOAD_ADD':
			
			return action.numb;
		default:
			return state;
	}	
}