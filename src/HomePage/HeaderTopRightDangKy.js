import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderTopRightDangKy extends React.Component{
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
                <a id="signin" data-toggle="modal" data-target="#myRegister" className="nav-link text-white" href="">ĐĂNG KÝ</a>
            </li>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderTopRightDangKy);
export { connected as HeaderTopRightDangKy } 