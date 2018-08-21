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
				<div>
					<ProductItemList />
				</div>
        )
        
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(ProductItemBox);
export { connected as ProductItemBox } 