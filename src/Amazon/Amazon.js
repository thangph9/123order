import React from "react";
import { connect } from "react-redux";
import '../Sections/style.css';
import { Link } from 'react-router-dom';
class Amazon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentWillMount() {
    document.documentElement.scrollTop = 0
  }
  handleClick(){
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <main className="app__body___3NlTJ" data-reactroot>
        <div>
          <div>
            <div className="loading-bar" style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center 0px', transition: 'transform 800ms linear 0s', width: '100%', willChange: 'transform, opacity', position: 'fixed', zIndex: 10002, backgroundColor: 'rgb(14, 192, 232)', height: 3 }} />
            <div style={{ display: 'table', clear: 'both' }} />
          </div>
          <div className="default-layout__container___13v1V default__defaultLayout___3nBIn false">
            <div className="backdrop__body-backdrop___1rvky  " />
            <div className="header__header___1t3MH false">
              <nav className="header__my-navbar___2Cghd header__navbar-toggleable-sm___pR4tF header__nav-header___3lWCb">
                <div className="container__container___1fvX0 header__container___2d-Oi">
                  <div className="hidden-md-up header__my-navbar-toggler___2PiaS"><button className="header__btn-icon___17D-i" type="button"><i className="ic-ic-user" /></button></div>
                  <Link to={`/home`} className="header__navbar-brand___SzzgD"><img style={{ position: 'relative', top: '4px' }} src="/img/logo123order.png" /></Link>
                  <div className="clearfix collapse header__navbar-collapse___2AK1h">
                    <Link to={`/home`} className="hidden-md-up header__navbar-brand___SzzgD"><img src="/img/logo123order.png" /></Link>
                    <ul className="hidden-md-down header__navbar-nav___9cfBy header__navbar-left___25OFe">
                      <li className="header__nav-item___MQLXP"><Link to={`/amazon`} className="header__nav-link___3W4sc ">Amazon</Link></li>
                      <li className="header__nav-item___MQLXP"><Link to={`/ebay`} className="header__nav-link___3W4sc ">Ebay</Link></li>
                      <li className="header__nav-item___MQLXP"><Link to={`/adidas`} className="header__nav-link___3W4sc ">Adidas</Link></li>
                      <li className="header__nav-item___MQLXP"><Link to={`/nike`} className="header__nav-link___3W4sc ">Nike</Link></li>
                    </ul>
                    <ul className="header__navbar-nav___9cfBy header__navbar-right___2_zf5">
                      <li className="header__nav-item___MQLXP">
                        <div className="undefined language-dropdown__dropdown____KQAB language-dropdown__dropdown-section___2Exp9 ">
                          <a className="text-uppercase language-dropdown__nav-link___2sOBe language-dropdown__dropdown-toggle___3DM4H" href="javascript:void(0)">vn</a>
                          <ul className="language-dropdown__dropdown-menu___2iFhf">
                            <li className="language-dropdown__active___23oVE"><a className="language-dropdown__dropdown-item___3bDVi" href="javascript:void(0)">Tiếng Việt (vn)</a></li>
                            <li className><a className="language-dropdown__dropdown-item___3bDVi" href="javascript:void(0)">English (en)</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="header__nav-item___MQLXP">
                        <div className="auth-buttons__auth___33bfZ"><a className="auth-buttons__nav-link___1DCMU auth-buttons__btn-sign-in___1nV-O" href="/auth/signin?redirect=/Women">Đăng nhập</a><a className="auth-buttons__nav-link___1DCMU auth-buttons__btn-register___3sIO1" href="/auth/register">Tạo tài khoản</a></div>
                      </li>
                    </ul>
                  </div>
                  <button className="header__cart-icon___38YSW cart-button__btn-cart___2KPCq" type="button"><i className="ic-ic-bag cart-button__icon___3QHeM" /></button>
                </div>
              </nav>
              <nav className="hidden-lg-up header__mobile-nav-cat-container___2JTtk" id="cate-mobile-root">
                <div className="container__container___1fvX0 header__padding-remove___uM9bo">
                  <ul className="header__mobile-nav-cat___1wJ9O">
                    <li className="header__nav-item___MQLXP"><Link to={`/amazon`} className="header__nav-link___3W4sc ">Amazon</Link></li>
                    <li className="header__nav-item___MQLXP"><Link to={`/ebay`} className="header__nav-link___3W4sc " >Ebay</Link></li>
                    <li className="header__nav-item___MQLXP"><Link to={`/adidas`} className="header__nav-link___3W4sc " >Adidas</Link></li>
                    <li className="header__nav-item___MQLXP"><Link to={`/nike`} className="header__nav-link___3W4sc " >Nike</Link></li>
                  </ul>
                </div>
              </nav>
              <div />
            </div>
            <div className="container__container___1fvX0 default__container___1TdpD">
              <div className="row__row___2roCA ">
                <div className="first-sale-tile__first-sale-container___12AH9">
                  <a className="hidden-md-down first-sale-tile__first-sale-desktop___3DYvl" href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23">
                    <div className="row__row___2roCA ">
                      <div className="first-sale-tile__col-lg-9___2uu-j first-sale-tile__image-container___VGe3q"><img id className src="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad591afd2a6680da62d6e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad591afd2a6680da62d6e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw" alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc" /></div>
                      <div className="first-sale-tile__col-lg-3___2ZXJG first-sale-tile__text-container___3Kt7T">
                        <h2 className="first-sale-tile__title___2Dutp">Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc</h2>
                        <span className="first-sale-tile__time-wrap___3v0IL"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span><button className="first-sale-tile__btn___2kqdj first-sale-tile__btn-primary___2YFp4 first-sale-tile__btnSeeMore___2a8MB">Xem chi tiết</button>
                      </div>
                    </div>
                  </a>
                  <a className="hidden-lg-up cate-first-sale first-sale-tile__col-md-6___86-SM first-sale-tile__padding-remove___lzvjK first-sale-tile__sale-card-container___3zr_W" href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23">
                    <div className="sale-card__currentSale___cC1H3">
                      <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
                      <div className="sale-card__image-wrapper___EfOla">
                      <img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad591afd2a6680da62d6e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad591afd2a6680da62d6e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc" />
                      </div>
                      <div className="sale-card__currentSaleInfo___2LkMa">
                        <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc</div>
                        <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                      </div>
                    </div>
                  </a>
                </div>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/nanas-wonderland-windmill-nutritionworks...-5bd98f1f6ada6d0bdd52fc2f">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdadd62c6b3c5db940a2338.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdadd62c6b3c5db940a2338.jpg 640w, https://images.leflair.vn/w1080/q85/5bdadd62c6b3c5db940a2338.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdadd62c6b3c5db940a2338.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Nana's Wonderland, Windmill, NutritionWorks..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Nana's Wonderland, Windmill, NutritionWorks...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/j-natural-stonesr-trang-suc-phong-thuy-5bd6c4d93bc9335db599c3b6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bda9a0a02c08ed3c471bbbb.jpg" srcSet="https://images.leflair.vn/w640/q85/5bda9a0a02c08ed3c471bbbb.jpg 640w, https://images.leflair.vn/w1080/q85/5bda9a0a02c08ed3c471bbbb.jpg 1080w, https://images.leflair.vn/w1440/q85/5bda9a0a02c08ed3c471bbbb.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="J Natural Stones® Trang Sức Phong Thủy" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">J Natural Stones® Trang Sức Phong Thủy</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/efora-gino-rossi-pons...-5bcea2bad56ec80001043c3c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bda6f73b4993262c32b3139.jpg" srcSet="https://images.leflair.vn/w640/q85/5bda6f73b4993262c32b3139.jpg 640w, https://images.leflair.vn/w1080/q85/5bda6f73b4993262c32b3139.jpg 1080w, https://images.leflair.vn/w1440/q85/5bda6f73b4993262c32b3139.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Efora, Gino Rossi, Pons,..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Efora, Gino Rossi, Pons,...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-59-titan-dong-ho-nam-and-nu-5bd6b7d673d283403ee0baf7">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd98c29606224cfc81c18a6.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd98c29606224cfc81c18a6.jpg 640w, https://images.leflair.vn/w1080/q85/5bd98c29606224cfc81c18a6.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd98c29606224cfc81c18a6.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 59% - Titan Đồng Hồ Nam & Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 59% - Titan Đồng Hồ Nam &amp; Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-65-people-giay-sneaker-nam-and-nu-5bd6b70473d28376e4e0baf3">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd923924029356ac249465d.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd923924029356ac249465d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd923924029356ac249465d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd923924029356ac249465d.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 65% - People Giày Sneaker Nam & Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 65% - People Giày Sneaker Nam &amp; Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-59-viviane-trang-phuc-lot-nu-5bd6983a73d2835a4fe0b681">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bda6841b499321b542b3126.jpg" srcSet="https://images.leflair.vn/w640/q85/5bda6841b499321b542b3126.jpg 640w, https://images.leflair.vn/w1080/q85/5bda6841b499321b542b3126.jpg 1080w, https://images.leflair.vn/w1440/q85/5bda6841b499321b542b3126.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 59% - Viviane Trang Phục Lót Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 59% - Viviane Trang Phục Lót Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/sexy-look-mat-na-cham-soc-da-5bd6d85caea2cb65c76b19c7">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd91a97811d28cf3c040a27.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd91a97811d28cf3c040a27.jpg 640w, https://images.leflair.vn/w1080/q85/5bd91a97811d28cf3c040a27.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd91a97811d28cf3c040a27.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Sexy Look Mặt Nạ Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Sexy Look Mặt Nạ Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/venica-tui-xach-thoi-trang-nu-5bd6b77c73d2832f7fe0baf6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bda6cb9a72e8d16f6cebf98.jpg" srcSet="https://images.leflair.vn/w640/q85/5bda6cb9a72e8d16f6cebf98.jpg 640w, https://images.leflair.vn/w1080/q85/5bda6cb9a72e8d16f6cebf98.jpg 1080w, https://images.leflair.vn/w1440/q85/5bda6cb9a72e8d16f6cebf98.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Venica Túi Xách Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Venica Túi Xách Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-52-deborah-milano-my-pham-trang-diem-5bd6c6d573d2837c40e0bebc">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdad69dc6b3c5c0d80a1cdc.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad69dc6b3c5c0d80a1cdc.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad69dc6b3c5c0d80a1cdc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad69dc6b3c5c0d80a1cdc.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 52% - Deborah Milano Mỹ Phẩm Trang Điểm" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 52% - Deborah Milano Mỹ Phẩm Trang Điểm</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-68-adia-skincare-tinh-chat-tre-hoa-da-ngoc-trai-den-5bd6cb4a91ec7c7c7a4a0543">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdaedb2c6b3c518150a28a4.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdaedb2c6b3c518150a28a4.jpg 640w, https://images.leflair.vn/w1080/q85/5bdaedb2c6b3c518150a28a4.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdaedb2c6b3c518150a28a4.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 68% - Adia Skincare Tinh Chất Trẻ Hóa Da Ngọc Trai Đen" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 68% - Adia Skincare Tinh Chất Trẻ Hóa Da Ngọc Trai Đen</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">16 giờ</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/deborah-milano-son-mong-5bd6c7883bc933a62499c4c5">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdae87bbc0863c2883ebcde.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdae87bbc0863c2883ebcde.jpg 640w, https://images.leflair.vn/w1080/q85/5bdae87bbc0863c2883ebcde.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdae87bbc0863c2883ebcde.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Deborah Milano Sơn Móng" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Deborah Milano Sơn Móng</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-61-viviane-do-boi-the-thao-5bd290557a96e6f85f53926e">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bda7abd2b25c2ac39b33bcb.jpg" srcSet="https://images.leflair.vn/w640/q85/5bda7abd2b25c2ac39b33bcb.jpg 640w, https://images.leflair.vn/w1080/q85/5bda7abd2b25c2ac39b33bcb.jpg 1080w, https://images.leflair.vn/w1440/q85/5bda7abd2b25c2ac39b33bcb.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 61% - Viviane Đồ Bơi Thể Thao" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 61% - Viviane Đồ Bơi Thể Thao</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/quiz-thoi-trang-nu-5bdaa1c390ef28f6c316b021">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdaedf8bc0863c6b73ebd0b.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdaedf8bc0863c6b73ebd0b.jpg 640w, https://images.leflair.vn/w1080/q85/5bdaedf8bc0863c6b73ebd0b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdaedf8bc0863c6b73ebd0b.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Quiz Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Quiz Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/kinh-mat-thoi-trang-nam-and-nu-celine-dion-mercedes-benz-5bd6ca9d68c1b82f43be4dec">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdad874bc08635a8a3eba41.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad874bc08635a8a3eba41.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad874bc08635a8a3eba41.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad874bc08635a8a3eba41.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Kính Mát Thời Trang Nam & Nữ: Celine Dion, Mercedes Benz" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Kính Mát Thời Trang Nam &amp; Nữ: Celine Dion, Mercedes Benz</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/blinc-my-pham-trang-diem-5bd2c6cacc9f043f7223320c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdad603a72e8d588ccec708.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad603a72e8d588ccec708.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad603a72e8d588ccec708.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad603a72e8d588ccec708.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Blinc Mỹ Phẩm Trang Điểm" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Blinc Mỹ Phẩm Trang Điểm</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/botani-essentiq-konjac...-5bd2c3ec3461fc22ee2e75d6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdaea0fafd2a68615a633f1.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdaea0fafd2a68615a633f1.jpg 640w, https://images.leflair.vn/w1080/q85/5bdaea0fafd2a68615a633f1.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdaea0fafd2a68615a633f1.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Botáni, Essentiq, Konjac,..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Botáni, Essentiq, Konjac,...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-81-nike-giay-the-thao-nu-5bc9af39775b1800018986c4">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd801be2dd83a3139169387.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd801be2dd83a3139169387.jpg 640w, https://images.leflair.vn/w1080/q85/5bd801be2dd83a3139169387.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd801be2dd83a3139169387.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 81% - Nike Giày Thể Thao Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 81% - Nike Giày Thể Thao Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-62-jeanswest-thoi-trang-nu-and-nam-5bd692183bc933437599b7a0">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd957262054d4d8d1f3de7e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd957262054d4d8d1f3de7e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd957262054d4d8d1f3de7e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd957262054d4d8d1f3de7e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 62% - Jeanswest Thời Trang Nữ & Nam" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 62% - Jeanswest Thời Trang Nữ &amp; Nam</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-police-furla-gong-kinh-nu-and-nam-5bd6bd107cf04752e7488c5b">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd959b02054d42863f3e0bc.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd959b02054d42863f3e0bc.jpg 640w, https://images.leflair.vn/w1080/q85/5bd959b02054d42863f3e0bc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd959b02054d42863f3e0bc.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Police, Furla Gọng Kính Nữ & Nam" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Police, Furla Gọng Kính Nữ &amp; Nam</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-57-police-furla-kinh-mat-thoi-trang-5bd6bf8a7cf0477c27488c97">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd965ad3833ca360094e583.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd965ad3833ca360094e583.jpg 640w, https://images.leflair.vn/w1080/q85/5bd965ad3833ca360094e583.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd965ad3833ca360094e583.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 57% - Police, Furla: Kính Mát Thời Trang" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 57% - Police, Furla: Kính Mát Thời Trang</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/omron-and-laica-thiet-bi-cham-soc-suc-khoe-5bd9244c4029352174494660">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd94ec4f95af294e918c5a0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd94ec4f95af294e918c5a0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd94ec4f95af294e918c5a0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd94ec4f95af294e918c5a0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Omron & Laica: Thiết Bị Chăm Sóc Sức Khỏe" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Omron &amp; Laica: Thiết Bị Chăm Sóc Sức Khỏe</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/dr.-brandt-my-pham-cham-soc-da-5bd2a1b57a96e63685539412">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd9915bb4993258f12b2dc3.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd9915bb4993258f12b2dc3.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9915bb4993258f12b2dc3.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9915bb4993258f12b2dc3.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Dr. Brandt Mỹ Phẩm Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Dr. Brandt Mỹ Phẩm Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-56-kate-spade-new-york-dong-ho-nu-5bd6b4b13bc9331d3b99bf2c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd92b282054d44423f3d715.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd92b282054d44423f3d715.jpg 640w, https://images.leflair.vn/w1080/q85/5bd92b282054d44423f3d715.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd92b282054d44423f3d715.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 56% - Kate Spade New York Đồng Hồ Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 56% - Kate Spade New York Đồng Hồ Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-59-elly-preston-trang-suc-nu-5bd695033bc933aa6899b893">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd81fb8d297d16792389ad6.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd81fb8d297d16792389ad6.jpg 640w, https://images.leflair.vn/w1080/q85/5bd81fb8d297d16792389ad6.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd81fb8d297d16792389ad6.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 59% - Elly Preston Trang Sức Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 59% - Elly Preston Trang Sức Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-56-dermolab-my-pham-cham-soc-da-5bd6bc9c73d283303de0bb6e">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd826e2d297d131fb389b98.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd826e2d297d131fb389b98.jpg 640w, https://images.leflair.vn/w1080/q85/5bd826e2d297d131fb389b98.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd826e2d297d131fb389b98.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 56% - Dermolab Mỹ Phẩm Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 56% - Dermolab Mỹ Phẩm Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-50-gaya-my-pham-and-dung-cu-trang-diem-5bd2b62d7a96e6f7c553949e">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd9824802c08e0efa71b527.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd9824802c08e0efa71b527.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9824802c08e0efa71b527.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9824802c08e0efa71b527.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 50% - Gaya Mỹ Phẩm & Dụng Cụ Trang Điểm" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 50% - Gaya Mỹ Phẩm &amp; Dụng Cụ Trang Điểm</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/snp-my-pham-cham-soc-da-5bd6d479aea2cb63436b161a">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd9894002c08e07a371b705.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd9894002c08e07a371b705.jpg 640w, https://images.leflair.vn/w1080/q85/5bd9894002c08e07a371b705.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd9894002c08e07a371b705.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="SNP Mỹ Phẩm Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">SNP Mỹ Phẩm Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-fila-thoi-trang-and-giay-the-thao-nam-nu-5bcdb1c7a9afb70001033f82">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd8408e0563016328a86211.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd8408e0563016328a86211.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8408e0563016328a86211.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8408e0563016328a86211.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Fila Thời Trang & Giày Thể Thao Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Fila Thời Trang &amp; Giày Thể Thao Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/calvin-klein-dkny-tommy-hilfiger...-5bd67b7273d283d157e0aacc">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd84328efbad42946382656.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd84328efbad42946382656.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84328efbad42946382656.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84328efbad42946382656.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Calvin Klein, Dkny, Tommy Hilfiger..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Calvin Klein, Dkny, Tommy Hilfiger...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giorgio-armani-and-giorgio-ferri-kinh-mat-nam-nu-5bd033d5b5107200018695cf">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd8199977f225fd44d8de5f.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd8199977f225fd44d8de5f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8199977f225fd44d8de5f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8199977f225fd44d8de5f.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giorgio Armani & Giorgio Ferri: Kính Mát Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giorgio Armani &amp; Giorgio Ferri: Kính Mát Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/mip-bookki-cosmetea-5bce9a177176290001132360">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd68e407cf0473662488796.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd68e407cf0473662488796.jpg 640w, https://images.leflair.vn/w1080/q85/5bd68e407cf0473662488796.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd68e407cf0473662488796.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="MIP, BOOKKI, COSMETEA" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">MIP, BOOKKI, COSMETEA</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-58-les-georgettes-paris-phu-kien-trang-suc-nu-5bd2f01b5ab4dd1ec71ebdb0">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd84540ec2d442e7801a9d4.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd84540ec2d442e7801a9d4.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84540ec2d442e7801a9d4.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84540ec2d442e7801a9d4.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 58% - Les Georgettes Paris Phụ Kiện Trang Sức Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 58% - Les Georgettes Paris Phụ Kiện Trang Sức Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/fresh-and-feel-my-pham-cham-soc-toc-and-co-the-5bd2b8c7e6de67527108b9aa">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6cbdd3d41613a1ac1ad90.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6cbdd3d41613a1ac1ad90.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6cbdd3d41613a1ac1ad90.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6cbdd3d41613a1ac1ad90.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Fresh & Feel Mỹ Phẩm Chăm Sóc Tóc & Cơ Thể" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Fresh &amp; Feel Mỹ Phẩm Chăm Sóc Tóc &amp; Cơ Thể</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/philips-panasonic-elmich...-5bd679f173d283bf29e0a9d0">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6b6457cf0470f5e488c09.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6b6457cf0470f5e488c09.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6b6457cf0470f5e488c09.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6b6457cf0470f5e488c09.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Philips, Panasonic, Elmich..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Philips, Panasonic, Elmich...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/pretty-my-pham-cao-cap-5bd679867cf047911c4880a6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd84219ec2d4454f201a9c9.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd84219ec2d4454f201a9c9.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84219ec2d4454f201a9c9.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84219ec2d4454f201a9c9.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Pretty Mỹ Phẩm Cao Cấp" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Pretty Mỹ Phẩm Cao Cấp</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/parakito-vien-chong-muoi-5bd2b9f7d7751c62fb8f8c81">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd84348056301de7ea86236.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd84348056301de7ea86236.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84348056301de7ea86236.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84348056301de7ea86236.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Para'kito Viên Chống Muỗi" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Para'kito Viên Chống Muỗi</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-59-olv-boutique-thoi-trang-nu-5bcea8219eaacb000149986c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6c2473bc93302b999c259.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6c2473bc93302b999c259.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6c2473bc93302b999c259.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6c2473bc93302b999c259.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 59% - Olv Boutique Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 59% - Olv Boutique Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/idigo-balo-and-tui-thoi-trang-nu-5bcea72671762900011325b8">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd696377cf0477eba488891.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd696377cf0477eba488891.jpg 640w, https://images.leflair.vn/w1080/q85/5bd696377cf0477eba488891.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd696377cf0477eba488891.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Idigo Balo & Túi Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Idigo Balo &amp; Túi Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/cest-la-v-thoi-trang-nu-5bcea2569eaacb000149979b">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd90ebc3a7bff63c1c00d79.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd90ebc3a7bff63c1c00d79.jpg 640w, https://images.leflair.vn/w1080/q85/5bd90ebc3a7bff63c1c00d79.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd90ebc3a7bff63c1c00d79.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="C'est La V Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">C'est La V Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/uriage-my-pham-cham-soc-da-5bd0385822064a0001fa3395">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd80d4f77f2255c05d8d883.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd80d4f77f2255c05d8d883.jpg 640w, https://images.leflair.vn/w1080/q85/5bd80d4f77f2255c05d8d883.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd80d4f77f2255c05d8d883.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Uriage Mỹ Phẩm Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Uriage Mỹ Phẩm Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-69-burgi-dong-ho-nu-thoi-trang-5bc6a75b0ea5fe0001d7db3c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6ec562cd7970ba564b1e5.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6ec562cd7970ba564b1e5.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6ec562cd7970ba564b1e5.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6ec562cd7970ba564b1e5.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 69% - Burgi Đồng Hồ Nữ Thời Trang" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 69% - Burgi Đồng Hồ Nữ Thời Trang</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-gia-doc-quyen-tai-leflair-versace-and-salvatore-ferragamo-nuoc-hoa-nu-5bbce4f13138ba0001a1d23c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd681ec3bc933d99599b346.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd681ec3bc933d99599b346.jpg 640w, https://images.leflair.vn/w1080/q85/5bd681ec3bc933d99599b346.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd681ec3bc933d99599b346.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Giá Độc Quyền Tại 123order - Versace & Salvatore Ferragamo: Nước Hoa Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Giá Độc Quyền Tại 123order - Versace &amp; Salvatore Ferragamo: Nước Hoa Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-69-fitflop-giay-dep-thoi-trang-nam-and-nu-5bce9d399eaacb00014996f9">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6dc3faea2cb6a396b19f0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6dc3faea2cb6a396b19f0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6dc3faea2cb6a396b19f0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6dc3faea2cb6a396b19f0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 69% - Fitflop Giày Dép Thời Trang Nam & Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 69% - Fitflop Giày Dép Thời Trang Nam &amp; Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-kinh-mat-nu-fendi-mcm-5bd0246522064a0001fa1f04">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6c4e57cf047c6d8488d4a.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6c4e57cf047c6d8488d4a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6c4e57cf047c6d8488d4a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6c4e57cf047c6d8488d4a.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Kính Mát Nữ: Fendi, Mcm" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Kính Mát Nữ: Fendi, Mcm</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/cellini-giay-and-tui-xach-nam-nu-5bd2f749fe928beeb764ee10">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6ea232dd83a5ece168271.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6ea232dd83a5ece168271.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6ea232dd83a5ece168271.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6ea232dd83a5ece168271.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Cellini Giày & Túi Xách Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Cellini Giày &amp; Túi Xách Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/nots-my-pham-duong-da-toan-dien-5bd029a398ea5c000109ebd3">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd43f47c2d2e53d0817f943.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd43f47c2d2e53d0817f943.jpg 640w, https://images.leflair.vn/w1080/q85/5bd43f47c2d2e53d0817f943.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd43f47c2d2e53d0817f943.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="NoTS Mỹ Phẩm Dưỡng Da Toàn Diện" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">NoTS Mỹ Phẩm Dưỡng Da Toàn Diện</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-gong-kinh-nam-and-nu-fendi-mcm-5bd0210122064a0001fa1eae">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd7b8f8b16f63800440052b.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd7b8f8b16f63800440052b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7b8f8b16f63800440052b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7b8f8b16f63800440052b.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Gọng Kính Nam & Nữ: Fendi, Mcm" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Gọng Kính Nam &amp; Nữ: Fendi, Mcm</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/dung-cu-trang-diem-and-cham-soc-suc-khoe-rio-waterpulse-5bd019cf22064a0001fa1ddb">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6ddf8e50f800cabb11509.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6ddf8e50f800cabb11509.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6ddf8e50f800cabb11509.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6ddf8e50f800cabb11509.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Dụng Cụ Trang Điểm & Chăm Sóc Sức Khỏe: Rio, Waterpulse" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Dụng Cụ Trang Điểm &amp; Chăm Sóc Sức Khỏe: Rio, Waterpulse</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/guess-trang-suc-nu-5bd028e522064a0001fa1fce">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6d997e50f805910b11433.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6d997e50f805910b11433.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6d997e50f805910b11433.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6d997e50f805910b11433.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Guess Trang Sức Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Guess Trang Sức Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/speedo-do-boi-gia-dinh-5bcea6b1d56ec80001043c7c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6e3ff0d0a02e9d62600e7.png" srcSet="https://images.leflair.vn/w640/q85/5bd6e3ff0d0a02e9d62600e7.png 640w, https://images.leflair.vn/w1080/q85/5bd6e3ff0d0a02e9d62600e7.png 1080w, https://images.leflair.vn/w1440/q85/5bd6e3ff0d0a02e9d62600e7.png 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Speedo Đồ Bơi Gia Đình" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Speedo Đồ Bơi Gia Đình</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/lan-dau-tai-leflair-skin-nation-my-pham-duong-da-5bd2ba98d7751c03fc8f8c87">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6dcfde50f80ef3fb11505.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6dcfde50f80ef3fb11505.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6dcfde50f80ef3fb11505.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6dcfde50f80ef3fb11505.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Lần Đầu Tại 123order - Skin Nation Mỹ Phẩm Dưỡng Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Lần Đầu Tại 123order - Skin Nation Mỹ Phẩm Dưỡng Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/domani-giay-thoi-trang-nu-5bc6a6d49e3b150001afbc33">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3fa6c045f2c8115a6cd78.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3fa6c045f2c8115a6cd78.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3fa6c045f2c8115a6cd78.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3fa6c045f2c8115a6cd78.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Domani Giày Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Domani Giày Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/graziella-tui-bop-and-vi-thoi-trang-nu-5bcea1b2717629000113244a">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3e455045f2cf707a6cd2c.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3e455045f2cf707a6cd2c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3e455045f2cf707a6cd2c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3e455045f2cf707a6cd2c.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Graziella Túi, Bóp & Ví Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Graziella Túi, Bóp &amp; Ví Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/celin-vat-pham-trang-tri-ma-vang-24k-5bcfe99f98ea5c000109da7a">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd08cc622064a0001fa488c.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd08cc622064a0001fa488c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd08cc622064a0001fa488c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd08cc622064a0001fa488c.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Celin Vật Phẩm Trang Trí Mạ Vàng 24K" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Celin Vật Phẩm Trang Trí Mạ Vàng 24K</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/yves-rocher-my-pham-and-cham-soc-da-5bcff677b510720001868037">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd42766c2d2e5d77d17f914.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd42766c2d2e5d77d17f914.jpg 640w, https://images.leflair.vn/w1080/q85/5bd42766c2d2e5d77d17f914.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd42766c2d2e5d77d17f914.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Yves Rocher Mỹ Phẩm & Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Yves Rocher Mỹ Phẩm &amp; Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/lan-dau-tai-leflair-graceful-trang-suc-phong-thuy-5bce904e9eaacb0001499482">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd428ebc2d2e5466617f919.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd428ebc2d2e5466617f919.jpg 640w, https://images.leflair.vn/w1080/q85/5bd428ebc2d2e5466617f919.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd428ebc2d2e5466617f919.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Lần Đầu Tại 123order - Graceful Trang Sức Phong Thủy" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Lần Đầu Tại 123order - Graceful Trang Sức Phong Thủy</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/hector-andlab-angellook...-5bcfec1eb510720001867b69">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd40f2f0f102237deb9ecc8.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd40f2f0f102237deb9ecc8.jpg 640w, https://images.leflair.vn/w1080/q85/5bd40f2f0f102237deb9ecc8.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd40f2f0f102237deb9ecc8.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Hector, andLAB, Angellook..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Hector, andLAB, Angellook...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/sukin-cham-soc-toan-than-cho-ca-gia-dinh-5bcff5b898ea5c000109de23">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd406e8045f2c1312a6cdc5.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd406e8045f2c1312a6cdc5.jpg 640w, https://images.leflair.vn/w1080/q85/5bd406e8045f2c1312a6cdc5.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd406e8045f2c1312a6cdc5.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Sukin Chăm Sóc Toàn Thân Cho Cả Gia Đình" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Sukin Chăm Sóc Toàn Thân Cho Cả Gia Đình</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-60-stormtech-thoi-trang-and-tui-xach-nam-nu-5bc959454f3acf000198344c">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdbc225e747f70e0b198273.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdbc225e747f70e0b198273.jpg 640w, https://images.leflair.vn/w1080/q85/5bdbc225e747f70e0b198273.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdbc225e747f70e0b198273.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 60% - Stormtech Thời Trang & Túi Xách Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 60% - Stormtech Thời Trang &amp; Túi Xách Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/graziella-trang-suc-nu-5bcfeabe98ea5c000109db06">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3ef4050cfa93d84e02443.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3ef4050cfa93d84e02443.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3ef4050cfa93d84e02443.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3ef4050cfa93d84e02443.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Graziella Trang Sức Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Graziella Trang Sức Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-55-calvin-klein-kinh-mat-nam-nu-5bcfe87fb510720001867ad6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd4186f50cfa99a91e02497.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd4186f50cfa99a91e02497.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4186f50cfa99a91e02497.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4186f50cfa99a91e02497.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 55% - Calvin Klein Kính Mát Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 55% - Calvin Klein Kính Mát Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-calvin-klein-gong-kinh-thoi-trang-5bcfe7a40d477e00014fb06a">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd4230ac2d2e54ba617f90d.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd4230ac2d2e54ba617f90d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4230ac2d2e54ba617f90d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4230ac2d2e54ba617f90d.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Calvin Klein Gọng Kính Thời Trang" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Calvin Klein Gọng Kính Thời Trang</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/glamful-my-pham-trang-diem-5bc9be4d3857b7000180ddac">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd402250f10228237b9ec7c.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd402250f10228237b9ec7c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd402250f10228237b9ec7c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd402250f10228237b9ec7c.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Glamful Mỹ Phẩm Trang Điểm" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Glamful Mỹ Phẩm Trang Điểm</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/venice-dong-ho-nam-and-nu-5bc5a7fdfa074e00010edce8">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3ed0250cfa9c23ee02431.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3ed0250cfa9c23ee02431.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3ed0250cfa9c23ee02431.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3ed0250cfa9c23ee02431.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Venice Đồng Hồ Nam & Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Venice Đồng Hồ Nam &amp; Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/dieuanh-thoi-trang-nu-5bc5a7a40ea5fe0001d7d193">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3f0de045f2cf622a6cd6f.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3f0de045f2cf622a6cd6f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3f0de045f2cf622a6cd6f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3f0de045f2cf622a6cd6f.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="dieuAnh Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">dieuAnh Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-71-lily-jewelry-trang-suc-nu-5bcfee8f98ea5c000109dd82">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2cef3c3be2733afd5bfe9.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2cef3c3be2733afd5bfe9.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2cef3c3be2733afd5bfe9.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2cef3c3be2733afd5bfe9.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 71% - Lily Jewelry Trang Sức Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 71% - Lily Jewelry Trang Sức Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/sum37degree-my-pham-and-cham-soc-da-5bcef6e8f3b4e50001b91083">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd30ec5c07c397452f636f5.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd30ec5c07c397452f636f5.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30ec5c07c397452f636f5.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30ec5c07c397452f636f5.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Su:m37° Mỹ Phẩm & Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Su:m37° Mỹ Phẩm &amp; Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/quay-australia-kinh-mat-nam-and-nu-tu-uc-5bcef68022064a0001fa0407">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3e34a045f2c76c0a6cd27.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3e34a045f2c76c0a6cd27.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3e34a045f2c76c0a6cd27.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3e34a045f2c76c0a6cd27.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Quay Australia Kính Mát Nam & Nữ Từ Úc" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Quay Australia Kính Mát Nam &amp; Nữ Từ Úc</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/nike-el-camino-dsquared...-5bcef386418eb80001ec211d">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd30809c07c397d4cf636de.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd30809c07c397d4cf636de.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30809c07c397d4cf636de.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30809c07c397d4cf636de.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Nike, El Camino, Dsquared²..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Nike, El Camino, Dsquared²...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-lily-jewelry-cai-ao-5bcef2cd22064a0001fa0397">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2f5fffe928b61fb64ee03.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2f5fffe928b61fb64ee03.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2f5fffe928b61fb64ee03.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2f5fffe928b61fb64ee03.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Lily Jewelry Cài Áo" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Lily Jewelry Cài Áo</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/levisr-reebok-kinh-mat-nam-and-nu-5bceef9f22064a0001fa02ba">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2e6aca46c6d1f05596048.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2e6aca46c6d1f05596048.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e6aca46c6d1f05596048.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e6aca46c6d1f05596048.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Levi's®, Reebok: Kính Mát Nam & Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Levi's®, Reebok: Kính Mát Nam &amp; Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/kelly-son-moi-and-nuoc-hoa-cao-cap-5bcee73c22064a0001fa0224">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2c141dc461759a5dccc16.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2c141dc461759a5dccc16.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c141dc461759a5dccc16.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c141dc461759a5dccc16.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Kelly Son Môi & Nước Hoa Cao Cấp" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Kelly Son Môi &amp; Nước Hoa Cao Cấp</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/alivy-thoi-trang-nu-5bcea10b9eaacb0001499736">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd30535c07c394646f636d7.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd30535c07c394646f636d7.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30535c07c394646f636d7.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30535c07c394646f636d7.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Alivy Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Alivy Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/else.instyle-thoi-trang-nu-5bce9ba39eaacb00014996cc">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd18b38021e58000172c458.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd18b38021e58000172c458.jpg 640w, https://images.leflair.vn/w1080/q85/5bd18b38021e58000172c458.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd18b38021e58000172c458.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Else.Instyle Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Else.Instyle Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-57-pauls-boutique-tui-thoi-trang-nu-5bc8390b7904c2000167f2ca">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2feec99034006b2f181f4.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2feec99034006b2f181f4.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2feec99034006b2f181f4.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2feec99034006b2f181f4.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 57% - Paul's Boutique Túi Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 57% - Paul's Boutique Túi Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/doma-vali-du-lich-5bc5a746fa074e00010edcb7">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2c930cc9f046106233236.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2c930cc9f046106233236.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c930cc9f046106233236.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c930cc9f046106233236.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Doma Vali Du Lịch" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Doma Vali Du Lịch</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-60-atlantic-dong-ho-nam-nu-5bc5a6e4fa074e00010edcb6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2e369c3be27602ed5c816.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2e369c3be27602ed5c816.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e369c3be27602ed5c816.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e369c3be27602ed5c816.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 60% - Atlantic Đồng Hồ Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 60% - Atlantic Đồng Hồ Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/holster-australiar-giay-thoi-trang-nu-5bc45b645aa76b000168877f">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd04020b51072000186990b.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd04020b51072000186990b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd04020b51072000186990b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd04020b51072000186990b.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Holster Australia® Giày Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Holster Australia® Giày Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/seesee-and-huxley-cham-soc-da-cao-cap-5bbed967607a400001c6e080">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2f576fe928bc05664ed99.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2f576fe928bc05664ed99.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2f576fe928bc05664ed99.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2f576fe928bc05664ed99.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Seesee & Huxley: Chăm Sóc Da Cao Cấp" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Seesee &amp; Huxley: Chăm Sóc Da Cao Cấp</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/cham-soc-da-and-toc-jacklon-broo-5bbcdfde2efe400001ca1c29">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd1813657a8ba0001f7f618.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd1813657a8ba0001f7f618.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1813657a8ba0001f7f618.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1813657a8ba0001f7f618.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Chăm Sóc Da & Tóc: Jacklon, Broo" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Chăm Sóc Da &amp; Tóc: Jacklon, Broo</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/organique-my-pham-cham-soc-da-5bb1c3bf568eb70001328dde">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bc976c98bfb3000019ee916.jpg" srcSet="https://images.leflair.vn/w640/q85/5bc976c98bfb3000019ee916.jpg 640w, https://images.leflair.vn/w1080/q85/5bc976c98bfb3000019ee916.jpg 1080w, https://images.leflair.vn/w1440/q85/5bc976c98bfb3000019ee916.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Organique Mỹ Phẩm Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Organique Mỹ Phẩm Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-64-mande-thoi-trang-nu-5bc71f86af243f00013020e6">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2c3e6dc46179e78dccdf3.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2c3e6dc46179e78dccdf3.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c3e6dc46179e78dccdf3.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c3e6dc46179e78dccdf3.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 64% - Mande Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 64% - Mande Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/o-hui-my-pham-and-cham-soc-da-5bcf001ff3b545000135b778">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2becfdc461733cadccbed.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2becfdc461733cadccbed.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2becfdc461733cadccbed.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2becfdc461733cadccbed.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="O Hui Mỹ Phẩm & Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">O Hui Mỹ Phẩm &amp; Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-venuco-madrid-balo-tui-mini-5bc5a148fa074e00010edbf9">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2b0feb57df39b943c591d.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2b0feb57df39b943c591d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2b0feb57df39b943c591d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2b0feb57df39b943c591d.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Venuco Madrid Balo, Túi Mini" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Venuco Madrid Balo, Túi Mini</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-74-venuco-madrid-vi-and-phu-kien-nu-5bc598ecfc45c60001d597ea">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2989fb57df38d933c57c9.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2989fb57df38d933c57c9.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2989fb57df38d933c57c9.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2989fb57df38d933c57c9.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 74% - Venuco Madrid Ví & Phụ Kiện Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 74% - Venuco Madrid Ví &amp; Phụ Kiện Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/meditime-neo-my-pham-cham-soc-da-5bce97cb7176290001132352">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd1a381810fe400019a913e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd1a381810fe400019a913e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1a381810fe400019a913e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1a381810fe400019a913e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Meditime - Neo Mỹ Phẩm Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Meditime - Neo Mỹ Phẩm Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/scentuals-cham-soc-da-and-co-the-5bcea8a671762900011325c3">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd0b78b22064a0001fa488f.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd0b78b22064a0001fa488f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd0b78b22064a0001fa488f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd0b78b22064a0001fa488f.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Scentuals Chăm Sóc Da & Cơ Thể" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Scentuals Chăm Sóc Da &amp; Cơ Thể</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/borgonovi-airlite-gip...-5bce9d049eaacb00014996f5">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2ebc4df505cfd0f55797a.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2ebc4df505cfd0f55797a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2ebc4df505cfd0f55797a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2ebc4df505cfd0f55797a.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Borgonovi, Airlite, Gip..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Borgonovi, Airlite, Gip...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/polaroid-sunday-woodzee...-5bce9ac1717629000113237a">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd1b36b021e58000172d138.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd1b36b021e58000172d138.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1b36b021e58000172d138.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1b36b021e58000172d138.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Polaroid, Sunday, Woodzee..." /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Polaroid, Sunday, Woodzee...</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-60-geparlys-paris-elysees-nuoc-hoa-nu-and-nam-5bce970fd56ec80001043a56">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2a1b07a96e6a26d539411.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2a1b07a96e6a26d539411.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2a1b07a96e6a26d539411.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2a1b07a96e6a26d539411.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 60% - Geparlys, Paris Elysees: Nước Hoa Nữ & Nam" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 60% - Geparlys, Paris Elysees: Nước Hoa Nữ &amp; Nam</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/vichy-cham-soc-da-5bce96127176290001132345">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2cd51fe1916ebaad4d8ad.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2cd51fe1916ebaad4d8ad.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2cd51fe1916ebaad4d8ad.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2cd51fe1916ebaad4d8ad.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Vichy Chăm Sóc Da" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Vichy Chăm Sóc Da</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/likini-do-boi-nu-5bcdb21e9eaacb000149921a">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2e82bf8a1c6dba5ee6454.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2e82bf8a1c6dba5ee6454.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e82bf8a1c6dba5ee6454.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e82bf8a1c6dba5ee6454.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Likini Đồ Bơi Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Likini Đồ Bơi Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-87-venuco-madrid-tui-thoi-trang-5bc46645290cb30001e985ff">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e9c05ab4ddd2bd1ebd52.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 87% - Venuco Madrid Túi Thời Trang" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 87% - Venuco Madrid Túi Thời Trang</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-fastrack-dong-ho-nam-nu-5bc465dc290cb30001e985e0">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd191ce021e58000172c8be.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd191ce021e58000172c8be.jpg 640w, https://images.leflair.vn/w1080/q85/5bd191ce021e58000172c8be.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd191ce021e58000172c8be.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Fastrack Đồng Hồ Nam, Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Fastrack Đồng Hồ Nam, Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/storm-dong-ho-nam-and-nu-5bc4659d290cb30001e985bf">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd183c7021e58000172c3d0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd183c7021e58000172c3d0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd183c7021e58000172c3d0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd183c7021e58000172c3d0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Storm Đồng Hồ Nam & Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Storm Đồng Hồ Nam &amp; Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
                <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-royal-walk-and-scala-giay-dep-thoi-trang-nu-5bc465384de7540001268a91">
                  <div className="sale-card__currentSale___cC1H3">
                    <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd19a8857a8ba0001f80116.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd19a8857a8ba0001f80116.jpg 640w, https://images.leflair.vn/w1080/q85/5bd19a8857a8ba0001f80116.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd19a8857a8ba0001f80116.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Royal Walk & Scala: Giày, Dép Thời Trang Nữ" /></div>
                    <div className="sale-card__currentSaleInfo___2LkMa">
                      <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Royal Walk &amp; Scala: Giày, Dép Thời Trang Nữ</div>
                      <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <iframe src="//asia.creativecdn.com/tags?id=pr_01dY0e4guJ61lwvQGDAs_category2_Women" width={1} height={1} scrolling="no" frameBorder={0} style={{ display: 'none' }} />
            <div className="footer__footerSection___1-2XO" id="footer">
              <div className="container__container___1fvX0 ">
                <div className="footer__upper___3xatR">
                  <div className="row__row___2roCA ">
                    <div className="footer__col-md-2___1vyOI footer__socialLinks___3S5w9"><Link to={`/home`} className="footer__logo___SNGnI" style={{ marginLeft: '25px' }} ><img onClick={()=>this.handleClick()} className="footer__image___1wrDs" src="/img/123orderwhite.png" /></Link>
                      <ul className="list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/LeflairVN"><i className="ic-facebook" /></a></li>
                        <li className="list-inline-item"><a href="https://instagram.com/leflairvietnam"><i className="ic-instagram" /></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/company/leflair"><i className="ic-linkedin2" /></a></li>
                        <li className="list-inline-item"><a href="https://zalo.me/3159399474223916820"><i className="ic-ic-zalo" /></a></li>
                      </ul>
                    </div>
                    <div className="footer__col-md-2___1vyOI footer__col-4___-XXVx footer__contact___2p3rC">
                      <h4 className="footer__title___2Zw_F">Liên hệ</h4>
                      <div className="footer__body___2_pAR">
                        <ul className="list-unstyled">
                          <li><a className="phone" href="tel:19006710">19006710</a></li>
                          <li><a className="email" href="mailto:help@123order.vn">help@123order.vn</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__col-md-2___1vyOI footer__col-4___-XXVx footer__company___GKAFU">
                      <h4 className="footer__title___2Zw_F">Doanh nghiệp</h4>
                      <div className="footer__body___2_pAR">
                        <ul className="list-unstyled">
                          <li><a href="https://pages.leflair.vn/about-us">Về 123order</a></li>
                          <li><a href="https://styleguide.leflair.vn/">Style Guide</a></li>
                          <li><a href="https://pages.leflair.vn/partners">Hợp tác</a></li>
                          <li><a href="https://pages.leflair.vn/genuine-guarantee">Chính hãng</a></li>
                          <li><a href="https://careers.leflair.vn/">Tuyển dụng</a></li>
                          <li><a className href="/brands">Thương hiệu</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__col-md-2___1vyOI footer__col-4___-XXVx footer__customerService___2ZPaW">
                      <h4 className="footer__title___2Zw_F">Chăm sóc khách hàng</h4>
                      <div className="footer__body___2_pAR">
                        <ul className="list-unstyled">
                          <li><a href="https://support.leflair.vn/hc/vi">Hỏi đáp</a></li>
                          <li><a href="https://support.leflair.vn/hc/vi/articles/214167448-Ch%C3%ADnh-s%C3%A1ch-tr%E1%BA%A3-h%C3%A0ng-v%C3%A0-ho%C3%A0n-ti%E1%BB%81n">Đổi
                        trả</a></li>
                          <li><a href="https://support.leflair.vn/hc/vi/articles/214857097-%C4%90i%E1%BB%81u-kho%E1%BA%A3n-v%C3%A0-quy-%C4%91%E1%BB%8Bnh-chung">Điều
                        khoản &amp; quy định</a></li>
                          <li><a href="https://support.leflair.vn/hc/vi/articles/214167378-Ch%C3%ADnh-s%C3%A1ch-giao-v%C3%A0-nh%E1%BA%ADn-h%C3%A0ng">Giao
                        hàng</a></li>
                          <li><a href="https://support.leflair.vn/hc/vi/articles/214113678-T%C3%B4i-c%C3%B3-nh%E1%BA%ADn-%C4%91%C6%B0%E1%BB%A3c-h%C3%B3a-%C4%91%C6%A1n-GTGT-trong-b%C6%B0u-ki%E1%BB%87n-kh%C3%B4ng-">Thuế</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__col-md-4___2KXw4 footer__facebookPage___2mPne">
                      <div className="fb-page" data-href="https://www.facebook.com/LeflairVN" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false" data-show-posts="false" />
                    </div>
                  </div>
                </div>
                <div className="footer__lower___3ZvXz">
                  <div className="row__row___2roCA ">
                    <div className="footer__col-lg-8___KYzn5 footer__col-md-8___2pauw">
                      <div className="row__row___2roCA ">
                        <div className="footer__col-lg-6___2jvLt footer__copyright___1R9Fa"><a className="footer__govLink___1bjkn" href="http://www.online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=19306" target="blank"><img className="footer__image___1wrDs" src="https://www.leflair.vn/images/stamp-bo-cong-thuong.png" /></a><span className="footer__text___1Ta7d">Copyright
                      @ 2018 123order.vn</span></div>
                        <div className="footer__col-lg-6___2jvLt footer__address___aiHX9">Công ty Cổ phần 123order - Tầng 16,
                    Tháp A2, Tòa nhà Viettel, 285 Cách Mạng Tháng Tám, P.12, Q.10, TP.HCM</div>
                      </div>
                    </div>
                    <div className="footer__col-lg-4___excjO footer__col-md-4___2KXw4">Cơ quan cấp: Sở Kế hoạch và Đầu tư
                Thành phố Hồ Chí Minh</div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" cart__cart___yD7P6 ">
              <div className="clearfix cart__heading___1Yc0F">
                <div className="cart__btn-close___1BLZG" title="Tiếp tục mua sắm!"><span className="ic-ic-close cart__icon___DWUE4" /></div>
                <h4 className="cart__title___XIF0i">Giỏ hàng<span>(0 Sản phẩm)</span></h4>
              </div>
              <div className="partner-promote-section cart-promo-list__promote-section___VzfTM">
                <div className="slick-initialized slick-slider">
                  <button type="button" data-role="none" className="slick-arrow slick-prev" style={{ display: 'block' }}> Previous</button>
                  <div className="slick-list">
                    <div className="slick-track" style={{ opacity: 1, transform: 'translate3d(-900px, 0px, 0px)', width: 2250 }}>
                      <div data-index={-1} className="slick-slide slick-cloned" style={{ width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">10%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span className>1.500.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={0} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">150.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span className>600.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={1} className="slick-slide slick-active" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">100.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">Vietin Bank</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span className>0₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={2} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">10%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span className>1.500.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={3} className="slick-slide slick-cloned" style={{ width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">150.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span className>600.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                    </div>
                  </div>
                  <button type="button" data-role="none" className="slick-arrow slick-next" style={{ display: 'block' }}> Next</button>
                </div>
              </div>
              <div className="cart__body___XUP_6 cart__empty___1VFD2">
                <div className="cart__cart-empty___2VwBC">
                  <div className="cart__icon___DWUE4"><img src="/images/empty-bag.jpg" /></div>
                  <div>Giỏ hàng của bạn còn trống</div>
                  <div><button className="cart__btn___1bOR1 cart__btn-primary___2una7 cart__button-shopping___qfkgg" type="button">Tiếp tục mua sắm!</button></div>
                </div>
              </div>
            </div>
            <a id="go-to-top" className=" go-to-top__go-to-top___7XKAr" href="javascript:void(0)"><span className="go-to-top__icon___217Vz ic-ic-arrow-up" /></a>
          </div>
        </div>
      </main>

    )

  }
}
function mapStateToProps(state) {

  return state;
}
const connected = connect(mapStateToProps)(Amazon);
export { connected as Amazon } 