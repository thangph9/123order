import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ProductItemListEbay } from "./ProductItemListEbay";
class ProductItemBoxEbay extends React.Component{
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
					<ProductItemListEbay/>
                    <ProductItemListEbay/>
				</div>
        )
        
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(ProductItemBoxEbay);
export { connected as ProductItemBoxEbay } 