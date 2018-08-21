import React from "react";
import { connect } from "react-redux";
import { HeaderBotMenuGiaSoc } from "./HeaderBotMenuGiaSoc";
import { HeaderBotMenuBestSeller } from "./HeaderBotMenuBestSeller";
import { HeaderBotMenuHotDeal } from "./HeaderBotMenuHotDeal";
import { HeaderBotMenuAmazon } from "./HeaderBotMenuAmazon";
import { HeaderBotMenuEbay } from "./HeaderBotMenuEbay";
class HeaderBotMenu extends React.Component {
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
            <div className="row justify-content-lg-center justify-content-sm-start">
                <nav className="navbar navbar-expand-lg navbar-light order-menu">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <HeaderBotMenuGiaSoc/>
                            <HeaderBotMenuBestSeller/>
                            <HeaderBotMenuHotDeal/>
                            <HeaderBotMenuAmazon/>
                            <HeaderBotMenuEbay/>
                        </ul>
                    </div>
                </nav>
            </div>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBotMenu);
export { connected as HeaderBotMenu } 