import React from "react";
import { connect } from "react-redux";
import './usexpressreal2.css'
import './usexpressreal3.css'
class Content extends React.Component {
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
            <div style={{ marginTop: '20px' }} >
                <section id="main_container" className="width_100 page_folder sticky">
                    <div className="container">
                        <div className="menu_control mb10">
                            <div className="container">
                                <ul className="breadcrumb">
                                    <li><a href="/">Trang chủ</a></li>
                                    <li><a href="/costco/store">costco</a></li>
                                    <li className="active" />
                                </ul>
                            </div>
                        </div>
                        <div className="product-info mb20">
                            <div className="row">
                                <div className="col-md-4 col-sm-5 col-xs-12 col-tn-12">
                                    <div className="PD_Media" style={{ minHeight: 340 }}>
                                        <div className="slider-avatar">
                                            <div className="slider owl-carousel owl-theme owl-loaded owl-drag">
                                                <div className="owl-stage-outer">
                                                    <div className="owl-stage" style={{ transform: 'translate3d(-1835px, 0px, 0px)', transition: 'all 0s ease 0s', width: 2202 }}>
                                                        <div className="owl-item" style={{ width: 367 }}>
                                                            <div className="item">
                                                                <a href="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia swipebox">
                                                                    <img src="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="owl-item" style={{ width: 367 }}>
                                                            <div className="item">
                                                                <a href="https://st.usexpress.vn/Images/rignho3s107201823359_2_374.267e8762-4566-414b-84bf-57088ad5711b.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia swipebox">
                                                                    <img src="https://st.usexpress.vn/Images/rignho3s107201823359_2_374.267e8762-4566-414b-84bf-57088ad5711b.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="owl-item" style={{ width: 367 }}>
                                                            <div className="item">
                                                                <a href="https://st.usexpress.vn/Images/0uu5b3s4107201823359_3_374.d238eb03-1afe-4275-a8c0-25e3feb01b62.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia swipebox">
                                                                    <img src="https://st.usexpress.vn/Images/0uu5b3s4107201823359_3_374.d238eb03-1afe-4275-a8c0-25e3feb01b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="owl-item" style={{ width: 367 }}>
                                                            <div className="item">
                                                                <a href="https://st.usexpress.vn/Images/aychoasm107201823359_4_374.841df475-ef9e-4a2f-8ae3-967ee12123fa.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia swipebox">
                                                                    <img src="https://st.usexpress.vn/Images/aychoasm107201823359_4_374.841df475-ef9e-4a2f-8ae3-967ee12123fa.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="owl-item" style={{ width: 367 }}>
                                                            <div className="item">
                                                                <a href="https://st.usexpress.vn/Images/4wssht5w107201823359_5_374.826fac2b-ce1a-48fd-97b0-9eacbf8eae63.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia swipebox">
                                                                    <img src="https://st.usexpress.vn/Images/4wssht5w107201823359_5_374.826fac2b-ce1a-48fd-97b0-9eacbf8eae63.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="owl-item active" style={{ width: 367 }}>
                                                            <div className="item">
                                                                <a href="https://st.usexpress.vn/Images/5v2gltbh107201823359_6_374.d2a548ae-d6d3-4c1b-bbd9-a8a2b7a6eb55.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia swipebox">
                                                                    <img src="https://st.usexpress.vn/Images/5v2gltbh107201823359_6_374.d2a548ae-d6d3-4c1b-bbd9-a8a2b7a6eb55.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="owl-dots">
                                                    <div className="owl-dot"><span /></div>
                                                    <div className="owl-dot"><span /></div>
                                                    <div className="owl-dot"><span /></div>
                                                    <div className="owl-dot"><span /></div>
                                                    <div className="owl-dot"><span /></div>
                                                    <div className="owl-dot active"><span /></div>
                                                </div>
                                            </div>
                                            <div className="slider-avatar-thumb">
                                                <div className="slider-thumb owl-carousel owl-theme owl-loaded owl-drag">
                                                    <div className="owl-stage-outer">
                                                        <div className="owl-stage" style={{ transform: 'translate3d(-183px, 0px, 0px)', transition: 'all 0s ease 0s', width: 551 }}>
                                                            <div className="owl-item" style={{ width: '91.75px' }}>
                                                                <div className="item">
                                                                    <a href="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                                                                        <img src="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item" style={{ width: '91.75px' }}>
                                                                <div className="item">
                                                                    <a href="https://st.usexpress.vn/Images/rignho3s107201823359_2_374.267e8762-4566-414b-84bf-57088ad5711b.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                                                                        <img src="https://st.usexpress.vn/Images/rignho3s107201823359_2_374.267e8762-4566-414b-84bf-57088ad5711b.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{ width: '91.75px' }}>
                                                                <div className="item">
                                                                    <a href="https://st.usexpress.vn/Images/0uu5b3s4107201823359_3_374.d238eb03-1afe-4275-a8c0-25e3feb01b62.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                                                                        <img src="https://st.usexpress.vn/Images/0uu5b3s4107201823359_3_374.d238eb03-1afe-4275-a8c0-25e3feb01b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{ width: '91.75px' }}>
                                                                <div className="item">
                                                                    <a href="https://st.usexpress.vn/Images/aychoasm107201823359_4_374.841df475-ef9e-4a2f-8ae3-967ee12123fa.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                                                                        <img src="https://st.usexpress.vn/Images/aychoasm107201823359_4_374.841df475-ef9e-4a2f-8ae3-967ee12123fa.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item active" style={{ width: '91.75px' }}>
                                                                <div className="item">
                                                                    <a href="https://st.usexpress.vn/Images/4wssht5w107201823359_5_374.826fac2b-ce1a-48fd-97b0-9eacbf8eae63.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                                                                        <img src="https://st.usexpress.vn/Images/4wssht5w107201823359_5_374.826fac2b-ce1a-48fd-97b0-9eacbf8eae63.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="owl-item selected active" style={{ width: '91.75px' }}>
                                                                <div className="item">
                                                                    <a href="https://st.usexpress.vn/Images/5v2gltbh107201823359_6_374.d2a548ae-d6d3-4c1b-bbd9-a8a2b7a6eb55.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                                                                        <img src="https://st.usexpress.vn/Images/5v2gltbh107201823359_6_374.d2a548ae-d6d3-4c1b-bbd9-a8a2b7a6eb55.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="owl-dots">
                                                        <div className="owl-dot"><span /></div>
                                                        <div className="owl-dot active"><span /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content col-md-8 col-sm-7 col-xs-12 col-tn-12">
                                    <div className="tt_sp_chitiet">
                                        <div className="ten_sanpham row col-lg-12 col-md-12 no-gutter-right">
                                            <h1>Ubio Labs Lightning Cable Charging Kit</h1>
                                        </div>
                                        <div className="col-lg-8 col-md-8 no-gutter col-sm-12" style={{ width: 502 }}>
                                            <div className="col-lg-12 col-md-12 no-gutter">
                                                <div className="binhluan_dgia pull-left col-sm-12 col-xs-12 col-md-5 col-lg-5 no-gutter">
                                                    <div className="start pull-left">
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star" />
                                                        <i className="fa fa-star-half-o" />
                                                    </div>
                                                    <span> Chưa có  đánh giá</span>
                                                </div>
                                                <div className="tt_nguoiban">
                                                    Người bán: <strong>Ubio Labs</strong>
                                                </div>
                                            </div>
                                            <div className="block_ttsp">
                                                <ul>
                                                    <li>
                                                        <label>Giá sản phẩm trên costco:</label>
                                                        <span>
                                                            $22.99
                    </span>
                                                    </li>
                                                    <li>
                                                        <label>Phí mua hộ từ US Express:</label>
                                                        <span>
                                                            $8
                      <a data-toggle="collapse" data-target="#cl_chitietphi">(Xem chi tiết)</a>
                                                        </span>
                                                        <div id="cl_chitietphi" className="collapse cl_chitietphi">
                                                            <table className="table segment-main">
                                                                <thead>
                                                                    <tr>
                                                                        <th colSpan={2}>Chi tiết bảng giá phí mua hộ</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            Phí xử lý sản phẩm
                            </td>
                                                                        <td>$3</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            Phí theo cân nặng (Pound)
                            </td>
                                                                        <td>$5</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <label>Tổng giá (đã bao gồm thuế, phí): </label>
                                                        <span>$30.99</span>
                                                    </li>
                                                    <li>
                                                        <label>Tổng giá bằng VNĐ (đã bao gồm thuế, phí): </label>
                                                        <span className="tong_gia_vnd"><strong className="price-vnd-last">742,985 đ</strong></span>
                                                    </li>
                                                </ul>
                                                <span>Giá trên là giá cuối cùng, bạn không cần trả thêm bất kỳ khoản phí nào khác</span>
                                            </div>
                                            <div className="block_tk_tinhtrangbansp">
                                                <div className="tinhtrang_sp">
                                                    <span className="time_today">Hôm nay:</span>
                                                    <div className="sl_con pull-left">Số lượng còn (30)</div>
                                                    <div className="sl_daban pull-right">Đã bán(0)</div>
                                                </div>
                                                <div className="progress tientrinh_bansp">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                                                    </div>
                                                </div>
                                                <div className="tieuchi_banhang">
                                                    <ul>
                                                        <li>Chi phí minh bạch</li>
                                                        <li>Giao hàng từ 5 - 12 ngày</li>
                                                        <li>Hàng hóa được đảm bảo</li>
                                                        <li>Mua càng nhiều, tiết kiệm càng nhiều</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="soluong_sp">
                                                <label htmlFor className="col-lg-2 no-gutter">Số lượng: </label>
                                                <div className="range_giatri col-lg-10 no-gutter-right">
                                                    <div>
                                                        <div className="input-group-prepend down-quantity">
                                                            <button className="giam_sl" id="minus-btn" />
                                                        </div>
                                                        <input type="text" id="txtQuantity" className="qty_input input_num_qty" defaultValue={1} min={1} onfocus="SetFormatNumber(this,false)" />
                                                        <div className="input-group-prepend up-quantity">
                                                            <button className="tang_sl" id="plus-btn" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="action_dathang col-lg-12 col-md-12 col-sm-12 col-xs-12 no-gutter">
                                                <div className="tt_ngay col-md-6 col-sm-6 col-xs-6 no-gutter-left btnBuyProduct cur" data-store={2}>
                                                    <a><span>Thanh toán ngay</span></a>
                                                </div>
                                                <div className="them_giohang col-md-6 col-sm-6 col-xs-6 no-gutter-right">
                                                    <a className="btn-addtocart cur"><span>Thêm vào giỏ hàng</span></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 no-gutter-right bl_kiemhang_us" style={{ position: 'absolute', top: 44, left: 515 }}>
                                            <div className="block_ttthanhtoan_chitiet" style={{ width: 241 }}>
                                                <ul>
                                                    <li>
                                                        <h6>CHẤP NHẬN THANH TOÁN</h6>
                                                        <div>
                                                            <label htmlFor>Thẻ thanh toán nội địa</label>
                                                            <span><img width={18} height={18} src="/Media_Master/images/thett_1.svg" alt="img" /></span>
                                                        </div>
                                                        <div className="the_thtoan">
                                                            <label htmlFor>Thẻ Visa/Master/JCB</label>
                                                            <span><img width={18} height={18} src="/Media_Master/images/thett_2.svg" alt="img" /></span>
                                                            <span><img width={18} height={18} src="/Media_Master/images/thett_3.svg" alt="img" /></span>
                                                            <span><img width={18} height={18} src="/Media_Master/images/thett_4.svg" alt="img" /></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6>HỆ THỐNG TỰ ĐỘNG</h6>
                                                        <div>
                                                            <label htmlFor>Xử lý đơn hàng với costco</label>                                                 <span><img width={20} height={13} src="/Media_Master/images/muahang_1.svg" alt /></span>
                                                        </div>
                                                        <div>
                                                            <label htmlFor>Thông báo tình trạng đơn hàng</label>
                                                            <span><img width={18} height={18} src="/Media_Master/images/muahang_2.svg" alt="img" /></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <h6>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</h6>
                                                        <div>
                                                            <label htmlFor>Nhận hàng trong vòng 2 tuần nếu thanh toán ngay hôm nay</label>
                                                            <span><img width={19} height={19} src="/Media_Master/images/muahang_3.svg" alt="img" /></span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="info mt20 width_100 col-sm-12 col-xs-12">
                                    <div className="tab_product">
                                        <a href="#detail" className="active">Chi tiết sản phẩm</a>
                                        <a href="#info">Thông số kỹ thuật</a>
                                    </div>
                                    <div className="tab_container">
                                        <div className="tab_content" id="detail">
                                            <div id="product-tab1-espotdetails">
                                                {/*{cke_protected}{C}%3C!%2D%2D%20BEGIN%20ContentAreaESpot.jsp%20%2D%2D%3E*/}{/*{cke_protected}{C}%3C!%2D%2D%20END%20ContentAreaESpot.jsp%20%2D%2D%3E*/}
                                            </div>
                                            <div className="product-info-description">
                                                {/*{cke_protected}{C}%3C!%2D%2D%20DO%20NOT%20REMOVE%20THIS%20%2D%2D%3E*/}
                                                <div id="SP_ProductImage">
                                                    <div id="sp_popup_product"><br /></div>
                                                </div>
                                                <div id="sp_inline_product">
                                                    <div id="sp_widget_7Gz9E9DY_2_css_listener"><br /></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* #tab1 */}
                                        <div className="tab_content" id="info" style={{ display: 'none' }}>
                                            <div className="param-panel">
                                                <div className="info-cell">
                                                    <div className="cell-inner">Features:
                                                      Two 6' Apple Certified Lightning Cables with Silicone Cable Ties
                                                      4.8A Dual USB Wall Charger with LED Charge Indicators
                                                      4.8A Dual USB Car Charger
                  </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* #tab2 */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box_product_recent">
                        </div>
                    </div>
                </section>

            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(Content);
export { connectedContent as Content } 