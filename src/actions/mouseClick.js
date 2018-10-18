export const mouseClickLinkProductItem=(data)=>{
	return{
		type: 'MOUSE_CLICK_LINK_PRODUCT_ITEM',
		data
	}
}
export const mouseClickSettingNumberProduct=(numb)=>{
	return{
		type: 'MOUSE_CLICK_SETTING_NUMBER_PRODUCT',
		numb
	}
}
export const mouseClickSmallImageProduct=(numb)=>{
	return{
		type: 'MOUSE_CLICK_SMALL_IMAGE_PRODUCT',
		numb
	}
}
export const mouseClickCategory=(obj)=>{
	return{
		type: 'MOUSE_CLICK_CATEGORY',
		obj
	}
}
export const showSummaryProductByCategory=(numb)=>{
	return{
		type: 'SHOW_SUMMARY_PRODUCT_BY_CATEGORY',
		numb
	}
}
export const showBreadcrumbByCategory=(arr)=>{
	return{
		type: 'SHOW_BREADCRUMB_BY_CATEGORY',
		arr
	}
}
export const settingNumberItem=(num)=>{
	return{
		type: 'SETTING_NUMBER_ITEM',
		num
	}
}


