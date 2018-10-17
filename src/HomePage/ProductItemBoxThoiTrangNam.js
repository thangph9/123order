import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemListThoiTrangNam} from "./ProductItemListThoiTrangNam";
class ProductItemBoxThoiTrangNam extends React.Component{
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
                    <ProductItemListThoiTrangNam />
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemBoxThoiTrangNam);
export { connected as ProductItemBoxThoiTrangNam } 