import React from "react";
import { connect } from "react-redux";
import { EbayHide } from "./EbayHide";
class HeaderBotMenuEbay extends React.Component {
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
            <li className="nav-item dropdown" id="menuMuaEbay">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLinkMuaEbay" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    MUA HÀNG EBAY
                </a>
            <EbayHide/>
            </li>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBotMenuEbay);
export { connected as HeaderBotMenuEbay } 