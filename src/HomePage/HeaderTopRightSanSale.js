import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderTopRightSanSale extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e){
        this.setState({
            login:true,

        })
    }

    render(){
        
        return (
            <li className="nav-item">
                <a className="nav-link text-white" href="">SĂN SALE</a> 
            </li>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderTopRightSanSale);
export { connected as HeaderTopRightSanSale } 