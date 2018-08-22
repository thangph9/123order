import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentBotRightItemBox } from "./ContentBotRightItemBox";
class ContentBotRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }

    render() {

        return (
            <div className="col-md-9 px-2 d-flex align-self-stretch">
                <ContentBotRightItemBox/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBotRight);
export { connected as ContentBotRight } 