import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Form extends React.Component {
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
            <div className="form-group mb-5">
                <input type="text" className="form-control mb-4 mt-5 mx-auto" id="usr" placeholder="Nhập link sản phẩm" />
                <input type="text" className="form-control mb-4 mx-auto" id="usr" placeholder="Nhập số lượng sản phẩm" />
                <input type="text" className="form-control mb-4 mx-auto" id="usr" placeholder="Họ và tên" />
                <input type="text" className="form-control mb-4 mx-auto" id="usr" placeholder="Nhập số điện thoại" />
                <input type="text" className="form-control mb-4 mx-auto" id="usr" placeholder="Nhập email" />
                <textarea className="form-control mx-auto" placeholder="Nội dung" rows={6} id="comment" defaultValue={""} />
                <button type="button" className="btn btn-primary btn-block mx-auto mt-4">BÁO GIÁ</button>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedPrice = connect(mapStateToProps)(Form);
export { connectedPrice as Form } 