import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
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
				
                <div>
					
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