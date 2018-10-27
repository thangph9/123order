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
import {mouseOverImageDetailProduct} from "./mouseOverReducer";
import {mouseOverCategory} from "./mouseOverReducer";
import {mouseClickLinkProductItem} from './mouseClickReducer';
import {mouseClickSettingNumberProduct} from './mouseClickReducer';
import {mouseScrollPageDetailProduct} from './mouseScrollReducer';
import {mouseClickSmallImageProduct} from './mouseClickReducer';
import {initLoadCategoryFirstItem} from './loadInitReducer';
import {initLoadCategorySecondItem} from './loadInitReducer';
import {initLoadCategoryThirdItem} from './loadInitReducer';
import {initLoadProductDetailAmazon} from './loadInitReducer';
import {initLoadCategoryIndexSecond} from './loadInitReducer';
import {initLoadCategoryIndexThird} from './loadInitReducer';
import {showBreadcrumbByCategory} from './mouseClickReducer';
import {mouseClickCategory} from './mouseClickReducer';
import {showSummaryProductByCategory} from './mouseClickReducer';
import {initLoadCategoryItem} from './loadInitReducer';
import {settingNumberItem} from './mouseClickReducer';
import {initLoadCategoryProducts} from './loadInitReducer';
import {initLandingPageThoiTrang} from './loadInitReducer';
import {initLandingPageDongHo} from './loadInitReducer';
import {initLandingPageCongNghe} from './loadInitReducer';
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
    mouseOverImageDetailProduct,
    mouseClickLinkProductItem,
    mouseClickSettingNumberProduct,
    mouseScrollPageDetailProduct,
    mouseClickSmallImageProduct,
    initLoadCategoryFirstItem,
    mouseOverCategory,
    initLoadCategoryIndexSecond,
    initLoadCategorySecondItem,
    initLoadCategoryThirdItem,
    initLoadCategoryIndexThird,
    mouseClickCategory,
    initLoadCategoryItem,
    initLoadCategoryProducts,
    showSummaryProductByCategory,
    initLoadProductDetailAmazon,
    showBreadcrumbByCategory,
    settingNumberItem,
    initLandingPageThoiTrang,
    initLandingPageDongHo,
    initLandingPageCongNghe
});
export default rootReducer;