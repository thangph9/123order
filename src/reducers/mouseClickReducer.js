

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
export function showSummaryProductByCategory(state=0,action){
	switch (action.type) {
		case 'SHOW_SUMMARY_PRODUCT_BY_CATEGORY':
		return action.numb;
		default:
			return state;
	}	
}
export function showBreadcrumbByCategory(state={},action){
	switch (action.type) {
		case 'SHOW_BREADCRUMB_BY_CATEGORY':
		return action.arr;
		default:
			return state;
	}	
}
export function settingNumberItem(state=1,action){
	switch (action.type) {
		case 'SETTING_NUMBER_ITEM':
		return action.num;
		default:
			return state;
	}	
}