import React from "react";
import { connect } from "react-redux";
class ContentRightDetail extends React.Component {
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
        var { loadDetail} = this.props;
        return (
            <section id="product-detail-block-v2" className="product-detail-block-v2 ">
                <div className="blur-bg" />
                <div className="block-col-1" style={{ fontSize: 14 }}>
                    <div className="alert-segment">
                    </div>
                    <div className="price-segment">
                        <div className="segment-head">
                            <a data-ttip="Dành cho người mua cá nhân.<br/>Giá đã bao gồm tất cả các loại thuế phí." className="segment-title ttip is-active" href="javascript:;" data-hasqtip={0}>Nhập khẩu DDP</a>
                            <span className="segment-title" />
                        </div>
                        <div className="segment-main">
                            <div className="price-type-col-wrap">
                                <div className="price-type-col">
                                    <div className="price-panel">
                                        <div className="info-item">
                                            <div className="lbl-col">Giá bán tại Việt Nam <i className="fa fa-question-circle ttip guide-icon" aria-hidden="true" data-ttip="Giá trọn gói: bao gồm tất cả loại thuế phí,<br/>không phát sinh phụ phí" data-hasqtip={1} aria-describedby="qtip-2" /></div>
                                            <div className="info-col">
                                                <div id="currPrice" className="curr-price">{(loadDetail[0]!=undefined) &&loadDetail[0].price}</div>
                                            </div>
                                        </div>
                                        <div className="info-item sub-item">
                                            <div className="lbl-col">Tiết kiệm:</div>
                                            <div className="info-col text-nowrap">
                                                <span className={(loadDetail[0].save_price!=undefined&&loadDetail[0].save_price=='')?'none-hide':'sale-percent'}>{(loadDetail[0]!=undefined&&loadDetail[0].save_price!='') ?loadDetail[0].save_price:''}</span>
                                                
                                            </div>
                                        </div>
                                        <div className="info-item sub-item">
                                            <div className="lbl-col">Giá chưa giảm:</div>
                                            <div className="info-col">
                                                <span id="oldPrice" className="old-price line-through">{(loadDetail[0]!=undefined) &&loadDetail[0].base_price}</span>
                                            </div>
                                        </div>
                                    </div>{/* .price-panel */}
                                </div>
                                <div className="login-col">
                                    <div className="login-panel">
                                        <a className="login-btn btn btn-xs btn-grd-border btn-pill" href="https://fado.vn/dang-nhap?r=https:%2F%2Ffado.vn%2Fde%2Ftablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html%3Fdeal=list&m=A3AJ0GNLXXLZX8"><div className="btn-inner">Đăng nhập <i className="svg svg-arrow-right-black svg-14px" /></div></a>
                                        <div>Để nhận giá ưu đãi cho thành viên</div>
                                    </div>{/* .login-panel */}
                                </div>{/* .login-col */}
                            </div>
                        </div>{/* .segment-main */}
                    </div>{/* .price-segment */}
                    <div className="other-info-segment">
                        <div className="segment-main">
                            <div className="info-panel compare-panel">
                                <div className="panel-head">
                                    <div className="icon-col"><i className="svg svg-compare-grd svg-24px" /></div>
                                    <div className="title-col" style={{ fontSize: 14 }}>
                                        Quý Khách muốn so sánh giá với sản phẩm khác
                  </div>
                                    <div className="control-col">
                                        <div className="btn btn-pill btn-grd-border btn-xs compare-btn compare ">
                                            <div className="btn-inner"><i className="svg svg-plus-black svg-16px" /> Thêm vào so sánh</div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* .compare-panel */}
                        </div>{/* .segment-main */}
                    </div>{/* .other-info-segment */}
                    <div className="desc-segment">
                        <div className="segment-main">
                            <div className="param-list-outer">
                                <ul className="param-list">
                                    <li>Product Dimensions: 14 x 15 x 12 cm; 204 g</li>
                                    <li>Shipping Weight: 358 g</li>
                                    <li>ASIN: B01N05W4A2</li>
                                </ul>
                            </div>{/* .param-list-outer */}
                            <div className="btn-wrap">
                                <a className="view-more-btn btn btn-pill btn-xxs btn-grd-border" href="#thong-so-tab"><div className="btn-inner">Xem thêm thông số <i className="svg svg-arrow-bottom-black svg-12px ml-5px" /></div></a>
                            </div>
                        </div>
                    </div>{/* .desc-segment */}
                    <div className="option-segment">
                        <div className="option-panel pick-panel size-panel pd-choose">
                            <div className="lbl-col">Farbe:</div>
                            <div className="info-col">
                                <select defaultValue={"Silber"} style={{ fontSize: 14, padding: '0px 0px 0px 10px' }} className="size-sel form-control">
                                    <option value="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B07HXYQXQ3.html?deal=list&m=A3AJ0GNLXXLZX8&keywords=">
                                        ALL                                                              </option>
                                    <option value="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B072MZM8G8.html?deal=list&m=A3AJ0GNLXXLZX8&keywords=">
                                        Grau                                                              </option>
                                    <option value="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B07BS8YM9B.html?deal=list&m=A3AJ0GNLXXLZX8&keywords=">
                                        Rose Gold                                                              </option>
                                    <option value="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html?deal=list&m=A3AJ0GNLXXLZX8&keywords=">
                                        Silber                                                              </option>
                                </select>
                            </div>
                        </div>{/* .option-panel */}
                    </div>{/* .option-segment */}
                    <div className="quantity-segment">
                        <div className="segment-main">
                            Số lượng sản phẩm còn lại trong kho người bán: <b>2,446 sản phẩm</b>
                        </div>
                    </div>{/* .quantity-segment */}
                    <div className="cart-segment">
                        <div id="sticky-wrapper" className="sticky-wrapper" style={{ height: 40 }}><div className="segment-main" style={{ width: 572 }}>
                            <div className="main-inner">
                                <div className="control-col quantity-col">
                                    <div className="pd-quantity-control">
                                        <input type="text" className="quantity-input quantity-input-fix" defaultValue={1} min={1} />
                                        <div className="control-btn plus-btn">+</div>
                                        <div className="control-btn minus-btn is-disabled">-</div>
                                    </div>{/* .quantity-control */}
                                </div>
                                <div className="control-col buy-now-col">
                                    <button style={{ color: '#fff', height: 40, fontSize: 16 }} id="bt-buy-now" className="buy-now-btn btn btn-pill btn-grd-bg btn-inner btn-grd-border" data-product_quantity="$('.quantity-input').val()" data-product_id="B01N05W4A2" data-product_sku="B01N05W4A2" data-product_price="672084.22" data-product_brand="Lamicall" data-product_cat data-key_cart="B01N05W4A2-A3AJ0GNLXXLZX8" data-product_name="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber">
                                        <i className="fa fa-refresh fa-spin isloadingBuyNow" style={{ top: 0, display: 'none' }} />&nbsp; Mua ngay kẻo lỡ <i className="svg svg-arrow-right-white svg-18px ml-2px iconBuyNow" />
                                    </button>
                                </div>
                                <div className="control-col add-cart-col">
                                    <button id="bt-add-to-cart" className="add-cart-btn btn btn-pill btn-grd-border" data-product_quantity="$('.quantity-input').val()" data-product_id="B01N05W4A2" data-product_sku="B01N05W4A2" data-product_price="672084.22" data-product_brand="Lamicall" data-product_cat data-product_name="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber">
                                        <div className="btn-inner" style={{ height: 36, fontSize: 16 }}>
                                            <i className="svg svg-plus-black svg-18px" />&nbsp;  Thêm vào giỏ hàng
                      </div>
                                    </button>
                                </div>
                            </div>
                        </div></div>{/* .segment-main */}
                    </div>{/* .cart-segment*/}
                    {/* .cart-segment */}
                    <div className="faq-segment">
                        <div className="faq-list">
                            <li><a href="/ho-tro/huong-dan-dat-mua-hang-cach-dat-mua-hang.n37/?utm_source=onsite&utm_medium=link&utm_campaign=LinkProduct" target="_blank">Hướng dẫn đặt hàng?</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#feature-service-modal">Chính sách đổi trả xuyên biên giới ?</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#order-timeline-modal">Quy trình đặt hàng ?</a></li>
                        </div>
                    </div>{/* .faq-segment */}
                </div>{/* .block-col-1 */}
                <div className="block-col-2">
                    <div className="feature-segment">
                        <div className="segment-head">Duy nhất tại<br />Fado Việt Nam</div>
                        <div className="segment-main">
                            <ul className="feature-list" style={{ padding: 0, fontSize: 14 }}>
                                <li>
                                    <i className="svg svg-check-circle-grd svg-14px" />
                                    <b>Yên tâm mua sắm</b><br />
                                    Fado đảm bảo giao dịch, hỗ trợ khiếu nại đổi, trả xuyên biên giới dễ dàng, bảo vệ người mua tuyệt đối
                </li>
                                <li>
                                    <i className="svg svg-check-circle-grd svg-14px" />
                                    <b>Không lo thủ tục</b><br />
                                    Fado thông quan, chuyển hàng tới tận tay...Quý khách chỉ việc ngồi nhà tận hưởng
                </li>
                                <li>
                                    <i className="svg svg-check-circle-grd svg-14px" />
                                    <b>Không giới hạn lựa chọn</b><br />
                                    &gt; 4 tỷ sản phẩm chất lượng từ khắp thế giới được Fado cập nhật realtime, giúp Quý khách mua được giá hời, giá rẻ.
                </li>
                                <li>
                                    <i className="svg svg-check-circle-grd svg-14px" />Tận hưởng giá shock toàn cầu<br />
                                    Black Friday, Cyber Monday, Daily deals, Clear stock từ Amazon, và từ các website chính hãng.
                </li>
                                <li>
                                    <i className="svg svg-check-circle-grd svg-14px" />
                                    <b>Tiết kiệm thêm, ưu đãi thêm</b><br />
                                    Nhận thêm ưu đãi từ Fado (điểm thưởng, mã giảm giá...) và Fado luôn miễn phí giao hàng toàn quốc
                </li>
                                <li>
                                    <i className="svg svg-check-circle-grd svg-14px" />
                                    <b>Thông minh và tiện lợi</b><br />
                                    Hàng từ đâu? Uy tín người bán? thông báo khi sản phẩm giảm giá? Mua hàng nước ngoài thanh toán tiền Việt...
                </li>
                            </ul>
                        </div>
                    </div>{/* .feature-segment */}
                    <div className="support-segment">
                        <div className="segment-head">Quý khách cần trợ giúp</div>
                        <div className="segment-main">
                            <form className="support-form">
                                <input type="text" className="phone-input phone-txt" name="phone" placeholder="Để lại số điện thoại, Fado sẽ liên lạc" />
                                <button className="submit-btn" type="button" id="bt-recall"><i className="svg svg-send-grd svg-16px" /></button>
                            </form>
                            <div className="info-item-wrap">
                                <div className="info-item">
                                    <a href="tel:1900 545 403"><i style={{ padding: 0 }} className="svg svg-phone-grd svg-18px" /> 1900 545 403</a>
                                </div>
                                <div className="info-item mail-item">
                                    <a href="mailto:support@fado.vn"><i style={{ marginRight: 0 }} className="svg svg-mail-grd svg-18px" /> support@fado.vn</a>
                                </div>
                            </div>
                        </div>
                    </div>{/* .support-segment */}              </div>{/* .block-col-2 */}
            </section>
        )

    }
}
function mapStateToProps(state) {

    return {
        mouseClickLink: state.mouseClickLinkProductItem,
        loadDetail: state.initLoadProductDetailAmazon,
    }
}
const connectedContent = connect(mapStateToProps)(ContentRightDetail);
export { connectedContent as ContentRightDetail } 