import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemListHide} from "./ProductItemListHide";
class ProductItemBoxHide extends React.Component{
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
                    <ProductItemListHide />
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemBoxHide);
export { connected as ProductItemBoxHide } 