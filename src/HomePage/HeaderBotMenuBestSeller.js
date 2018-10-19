import React from "react";
import { connect } from "react-redux";
import { BestSellerHide } from "./BestSellerHide";
import { Link } from "react-router-dom";
//import $ from 'jquery';
class HeaderBotMenuBestSeller extends React.Component {
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
        document.getElementById("linkBestSeller").style.display = "none";
    }
    handleMouseOverMenu(){
        document.getElementById("linkBestSeller").style.display = "block";
    }
    render() {

        return (
            <li onMouseOver={()=>this.handleMouseOverMenu()} onMouseOut={()=>this.handleMouseOutMenu()}  className="nav-item dropdown" id="menuBestSeller" >
                <Link to="/best-seller" className="nav-link dropdown-toggle text-white" href="" id="navbarDropdownMenuLinkBestSeller" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BEST SELLER</Link>
            <BestSellerHide/>
            </li>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBotMenuBestSeller);
export { connected as HeaderBotMenuBestSeller } 