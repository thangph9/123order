import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {HeaderTopLeftEBAY} from './HeaderTopLeftEBAY';
import { HeaderTopLeftAMAZON } from "./HeaderTopLeftAMAZON";
import { HeaderTopLeftTopStore } from "./HeaderTopLeftTopStore";
class HeaderTopLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }

    render() {

        return (
                <ul className="navbar-nav mr-auto">
                
                    <HeaderTopLeftEBAY/>
                    <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span> </li>
                    <HeaderTopLeftAMAZON/>
                    <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span> </li>
                    <HeaderTopLeftTopStore/>
                    <li className="nav-item mx-1 d-none d-lg-block"> <span className="nav-link text-white">|</span> </li>
                </ul>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderTopLeft);
export { connected as HeaderTopLeft } 