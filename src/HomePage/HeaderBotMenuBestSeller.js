import React from "react";
import { connect } from "react-redux";
import { BestSellerHide } from "./BestSellerHide";
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
    // componentDidMount() {
    //     $('#navbarDropdownMenuLinkBestSeller').on('click', function () {
    //         $('#menuBestSeller').toggleClass("show");
    //             $('#linkBestSeller').toggleClass("show");
    //             $('#linkEbay').removeClass("show");
    //             $('#linkTopStore').removeClass("show");
    //             $('#navbarDropdownMenuLinkBestSeller').attr('aria-expanded', 'true');
    //     })
    // }
    render() {

        return (
            <li className="nav-item dropdown" id="menuBestSeller">
                <a className="nav-link dropdown-toggle text-white" href="" id="navbarDropdownMenuLinkBestSeller" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BEST SELLER</a>
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