import React from "react";
import { connect } from "react-redux";
import { HotDealHide } from "./HotDealHide";
import { Link } from "react-router-dom";
//import $ from 'jquery';
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
    // componentDidMount() {
    //     $('#navbarDropdownMenuLinkHotDeal').on('click', function () {
    //         $('#menuHotDeal').toggleClass("show");
    //             $('#linkHotDeal').toggleClass("show");
    //             $('#linkEbay').removeClass("show");
    //             $('#linkTopStore').removeClass("show");
    //             $('#navbarDropdownMenuLinkHotDeal').attr('aria-expanded', 'true');

    //     })
    // }
    render() {

        return (
            <li className="nav-item dropdown" id="menuHotDeal">
                <Link to='/hot-deal-cong-nghe' className="nav-link dropdown-toggle text-white" href="" id="navbarDropdownMenuLinkHotDeal" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">HOT DEAL CÔNG NGHỆ</Link>
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