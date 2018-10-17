import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemListThoiTrangNu} from "./ProductItemListThoiTrangNu";
class ProductItemBoxThoiTrangNu extends React.Component{
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
                    <ProductItemListThoiTrangNu />
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemBoxThoiTrangNu);
export { connected as ProductItemBoxThoiTrangNu } 