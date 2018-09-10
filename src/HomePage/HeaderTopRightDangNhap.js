import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import $ from 'jquery';
class HeaderTopRightDangNhap extends React.Component{
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
    componentDidMount(){
        $("#signin").on('click', function(event) {
            $("#myRegister").modal();
        });
    }
    render(){
        
        return (
            <li className="nav-item">
                <span id="login" data-toggle="modal" data-target="#myLogin" className="nav-link text-white">ĐĂNG NHẬP</span>
            </li>

        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderTopRightDangNhap);
export { connected as HeaderTopRightDangNhap } 