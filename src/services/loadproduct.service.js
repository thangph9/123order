import { authHeader } from "../stores";
import axios from 'axios';
export const loadproductService= {
    getDealDay
}
const api={
    getDealDay: "/home",
    getDetail : "/product-detail-amazon"
}
function getDealDay(add_item){
    const requestOptions={
        method: 'POST',
        url:api.getDealDay,
        data: {addItem: add_item}
    }
    return axios(requestOptions).then(handleResponse);
}

function handleResponse(response){
    if(!response.ok){
        return Promise.reject(response.statusText);
    }
    return response.json();
    
}