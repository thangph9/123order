import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemListBestSeller} from "./ProductItemListBestSeller";
class ProductItemBoxBestSeller extends React.Component{
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
                    <ProductItemListBestSeller />
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemBoxBestSeller);
export { connected as ProductItemBoxBestSeller } 