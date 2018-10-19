import React from "react";
import { connect } from "react-redux";
import { AmazonHide } from "./AmazonHide";
import { Link } from "react-router-dom";
//import $ from 'jquery';
class HeaderBotMenuAmazon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleMouseOutMenu(){
        document.getElementById("linkMuaAmazon").style.display = "none";
    }
    handleMouseOverMenu(){
        document.getElementById("linkMuaAmazon").style.display = "block";
    }
    render() {

        return (
            <li className="nav-item dropdown" id="menuMuaAmazon" onMouseOver={()=>this.handleMouseOverMenu()} onMouseOut={()=>this.handleMouseOutMenu()}>
                <Link to="/danh-muc-amazon" className="nav-link dropdown-toggle text-white" href="" id="navbarDropdownMenuLinkMuaAmazon" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MUA HÀNG AMAZON</Link>
                <AmazonHide />
            </li>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBotMenuAmazon);
export { connected as HeaderBotMenuAmazon } 