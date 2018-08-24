import React from "react";
import { connect } from "react-redux";
import { HotDealHide } from "./HotDealHide";
class HeaderBotMenuHotDeal extends React.Component {
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
            <li className="nav-item dropdown" id="menuHotDeal">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLinkHotDeal" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">HOT DEAL CÔNG NGHỆ</a>
            <HotDealHide/>
            </li>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBotMenuHotDeal);
export { connected as HeaderBotMenuHotDeal } 