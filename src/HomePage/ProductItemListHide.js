import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemHide} from "./ProductItemHide";
class ProductItemListHide extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    render(){
 
        return (
                <div className="row">
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                    <ProductItemHide/>
                </div>
        )
        
    }
}
function mapStateToProps(state){
     return {
        initLoad:state.initLoadContentDeal.data,
        initLoading:state.initLoadContentDeal.loading,
        loadAdd:state.loadAdd
    }
}
const connected=connect(mapStateToProps)(ProductItemListHide);
export { connected as ProductItemListHide } 