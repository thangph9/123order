import  {loaddealdayConstants}  from "../constants";
import  {loadlandingthoitrangConstants}  from "../constants";
import  {loadlandingdonghoConstants}  from "../constants";
import  {loadlandingcongngheConstants}  from "../constants";
export function initLoadEbayHide(state={},action){
	switch (action.type) {
		case 'INIT_LOAD_EBAY_HIDE':{
			var item=action.arrData.map((value,index)=>{
				return {id:value.id,detail:value.detail,from:value.from,price:value.price,salePrice:value.salePrice,linkImg:value.linkImg};
			})
			return item;
		};
		default:
			return state;
	}	
}
export function initLoadAmazonHide(state={},action){
	switch (action.type) {
		case 'INIT_LOAD_AMAZON_HIDE':{
			var item=action.arrData.map((value,index)=>{
				return {id:value.id,detail:value.detail,from:value.from,price:value.price,salePrice:value.salePrice,linkImg:value.linkImg};
			})
			return item;
		};
		default:
			return state;
	}	
}
export function initLoadContentSaleLeft(state={},action){
	switch (action.type) {
		case 'INIT_LOAD_CONTENT_SALE_LEFT':{
			var item=action.arrData.map((value,index)=>{
				return {id:value.id,linkanh:value.linkanh};
			})
			return item;
		};
		default:
			return state;
	}	
}
export function initLoadContentDeal(state={},action){
	switch (action.type) {
		case loaddealdayConstants.LOAD_DEAL_REQUEST:
			return {
				loading:true
			}
		case loaddealdayConstants.LOAD_DEAL_SUCCESS:
			return {
				loading:false,
				data:action.arrData
			}
		case loaddealdayConstants.LOAD_DEAL_FAILURE:
			return {
				loading:false,
				error:action.error
			}
		default:
			return state;
	}	
}
export function initLandingPageThoiTrang(state={},action){
	switch (action.type) {
		case loadlandingthoitrangConstants.LOAD_LANDING_THOI_TRANG_REQUEST:
			return {
				loading:true
			}
		case loadlandingthoitrangConstants.LOAD_LANDING_THOI_TRANG_SUCCESS:
			return {
				loading:false,
				data:action.arrData
			}
		case loadlandingthoitrangConstants.LOAD_LANDING_THOI_TRANG_FAILURE:
			return {
				loading:false,
				error:action.error
			}
		default:
			return state;
	}	
}
export function initLandingPageDongHo(state={},action){
	switch (action.type) {
		case loadlandingdonghoConstants.LOAD_LANDING_DONG_HO_REQUEST:
			return {
				loading:true
			}
		case loadlandingdonghoConstants.LOAD_LANDING_DONG_HO_SUCCESS:
			return {
				loading:false,
				data:action.arrData
			}
		case loadlandingdonghoConstants.LOAD_LANDING_DONG_HO_FAILURE:
			return {
				loading:false,
				error:action.error
			}
		default:
			return state;
	}	
}
export function initLandingPageCongNghe(state={},action){
	switch (action.type) {
		case loadlandingcongngheConstants.LOAD_LANDING_CONG_NGHE_REQUEST:
			return {
				loading:true
			}
		case loadlandingcongngheConstants.LOAD_LANDING_CONG_NGHE_SUCCESS:
			return {
				loading:false,
				data:action.arrData
			}
		case loadlandingcongngheConstants.LOAD_LANDING_CONG_NGHE_FAILURE:
			return {
				loading:false,
				error:action.error
			}
		default:
			return state;
	}	
}
export function initLoadProductDetail(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_PRODUCT_DETAIL':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategoryFirstItem(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_FIRST_ITEM':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategorySecondItem(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_SECOND_ITEM':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategoryThirdItem(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_THIRD_ITEM':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategoryIndexSecond(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_INDEX_SECOND':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategoryIndexThird(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_INDEX_THIRD':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategoryItem(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_ITEM':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadCategoryProducts(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CATEGORY_PRODUCTS':
			return action.arrData;
		default:
			return state;
	}	
}
export function initLoadProductDetailAmazon(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_PRODUCT_DETAIL_AMAZON':
			return action.arrData;
		default:
			return state;
	}	
}