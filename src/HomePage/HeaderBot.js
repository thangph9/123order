import React from "react";
import { connect } from "react-redux";
class HeaderBot extends React.Component {
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
            <div class="container-fluid order-menu">
                <div class="container pt-4">

                </div>
            </div>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBot);
export { connected as HeaderBot } 