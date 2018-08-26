import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderTopRightMuaHo extends React.Component {
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
            <li className="nav-item dropdown" id="menuMuaHo">
                <a className="nav-link dropdown-toggle dropdown-arrow text-white" href="" id="navbarDropdownMenuLinkMuaHo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MUA HỘ</a>
                <div className="container p-2 dropdown-menu mua-ho-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkMuaHo" >
                    <div className="row">
                        <div className="col-md-8 my-2 container">
                            <div className="row">
                                <img src="img/mua-ho.png" alt="img" className="img-fluid col-12 active" />
                            </div>
                            <div className="row mt-2 justify-content-center">
                                <a href=""><img src="img/bao-gia-btn.png" alt="img" className="img-fluid" /></a>
                            </div>
                        </div>
                        <div className="col-md-4 container p-4">
                            <div className="row">
                                <span className="mua-ho-title">DỊCH VỤ MUA HỘ</span>
                            </div>
                            <div className="row mt-2">
                                <span className="mua-ho-subtittle">NHANH HƠN - RẺ HƠN - AN TOÀN HƠN</span>
                                <ul className="mt-2">
                                    <li className="mua-ho-li">
                                        <span>Vận chuyển rẻ, chỉ 14 ngày</span>
                                    </li>
                                    <li className="mua-ho-li">
                                        <span>Miễn thủ tục hải quan</span>
                                    </li>
                                    <li className="mua-ho-li">
                                        <span>Bảo hiểm rủi ro hàng hóa</span>
                                    </li>
                                    <li className="mua-ho-li">
                                        <span>Mua bất cứ site nào và Không cần dùng tới tài khoản Paypal, thẻ tín dụng</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* end menu 2 dropdown  */}
                </div>

            </li>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderTopRightMuaHo);
export { connected as HeaderTopRightMuaHo } 