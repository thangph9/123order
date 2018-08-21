import React from "react";
import { connect } from "react-redux";
import { HeaderTopLeft } from "./HeaderTopLeft";
import { HeaderTopRight } from "./HeaderTopRight";
class HeaderTop extends React.Component {
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
            <div className="container-fluid order-top-nav-color">
                <div className="container">
                    <nav className="navbar navbar-expand-lg order-top-nav navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <HeaderTopLeft/>
                            <HeaderTopRight/>
                        </div>
                    </nav>
                </div>
            </div>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderTop);
export { connected as HeaderTop } 