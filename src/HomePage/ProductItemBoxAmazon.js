import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemList} from "./ProductItemList";
import { ProductItemListAmazon } from "./ProductItemListAmazon";
class ProductItemBoxAmazon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    render(){
        
        return (
				
                <div className="container mt-4 p-2">
					<ProductItemListAmazon/>
                    <ProductItemListAmazon/>
                    <ProductItemListAmazon/>
				</div>
        )
        
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(ProductItemBoxAmazon);
export { connected as ProductItemBoxAmazon } 