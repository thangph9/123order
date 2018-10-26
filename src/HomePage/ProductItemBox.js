import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemList} from "./ProductItemList";
class ProductItemBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    render(){
       
        return (
                <div style={{height:'712px'}}>
                    <ProductItemList />
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemBox);
export { connected as ProductItemBox } 