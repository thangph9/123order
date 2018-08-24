import React from "react";
import { connect } from "react-redux";
import { GiaSocHide } from "./GiaSocHide";
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
    render() {

        return (
            <li className="nav-item dropdown" id="menuGiaSoc">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLinkGiaSoc" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">GIÁ SỐC MỖI NGÀY</a>
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