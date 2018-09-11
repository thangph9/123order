

export function mouseOverImageDetailProduct(state=0,action){
	switch (action.type) {
		case 'MOUSE_OVER_SMALL_IMAGE_PRODUCT':
		return action.numb;
		case 'MOUSE_CLICK_SMALL_IMAGE_PRODUCT':
		return action.numb;
		case 'MOUSE_OUT_SMALL_IMAGE_PRODUCT':
		return action.numb;
		default:
			return state;
	}	
}