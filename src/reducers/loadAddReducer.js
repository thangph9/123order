import React from "react";
export function loadAdd(state=0,action){
	switch (action.type) {
		case 'LOAD_ADD':{
			
			return action.numb;
		};
		default:
			return state;
	}	
}