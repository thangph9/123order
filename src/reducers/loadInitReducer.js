
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
export function initLoadContentDeal(state=[],action){
	switch (action.type) {
		case 'INIT_LOAD_CONTENT_DEAL':
			
			return action.arrData;
		
		default:
			return state;
	}	
}