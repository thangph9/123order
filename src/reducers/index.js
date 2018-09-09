import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { loadingBarReducer } from 'react-redux-loading-bar';
import { alert } from "./alert.reducer";
import {load} from "./loadImgReducer";
import {loadAdd} from "./loadAddReducer";
import {initLoadAmazonHide} from "./loadInitReducer";
import {initLoadEbayHide} from "./loadInitReducer";
import {initLoadContentSaleLeft} from "./loadInitReducer";
import {initLoadContentDeal} from "./loadInitReducer";
import {initLoadProductDetail} from "./loadInitReducer";
import {mouseOverImageDetailProduct} from "./mouseOverImageReducer";
const rootReducer=combineReducers({
    authentication,
    alert,
    loadingBar: loadingBarReducer,
    loadImg:load,
    loadAdd:loadAdd,
    initLoadEbayHide:initLoadEbayHide,
    initLoadAmazonHide:initLoadAmazonHide,
    initLoadContentSaleLeft,
    initLoadContentDeal,
    initLoadProductDetail,
    mouseOverImageDetailProduct
});
export default rootReducer;