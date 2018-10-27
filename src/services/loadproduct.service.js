import { authHeader } from "../stores";
export const loadproductService= {
    getDealDay,
    getLandingPageThoiTrang
}
const api={
    getDealDay: "/home",
    getDetail : "/product-detail-amazon",
    getLandingPageThoiTrang:"/landing-page-thoi-trang"
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

function handleResponse(response){
    if(!response.ok){
        return Promise.reject(response.statusText);
    }
    return response.json();
    
}