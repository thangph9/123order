import React from "react";
import {connect} from "react-redux";
class CartPage extends React.Component{
    construct(props){
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        console.log(e)
    }
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