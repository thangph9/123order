import React from "react";
import { connect } from "react-redux";
class ContentDealSeeMore extends React.Component {
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
            <div className="row justify-content-center my-4">
                <div className="col-4">
                    <button className="btn btn-block deal-btn">Xem thêm</button>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDealSeeMore);
export { connected as ContentDealSeeMore } 