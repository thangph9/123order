import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { loadingBarReducer } from 'react-redux-loading-bar';
import { alert } from "./alert.reducer";

const rootReducer=combineReducers({
    authentication,
    alert,
    loadingBar: loadingBarReducer,
});
export default rootReducer;