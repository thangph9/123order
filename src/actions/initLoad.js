import { loaddealdayConstants } from "../constants";

export const initLoadEbayHide=(arrData)=>{
	return{
		type: 'INIT_LOAD_EBAY_HIDE',
		arrData
	}
}
export const initLoadAmazonHide=(arrData)=>{
	return{
		type: 'INIT_LOAD_AMAZON_HIDE',
		arrData
	}
}
export const initLoadContentSaleLeft=(arrData)=>{
	return{
		type: 'INIT_LOAD_CONTENT_SALE_LEFT',
		arrData
	}
}
export const initLoadContentDeal=(arrData)=>{
	return dispatch => {   
		request();
		try{
			success(arrData);
		}
		catch(error){
			failure(error)
		}
	}
    function request() { return { type : loaddealdayConstants.LOAD_DEAL_REQUEST }}
    function success(arrData){ return { type: loaddealdayConstants.LOAD_DEAL_SUCCESS, arrData }}
    function failure(error) { return { type: loaddealdayConstants.LOAD_DEAL_FAILURE, error }}
}
export const initLoadProductDetail=(arrData)=>{
	return{
		type: 'INIT_LOAD_PRODUCT_DETAIL',
		arrData
	}
}
export const initLoadCategoryFirstItem=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_FIRST_ITEM',
		arrData
	}
}
export const initLoadCategorySecondItem=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_SECOND_ITEM',
		arrData
	}
}
export const initLoadCategoryThirdItem=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_THIRD_ITEM',
		arrData
	}
}
export const initLoadCategoryIndexSecond=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_INDEX_SECOND',
		arrData
	}
}
export const initLoadCategoryIndexThird=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_INDEX_THIRD',
		arrData
	}
}
export const initLoadCategoryItem=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_ITEM',
		arrData
	}
}
export const initLoadCategoryProducts=(arrData)=>{
	return{
		type: 'INIT_LOAD_CATEGORY_PRODUCTS',
		arrData
	}
}
export const initLoadProductDetailAmazon=(arrData)=>{
	return{
		type: 'INIT_LOAD_PRODUCT_DETAIL_AMAZON',
		arrData
	}
}
export const initLoadCurrencyRaito=(numb)=>{
	return{
		type: 'INIT_LOAD_CURRENCYRAITO',
		numb
	}
}
