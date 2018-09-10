

export function mouseClickLinkProductItem(state='',action){
	switch (action.type) {
		case 'MOUSE_CLICK_LINK_PRODUCT_ITEM':
		return action.dealid;
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