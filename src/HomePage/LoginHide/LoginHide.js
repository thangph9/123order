import React from "react";
import { connect } from "react-redux";
class LoginHide extends React.Component {
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
            <div className="login modal fade" id="myLogin" style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal body */}
      <div className="modal-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <button className="btn fb">ĐĂNG NHẬP BẰNG FACEBOOK</button>
            </div>
            <div className="col-md-6">
              <button className="btn gmail">ĐĂNG NHẬP BẰNG GMAIL</button>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-12 d-flex justify-content-center">
              <input style={{width: '30%'}} className="d-flex text-center justify-content-center border-0" type="text" placeholder="HOẶC" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <input className="pl-3 mb-2" type="text" placeholder="Tên đăng nhập" />
              <input className="pl-3" type="text" placeholder="Mật khẩu" />
            </div>
          </div>
          <div className="row mt-3 border-bottom pb-4">
            <div className="col-md-12">
              <button className="btn dangnhap">ĐĂNG NHẬP</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <p>Bạn chưa có tài khoản?<span><a href="">Đăng kí</a></span></p>
            </div>
            <div className="col-md-6 text-right">
              <a id="forgot-pw" data-toggle="modal" data-target="#myforgot" href=""><span>Quên mật khẩu?</span></a>
            </div>
          </div>
        </div>
      </div>
      {/* Modal footer */}
    </div>
  </div>
</div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(LoginHide);
export { connected as LoginHide } 