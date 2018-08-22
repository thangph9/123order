import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentChangePrice extends React.Component {
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
            <div className="container change-price mb-4 pt-1">
                <div className="row">
                    <div className="col-md-9">
                        <h6 className="pl-3 pt-2">BIẾN ĐỘNG GIÁ</h6>
                    </div>
                    <div className="col-md-3 border d-flex justify-content-end">
                        <i className="far fa-bell pt-2 mx-auto">Thông báo khi có giảm giá</i>
                    </div>
                </div>
            </div>


        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentChangePrice);
export { connected as ContentChangePrice } 