export function mouseScrollPageDetailProduct(state=0,action){
	switch (action.type) {
		case 'MOUSE_SCROLL_DETAIL_PRODUCT':
		return action.numb;
		default:
			return state;
	}	
}