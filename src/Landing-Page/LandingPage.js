import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div>
                <Header/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {
}
const connectedHomePage = connect(mapStateToProps)(LandingPage);
export { connectedHomePage as LandingPage } 