import React from "react";
import { ProductItemBox } from "../HomePage/ProductItemBox";
export function loadAdd(state=(<div></div>),action){
	switch (action.type) {
		case 'LOAD_ADD':{
			
			return (<ProductItemBox/>);
		};
		default:
			return state;
	}	
}