import React from "react";
import { connect } from "react-redux";
class ContentDealTitleBestSeller extends React.Component {
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
            <div className="row bg-white justify-content-center px-3 mb-2">
                <span className="deal-header">BEST SELLER</span>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDealTitleBestSeller);
export { connected as ContentDealTitleBestSeller } 