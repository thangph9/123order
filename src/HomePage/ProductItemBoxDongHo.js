import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemListDongHo} from "./ProductItemListDongHo";
class ProductItemBoxDongHo extends React.Component{
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
                    <ProductItemListDongHo />
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemBoxDongHo);
export { connected as ProductItemBoxDongHo } 