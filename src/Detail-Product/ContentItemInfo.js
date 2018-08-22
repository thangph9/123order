import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentItemInfo extends React.Component {
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
            <div className="container item-info">
                <div className="row">
                    <h6 className="pl-3 pt-2">THÔNG TIN SẢN PHẨM</h6>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentItemInfo);
export { connected as ContentItemInfo } 