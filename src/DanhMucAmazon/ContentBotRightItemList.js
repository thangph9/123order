import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentBotRightItem } from "./ContentBotRightItem";
class ContentBotRightItemList extends React.Component {
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
            <div class="row">
                <ContentBotRightItem/>
                <ContentBotRightItem/>
                <ContentBotRightItem/>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBotRightItemList);
export { connected as ContentBotRightItemList } 