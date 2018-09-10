

export function mouseClickLinkProductItem(state='',action){
	switch (action.type) {
		case 'MOUSE_CLICK_LINK_PRODUCT_ITEM':
		return action.dealid;
		default:
			return state;
	}	
}