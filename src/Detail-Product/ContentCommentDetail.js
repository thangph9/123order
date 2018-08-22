import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentCommentDetailItem } from "./ContentCommentDetailItem";

class ContentCommentDetail extends React.Component {
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
            <div className="container comment-detail  border-top-0">
                <ContentCommentDetailItem/>
                <ContentCommentDetailItem/>
                <ContentCommentDetailItem/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentCommentDetail);
export { connected as ContentCommentDetail } 