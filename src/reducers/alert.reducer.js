import { alertConstants } from "../constants";
const initialState={
    alerts:[]
}
export function alert(state=initialState,action){
    switch (action.type){
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message:action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-error',
                message:action.message
            };
        case alertConstants.CLEAR:
            return {
            };
        default:
            return state;
    }
}