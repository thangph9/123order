import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentDetailItem } from "./ContentDetailItem";

class ContentDetailItemList extends React.Component {
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
            <tbody>
                <ContentDetailItem/>
                <ContentDetailItem/>
                <ContentDetailItem/>
            </tbody>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetailItemList);
export { connected as ContentDetailItemList } 