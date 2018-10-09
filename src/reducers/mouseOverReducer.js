export function mouseOverImageDetailProduct(state=0,action){
	switch (action.type) {
		case 'MOUSE_OVER_SMALL_IMAGE_PRODUCT':
		return action.numb;
		default:
			return state;
	}	
}
export function mouseOverCategory(state=0,action){
	switch (action.type) {
		case 'MOUSE_OVER_CATEGORY':
		return action.obj;
		default:
			return state;
	}	
}