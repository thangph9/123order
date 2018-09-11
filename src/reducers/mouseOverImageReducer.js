

export function mouseOverImageDetailProduct(state=0,action,productClicked=0){
	switch (action.type) {
		case 'MOUSE_OVER_SMALL_IMAGE_PRODUCT':
		return action.numb;
		case 'MOUSE_CLICK_SMALL_IMAGE_PRODUCT':
		productClicked=action.numb;
		return action.numb;
		case 'MOUSE_OUT_SMALL_IMAGE_PRODUCT':
		return productClicked;
		default:
			return state;
	}	
}