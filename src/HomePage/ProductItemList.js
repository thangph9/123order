import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItem} from "./ProductItem";

class ProductItemList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    componentWillMount(){
        
    }
    render(){
        
        return (
                    <div className="row">
					<ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    </div>
        )
        
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(ProductItemList);
export { connected as ProductItemList } 