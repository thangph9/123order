import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HeaderTopRightSanSale } from "./HeaderTopRightSanSale";
import { HeaderTopRightMuaHo } from "./HeaderTopRightMuaHo";
import { HeaderTopRightShipHo } from "./HeaderTopRightShipHo";
import { HeaderTopRightDangKy } from "./HeaderTopRightDangKy";
import { HeaderTopRightDangNhap } from "./HeaderTopRightDangNhap";
class HeaderTopRight extends React.Component{
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
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span><span className="sr-only">(current)</span> </li>
                <HeaderTopRightSanSale/>
                <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span><span className="sr-only">(current)</span> </li>
                <HeaderTopRightMuaHo/>
                <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span><span className="sr-only">(current)</span> </li>
                <HeaderTopRightShipHo/>
                <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span><span className="sr-only">(current)</span> </li>
                <HeaderTopRightDangKy/>
                <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span><span className="sr-only">(current)</span> </li>
                <HeaderTopRightDangNhap/>
            </ul>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderTopRight);
export { connected as HeaderTopRight } 