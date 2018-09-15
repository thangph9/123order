import React from "react";
import { connect } from "react-redux";
class RegisterHide extends React.Component {
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

            <div className="register modal fade" id="myRegister">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-12 border-bottom pb-4">
                                        <input className="pl-3 mb-3" type="text" placeholder="Tên đăng nhập" />
                                        <input className="pl-3 mb-3" type="text" placeholder="Số điện thoại" />
                                        <input className="pl-3 mb-3" type="text" placeholder="Nhập email" />
                                        <input className="pl-3 mb-3" type="text" placeholder="Mật khẩu" />
                                        <input className="pl-3 mb-3" type="text" placeholder="Xác nhận mật khẩu" />
                                        <button className="btn dangki">ĐĂNG KÍ</button>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12">
                                        <p>Bằng cách click 'Đăng ký', bạn đã đồng ý với các Điều khoản sử dụng. của chúng tôi, cũng như nhận các email thông báo và quảng cáo từ 123 order. Bạn có thể từ chối nhận email từ 123 order bất cứ khi nào.</p>
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
const connected = connect(mapStateToProps)(RegisterHide);
export { connected as RegisterHide } 