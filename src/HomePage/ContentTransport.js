import React from "react";
import { connect } from "react-redux";

class ContentTransport extends React.Component {
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
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="container px-2 py-4">
                        <div className="container adv-container">
                            <div className="row adv-container justify-content-center">
                                <img src="img/uy-tin.png" alt className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentTransport);
export { connected as ContentTransport } 