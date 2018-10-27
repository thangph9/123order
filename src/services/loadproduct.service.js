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
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({addItem: add_item})
    }
    return axios(api.getDealDay,requestOptions).then(handleResponse);
}

function handleResponse(response){
    if(!response.ok){
        return Promise.reject(response.statusText);
    }
    return response.json();
    
}