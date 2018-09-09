import React from "react";
import { connect } from "react-redux";
class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render(){
        
        return (
            <div className="container-fluid footer-bg">
                <div className="row">
                    <div className="container">
                        <div className="row mt-5 px-2">
                            <div className="container col-lg-3">
                                <div className="row footer-font-nm">
                                    <p>GIỚI THIỆU</p>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Về order 123</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Chính sách bảo mật</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Điều khoản</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Liên Hệ</p></a>
                                </div>
                            </div>
                            <div className="container col-lg-3">
                                <div className="row footer-font-nm">
                                    <p>TRỢ GIÚP KHÁCH HÀNG</p>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Về order 123</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Chính sách bảo mật</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Điều khoản</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Liên Hệ</p></a>
                                </div>
                            </div>
                            <div className="container col-lg-3">
                                <div className="row footer-font-nm"><p>DỊCH VỤ VAS</p></div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Dịch vụ kiểm tra hàng hóa tại Mỹ</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white">
                                        <p>Dịch vụ đóng gói lại</p></a></div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Bảo hiểm vận chuyển</p></a>
                                </div>
                                <div className="row footer-font-sm">
                                    <a href="" className="text-white"><p>Liên Hệ</p></a>
                                </div>
                            </div>
                            <div className="container col-lg-3">
                                <div className="row footer-font-nm"><p>ĐĂNG KÝ NHẬN KHUYẾN MẠI</p></div>
                                <div className="row">
                                    <div className="input-group input-group mb-3">
                                        <input type="text" className="form-control nhap-email" placeholder="Nhập email để nhận HOTDEAL hấp dẫn" aria-label="Tìm sản phẩm, thương hiệu..." aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary search-btn text-white" type="button" id="button-addon2"><i className="fas fa-long-arrow-alt-right" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mt-4">
                                        <img alt="img" src="/img/BoCongThuong.png" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="container mt-4 p-0">
                                        <div className="row">
                                            <div className="col-sm-8 footer-font-nm">
                                                <p>Kết nối với chúng tôi</p>
                                            </div>
                                            <div className="col-sm-4">
                                                <img alt="img" src="/img/Layer 43.png" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row copyright-border mt-4">
                            <div className="col-lg-12 my-2">
                                <p><i className="far fa-copyright" /> 2013 - 2018 123oder . All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connectedFooter=connect(mapStateToProps)(Footer);
export { connectedFooter as Footer } 