import React from "react";
import { connect } from "react-redux";
import { GiaSocHide } from "./GiaSocHide";
import { Link } from "react-router-dom";
//import $ from 'jquery';
class HeaderBotMenuGiaSoc extends React.Component {
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
        document.getElementById("linkGiaSoc").style.display = "none";
    }
    handleMouseOverMenu(){
        document.getElementById("linkGiaSoc").style.display = "block";
    }
    render() {

        return (
            <li className="nav-item dropdown" id="menuGiaSoc" onMouseOver={()=>this.handleMouseOverMenu()} onMouseOut={()=>this.handleMouseOutMenu()} >
                <Link to="/gia-soc-moi-ngay" className="nav-link dropdown-toggle text-white" id="navbarDropdownMenuLinkGiaSoc" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GIÁ SỐC MỖI NGÀY</Link>
            <GiaSocHide/>
            </li>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBotMenuGiaSoc);
export { connected as HeaderBotMenuGiaSoc } 