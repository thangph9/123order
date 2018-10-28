import { authHeader } from "../stores";
export const loadproductService= {
    getDealDay,
    getLandingPageThoiTrang,
    getLandingPageCongNghe,
    getLandingPageDongHo,
    getProductDetail
}
const api={
    getDealDay: "/home",
    getDetail : "/product-detail-test",
    getLandingPageDongHo:"/landing-page-dong-ho",
    getLandingPageCongNghe:"/landing-page-cong-nghe",
    getLandingPageThoiTrang:"/landing-page-thoi-trang"
}
function getProductDetail(value){
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({asin: value})
    }
    return fetch(api.getDetail,requestOptions).then(handleResponse);
}
function getDealDay(add_item){
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({addItem: add_item})
    }
    return fetch(api.getDealDay,requestOptions).then(handleResponse);
}
function getLandingPageThoiTrang(add_item){
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({addItem: add_item})
    }
    return fetch(api.getLandingPageThoiTrang,requestOptions).then(handleResponse);
}
function getLandingPageCongNghe(add_item){
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({addItem: add_item})
    }
    return fetch(api.getLandingPageCongNghe,requestOptions).then(handleResponse);
}
function getLandingPageDongHo(add_item){
    const requestOptions={
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({addItem: add_item})
    }
    return fetch(api.getLandingPageDongHo,requestOptions).then(handleResponse);
}

function handleResponse(response){
    if(!response.ok){
        return Promise.reject(response.statusText);
    }
    return response.json();
    
}