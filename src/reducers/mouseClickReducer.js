

export function mouseClickLinkProductItem(state={},action){
	switch (action.type) {
		case 'MOUSE_CLICK_LINK_PRODUCT_ITEM':
		return action.data;
		default:
			return state;
	}	
}
export function mouseClickSettingNumberProduct(state=1,action){
	switch (action.type) {
		case 'MOUSE_CLICK_SETTING_NUMBER_PRODUCT':
		return action.numb;
		default:
			return state;
	}	
}
export function mouseClickSmallImageProduct(state=0,action){
	switch (action.type) {
		case 'MOUSE_CLICK_SMALL_IMAGE_PRODUCT':
		return action.numb;
		default:
			return state;
	}	
}
export function mouseClickCategory(state={},action){
	switch (action.type) {
		case 'MOUSE_CLICK_CATEGORY':
		return action.obj;
		default:
			return state;
	}	
}