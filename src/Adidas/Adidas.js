import React from "react";
import { connect } from "react-redux";
import '../Sections/style.css';
import { Link } from 'react-router-dom';
class Adidas extends React.Component {
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
      <a className="hidden-md-down first-sale-tile__first-sale-desktop___3DYvl" href="/sales/giam-den-37-panasonic-dien-gia-dung-nha-bep-5bce9d967176290001132427">
        <div className="row__row___2roCA ">
          <div className="first-sale-tile__col-lg-9___2uu-j first-sale-tile__image-container___VGe3q"><img id className src="https://images.leflair.vn/w640/q85/5bdaad5cafd2a62e22a629db.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdaad5cafd2a62e22a629db.jpg 640w, https://images.leflair.vn/w1080/q85/5bdaad5cafd2a62e22a629db.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdaad5cafd2a62e22a629db.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw" alt="Giảm Đến 37% - Panasonic Điện Gia Dụng Nhà Bếp" /></div>
          <div className="first-sale-tile__col-lg-3___2ZXJG first-sale-tile__text-container___3Kt7T">
            <h2 className="first-sale-tile__title___2Dutp">Giảm Đến 37% - Panasonic Điện Gia Dụng Nhà Bếp</h2>
            <span className="first-sale-tile__time-wrap___3v0IL"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span><button className="first-sale-tile__btn___2kqdj first-sale-tile__btn-primary___2YFp4 first-sale-tile__btnSeeMore___2a8MB">Xem chi tiết</button>
          </div>
        </div>
      </a>
      <a className="hidden-lg-up cate-first-sale first-sale-tile__col-md-6___86-SM first-sale-tile__padding-remove___lzvjK first-sale-tile__sale-card-container___3zr_W" href="/sales/giam-den-37-panasonic-dien-gia-dung-nha-bep-5bce9d967176290001132427">
        <div className="sale-card__currentSale___cC1H3">
          <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdaad5cafd2a62e22a629db.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdaad5cafd2a62e22a629db.jpg 640w, https://images.leflair.vn/w1080/q85/5bdaad5cafd2a62e22a629db.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdaad5cafd2a62e22a629db.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 37% - Panasonic Điện Gia Dụng Nhà Bếp" /></div>
          <div className="sale-card__currentSaleInfo___2LkMa">
            <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 37% - Panasonic Điện Gia Dụng Nhà Bếp</div>
            <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
          </div>
        </div>
      </a>
    </div>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/panasonic-ban-ui-and-may-hut-bui-5bce9dde717629000113242a">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd93acf4029353d1e4948bc.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd93acf4029353d1e4948bc.jpg 640w, https://images.leflair.vn/w1080/q85/5bd93acf4029353d1e4948bc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd93acf4029353d1e4948bc.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Panasonic Bàn Ủi & Máy Hút Bụi" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Panasonic Bàn Ủi &amp; Máy Hút Bụi</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/philips-noi-chien-khong-dau-5bd6cc1eaea2cba3f36b139a">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd8173f77f2254780d8ddfd.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd8173f77f2254780d8ddfd.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8173f77f2254780d8ddfd.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8173f77f2254780d8ddfd.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Philips Nồi Chiên Không Dầu" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Philips Nồi Chiên Không Dầu</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">15 giờ</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-55-jun-store-drap-boc-and-vo-chan-5bd2c48a3461fc5ac52e75e3">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd925922054d424b5f3d4f0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd925922054d424b5f3d4f0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd925922054d424b5f3d4f0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd925922054d424b5f3d4f0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 55% - Jun Store Drap Bọc & Vỏ Chăn" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 55% - Jun Store Drap Bọc &amp; Vỏ Chăn</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/cuckoo-thiet-bi-gia-dung-nha-bep-5bd2a128f9989f6965e79910">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd93412f95af258f218c15d.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd93412f95af258f218c15d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd93412f95af258f218c15d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd93412f95af258f218c15d.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Cuckoo Thiết Bị Gia Dụng Nhà Bếp" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Cuckoo Thiết Bị Gia Dụng Nhà Bếp</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-40-lotus-nem-cao-cap-5bd0377598ea5c000109f592">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd83d01efbad4926038241f.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd83d01efbad4926038241f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd83d01efbad4926038241f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd83d01efbad4926038241f.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 40% - Lotus Nệm Cao Cấp" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 40% - Lotus Nệm Cao Cấp</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-50-windsirr-bo-drap-and-chan-5bd037db22064a0001fa3338">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd81f7177f2253c0cd8e034.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd81f7177f2253c0cd8e034.jpg 640w, https://images.leflair.vn/w1080/q85/5bd81f7177f2253c0cd8e034.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd81f7177f2253c0cd8e034.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 50% - Windsir® Bộ Drap & Chăn" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 50% - Windsir® Bộ Drap &amp; Chăn</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/tiross-do-gia-dung-5bd28f9a7a96e6461d539257">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd7eac177f22500bed8d130.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd7eac177f22500bed8d130.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7eac177f22500bed8d130.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7eac177f22500bed8d130.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Tiross Đồ Gia Dụng" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Tiross Đồ Gia Dụng</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-47-kyocera-do-dung-nha-bep-tu-nhat-ban-5bd0371f98ea5c000109f591">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd839570563016512a8619b.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd839570563016512a8619b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd839570563016512a8619b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd839570563016512a8619b.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 47% - Kyocera Đồ Dùng Nhà Bếp Từ Nhật Bản" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 47% - Kyocera Đồ Dùng Nhà Bếp Từ Nhật Bản</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/pensonic-cuchen-aqua...-5bd0358622064a0001fa2822">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd83f630563017b45a86206.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd83f630563017b45a86206.jpg 640w, https://images.leflair.vn/w1080/q85/5bd83f630563017b45a86206.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd83f630563017b45a86206.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Pensonic, Cuchen, Aqua,..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Pensonic, Cuchen, Aqua,...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-70-flonal-and-tramontina-noi-chao-dao-5bce8d397176290001132235">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd690da3bc933e02d99b6ba.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd690da3bc933e02d99b6ba.jpg 640w, https://images.leflair.vn/w1080/q85/5bd690da3bc933e02d99b6ba.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd690da3bc933e02d99b6ba.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 70% - Flonal & Tramontina: Nồi, Chảo, Dao" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 70% - Flonal &amp; Tramontina: Nồi, Chảo, Dao</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-40-sharp-thiet-bi-gia-dung-nha-bep-5bd026ed22064a0001fa1f2a">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6c59d73d283952be0bea1.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6c59d73d283952be0bea1.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6c59d73d283952be0bea1.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6c59d73d283952be0bea1.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 40% - Sharp Thiết Bị Gia Dụng Nhà Bếp" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 40% - Sharp Thiết Bị Gia Dụng Nhà Bếp</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/lan-dau-tai-leflair-ivv-do-dung-ban-an-tu-nuoc-y-5bd027a8b510720001868ea7">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6cf333d41615dffc1b2d1.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6cf333d41615dffc1b2d1.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6cf333d41615dffc1b2d1.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6cf333d41615dffc1b2d1.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Lần Đầu Tại 123order - IVV Đồ Dùng Bàn Ăn Từ Nước Ý" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Lần Đầu Tại 123order - IVV Đồ Dùng Bàn Ăn Từ Nước Ý</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-vii-house-bo-drap-and-chan-5bd0285298ea5c000109eb21">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6bd043bc933bfd499c1bf.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6bd043bc933bfd499c1bf.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6bd043bc933bfd499c1bf.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6bd043bc933bfd499c1bf.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Vii House Bộ Drap & Chăn" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Vii House Bộ Drap &amp; Chăn</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-78-libbey-do-dung-ban-an-5bce910f9eaacb000149948a">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd4182950cfa99baee02495.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd4182950cfa99baee02495.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4182950cfa99baee02495.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4182950cfa99baee02495.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 78% - Libbey Đồ Dùng Bàn Ăn" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 78% - Libbey Đồ Dùng Bàn Ăn</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/novelle-bo-drap-and-chan-phong-ngu-5bcff07bb510720001867df8">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd307bbc07c398ce0f636db.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd307bbc07c398ce0f636db.jpg 640w, https://images.leflair.vn/w1080/q85/5bd307bbc07c398ce0f636db.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd307bbc07c398ce0f636db.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Novelle Bộ Drap & Chăn Phòng Ngủ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Novelle Bộ Drap &amp; Chăn Phòng Ngủ</div>
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
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/lan-dau-tai-leflair-giam-den-44-cole-and-mason-do-dung-nha-bep-5bcffbeb98ea5c000109de6f">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd4293d50cfa90e3ae024a2.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd4293d50cfa90e3ae024a2.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4293d50cfa90e3ae024a2.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4293d50cfa90e3ae024a2.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Lần Đầu Tại 123order - Giảm Đến 44% - Cole & Mason Đồ Dùng Nhà Bếp" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Lần Đầu Tại 123order - Giảm Đến 44% - Cole &amp; Mason Đồ Dùng Nhà Bếp</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/elo-fivestar-ilo-5bcfea2198ea5c000109dad1">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3db63045f2cf9b2a6cd19.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3db63045f2cf9b2a6cd19.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3db63045f2cf9b2a6cd19.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3db63045f2cf9b2a6cd19.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Elo, Fivestar, Ilo" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Elo, Fivestar, Ilo</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/ferroli-cuchen-tiger-queen...-5bcfebea22064a0001fa0c21">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd310ce3ff63137171caf2f.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd310ce3ff63137171caf2f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd310ce3ff63137171caf2f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd310ce3ff63137171caf2f.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Ferroli, Cuchen, Tiger Queen..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Ferroli, Cuchen, Tiger Queen...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/lan-dau-tai-leflair-giam-den-49-wusthof-bo-dao-keo-5bcef72e418eb80001ec2154">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd42873bfaa18854fe62cfc.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd42873bfaa18854fe62cfc.jpg 640w, https://images.leflair.vn/w1080/q85/5bd42873bfaa18854fe62cfc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd42873bfaa18854fe62cfc.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Lần Đầu Tại 123order - Giảm Đến 49% Wüsthof Bộ Dao, Kéo" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Lần Đầu Tại 123order - Giảm Đến 49% Wüsthof Bộ Dao, Kéo</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/korihomer-sakura-kiwa-5bcee9f422064a0001fa0239">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd304103ff63162be1caf2c.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd304103ff63162be1caf2c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd304103ff63162be1caf2c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd304103ff63162be1caf2c.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Korihome®, Sakura, Kiwa" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Korihome®, Sakura, Kiwa</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-48-king-koil-nem-and-khung-giuong-cao-cap-5bcee84122064a0001fa0227">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2f4a9090b0440af3f7c85.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2f4a9090b0440af3f7c85.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2f4a9090b0440af3f7c85.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2f4a9090b0440af3f7c85.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 48% - King Koil Nệm & Khung Giường Cao Cấp" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 48% - King Koil Nệm &amp; Khung Giường Cao Cấp</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-56-haewon-style-bo-drap-and-chan-5bcee6d6f3b4e50001b90e04">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2db2ac3be2762efd5c403.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2db2ac3be2762efd5c403.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2db2ac3be2762efd5c403.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2db2ac3be2762efd5c403.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 56% - Haewon Style Bộ Drap & Chăn" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 56% - Haewon Style Bộ Drap &amp; Chăn</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/toto-tulip-fountain-5bcea90271762900011325fd">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img id className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2b8ffba14fa35dbf2d223.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2b8ffba14fa35dbf2d223.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2b8ffba14fa35dbf2d223.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2b8ffba14fa35dbf2d223.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Toto, Tulip, Fountain" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Toto, Tulip, Fountain</div>
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
                    <div className="footer__col-md-2___1vyOI footer__socialLinks___3S5w9"><Link to={`/home`} className="footer__logo___SNGnI" style={{ marginLeft: '25px' }} ><img  onClick={()=>this.handleClick()} className="footer__image___1wrDs" src="/img/123orderwhite.png" /></Link>
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
                        <div className="footer__col-lg-6___2jvLt footer__address___aiHX9">Công ty Cổ phần 123order - Tầng 18,
                    Tháp A, Tòa nhà CT2E chung cư VOV, Đường Lương Thế Vinh, Hà Nội</div>
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
const connected = connect(mapStateToProps)(Adidas);
export { connected as Adidas } 