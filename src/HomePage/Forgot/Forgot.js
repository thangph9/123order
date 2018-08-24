import React from "react";
import { connect } from "react-redux";
class Forgot extends React.Component {
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
            <div className="pw modal fade" id="myforgot" style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal body */}
      <div className="modal-body">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-12">
              <p>Vui lòng nhập địa chỉ email tài khoản của bạn. Một mã xác minh sẽ được gửi đến cho bạn. Một khi bạn đã nhận được mã xác minh, bạn sẽ có thể đổi mật khẩu cho tài khoản của mình</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 border-bottom pb-4">
              <input className="pl-3 mb-3" type="text" placeholder="Nhập email" />
              <button className="btn dangki">KHÔI PHỤC MẬT KHẨU</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(Forgot);
export { connected as Forgot } 