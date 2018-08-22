import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentBotLeft } from "./ContentBotLeft";
import { ContentBotRight } from "./ContentBotRight";
class ContentBot extends React.Component {
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
            <div className="container mt-4">
                <div className="row">
                    <ContentBotLeft/>
                    <ContentBotRight/>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBot);
export { connected as ContentBot } 