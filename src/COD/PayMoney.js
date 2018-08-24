import React from "react";
import { connect } from "react-redux";

class PayMoney extends React.Component {
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
            <div className="row"><div className="col-md-4 site-left border"><div className="row pay-method"><h6 className="pl-3 pt-2">CHỌN PHƯƠNG THỨC THANH TOÁN</h6></div><div className="check mt-3 mb-1"><div className="form-check"><label className="form-check-label"><input id="check-cod" type="radio" className="form-check-input" name="optradio" defaultValue="check-cod" />COD</label></div><div className="form-check mb-3"><label className="form-check-label"><input id="check-credit" type="radio" className="form-check-input" name="optradio" defaultValue="check-credit" />Thanh toán qua thẻ tín dụng</label></div></div></div></div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(PayMoney);
export { connected as PayMoney } 