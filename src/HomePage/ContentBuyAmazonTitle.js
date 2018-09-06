import React from "react";
import { connect } from "react-redux";
class ContentBuyAmazonTitle extends React.Component {
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
            <div className="row bg-white justify-content-center px-3"> <span className="deal-header">MUA HÀNG AMAZON</span> </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBuyAmazonTitle);
export { connected as ContentBuyAmazonTitle } 