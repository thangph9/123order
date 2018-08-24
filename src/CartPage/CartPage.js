import React from "react";
import {connect} from "react-redux";
class CartPage extends React.Component{
    
    render(){
        return(
            <div></div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected = connect(mapStateToProps)(CartPage);
export {connected as CartPage}