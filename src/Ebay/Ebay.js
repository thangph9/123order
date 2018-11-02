import React from "react";
import { connect } from "react-redux";
import '../Sections/style.css';
import { Link } from 'react-router-dom';
class Ebay extends React.Component {
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
                  <Link to={`/home`} style={{ position: 'relative', top: '4px' }} className="header__navbar-brand___SzzgD"><img src="/img/logo123order.png" /></Link>
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
                            <li ><a className="language-dropdown__dropdown-item___3bDVi" href="javascript:void(0)">English (en)</a></li>
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
          <div className="first-sale-tile__col-lg-9___2uu-j first-sale-tile__image-container___VGe3q"><img src="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad591afd2a6680da62d6e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad591afd2a6680da62d6e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, 100vw" alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc" /></div>
          <div className="first-sale-tile__col-lg-3___2ZXJG first-sale-tile__text-container___3Kt7T">
            <h2 className="first-sale-tile__title___2Dutp">Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc</h2>
            <span className="first-sale-tile__time-wrap___3v0IL"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span><button className="first-sale-tile__btn___2kqdj first-sale-tile__btn-primary___2YFp4 first-sale-tile__btnSeeMore___2a8MB">Xem chi tiết</button>
          </div>
        </div>
      </a>
      <a className="hidden-lg-up cate-first-sale first-sale-tile__col-md-6___86-SM first-sale-tile__padding-remove___lzvjK first-sale-tile__sale-card-container___3zr_W" href="/sales/giam-den-50-blackmoresr-thuc-pham-chuc-nang-tu-uc-5bd6c3137cf0476b22488d23">
        <div className="sale-card__currentSale___cC1H3">
          <div className="sale-card__international-tile___3A645">Hàng nhập khẩu</div>
          <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad591afd2a6680da62d6e.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad591afd2a6680da62d6e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad591afd2a6680da62d6e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc" /></div>
          <div className="sale-card__currentSaleInfo___2LkMa">
            <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 50% - Blackmores® Thực Phẩm Chức Năng Từ Úc</div>
            <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
          </div>
        </div>
      </a>
    </div>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/nanas-wonderland-windmill-nutritionworks...-5bd98f1f6ada6d0bdd52fc2f">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdadd62c6b3c5db940a2338.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdadd62c6b3c5db940a2338.jpg 640w, https://images.leflair.vn/w1080/q85/5bdadd62c6b3c5db940a2338.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdadd62c6b3c5db940a2338.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Nana's Wonderland, Windmill, NutritionWorks..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Nana's Wonderland, Windmill, NutritionWorks...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/efora-gino-rossi-pons...-5bcea2bad56ec80001043c3c">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bda6f73b4993262c32b3139.jpg" srcSet="https://images.leflair.vn/w640/q85/5bda6f73b4993262c32b3139.jpg 640w, https://images.leflair.vn/w1080/q85/5bda6f73b4993262c32b3139.jpg 1080w, https://images.leflair.vn/w1440/q85/5bda6f73b4993262c32b3139.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Efora, Gino Rossi, Pons,..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Efora, Gino Rossi, Pons,...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-59-titan-dong-ho-nam-and-nu-5bd6b7d673d283403ee0baf7">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd98c29606224cfc81c18a6.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd98c29606224cfc81c18a6.jpg 640w, https://images.leflair.vn/w1080/q85/5bd98c29606224cfc81c18a6.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd98c29606224cfc81c18a6.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 59% - Titan Đồng Hồ Nam & Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 59% - Titan Đồng Hồ Nam &amp; Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-65-people-giay-sneaker-nam-and-nu-5bd6b70473d28376e4e0baf3">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd923924029356ac249465d.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd923924029356ac249465d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd923924029356ac249465d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd923924029356ac249465d.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 65% - People Giày Sneaker Nam & Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 65% - People Giày Sneaker Nam &amp; Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/kinh-mat-thoi-trang-nam-and-nu-celine-dion-mercedes-benz-5bd6ca9d68c1b82f43be4dec">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdad874bc08635a8a3eba41.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdad874bc08635a8a3eba41.jpg 640w, https://images.leflair.vn/w1080/q85/5bdad874bc08635a8a3eba41.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdad874bc08635a8a3eba41.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Kính Mát Thời Trang Nam & Nữ: Celine Dion, Mercedes Benz" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Kính Mát Thời Trang Nam &amp; Nữ: Celine Dion, Mercedes Benz</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">7 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-82-nike-giay-the-thao-nam-5bc9abd3775b1800018985bb">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd7ea622dd83a6bfb16913e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd7ea622dd83a6bfb16913e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7ea622dd83a6bfb16913e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7ea622dd83a6bfb16913e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 82% - Nike Giày Thể Thao Nam" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 82% - Nike Giày Thể Thao Nam</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-62-jeanswest-thoi-trang-nu-and-nam-5bd692183bc933437599b7a0">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd957262054d4d8d1f3de7e.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd957262054d4d8d1f3de7e.jpg 640w, https://images.leflair.vn/w1080/q85/5bd957262054d4d8d1f3de7e.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd957262054d4d8d1f3de7e.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 62% - Jeanswest Thời Trang Nữ & Nam" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 62% - Jeanswest Thời Trang Nữ &amp; Nam</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-police-furla-gong-kinh-nu-and-nam-5bd6bd107cf04752e7488c5b">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd959b02054d42863f3e0bc.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd959b02054d42863f3e0bc.jpg 640w, https://images.leflair.vn/w1080/q85/5bd959b02054d42863f3e0bc.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd959b02054d42863f3e0bc.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Police, Furla Gọng Kính Nữ & Nam" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Police, Furla Gọng Kính Nữ &amp; Nam</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-57-police-furla-kinh-mat-thoi-trang-5bd6bf8a7cf0477c27488c97">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd965ad3833ca360094e583.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd965ad3833ca360094e583.jpg 640w, https://images.leflair.vn/w1080/q85/5bd965ad3833ca360094e583.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd965ad3833ca360094e583.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 57% - Police, Furla: Kính Mát Thời Trang" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 57% - Police, Furla: Kính Mát Thời Trang</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/omron-and-laica-thiet-bi-cham-soc-suc-khoe-5bd9244c4029352174494660">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd94ec4f95af294e918c5a0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd94ec4f95af294e918c5a0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd94ec4f95af294e918c5a0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd94ec4f95af294e918c5a0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Omron & Laica: Thiết Bị Chăm Sóc Sức Khỏe" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Omron &amp; Laica: Thiết Bị Chăm Sóc Sức Khỏe</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/non-and-binh-nuoc-the-thao-mitchell-and-ness-o2cool-5bd692d47cf04786044887cb">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd828bcb8cecbc9599d9835.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd828bcb8cecbc9599d9835.jpg 640w, https://images.leflair.vn/w1080/q85/5bd828bcb8cecbc9599d9835.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd828bcb8cecbc9599d9835.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Nón & Bình Nước Thể Thao: Mitchell & Ness, O2cool" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Nón &amp; Bình Nước Thể Thao: Mitchell &amp; Ness, O2cool</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">6 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-69-james-mccabe-and-thomas-earnshaw-dong-ho-nam-5bceac53d56ec80001043e8e">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd697803bc9330bae99b97c.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd697803bc9330bae99b97c.jpg 640w, https://images.leflair.vn/w1080/q85/5bd697803bc9330bae99b97c.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd697803bc9330bae99b97c.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 69% - James McCabe & Thomas Earnshaw: Đồng Hồ Nam" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 69% - James McCabe &amp; Thomas Earnshaw: Đồng Hồ Nam</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-fila-thoi-trang-and-giay-the-thao-nam-nu-5bcdb1c7a9afb70001033f82">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd8408e0563016328a86211.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd8408e0563016328a86211.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8408e0563016328a86211.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8408e0563016328a86211.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Fila Thời Trang & Giày Thể Thao Nam, Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Fila Thời Trang &amp; Giày Thể Thao Nam, Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/calvin-klein-dkny-tommy-hilfiger...-5bd67b7273d283d157e0aacc">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd84328efbad42946382656.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd84328efbad42946382656.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84328efbad42946382656.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84328efbad42946382656.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Calvin Klein, Dkny, Tommy Hilfiger..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Calvin Klein, Dkny, Tommy Hilfiger...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giorgio-armani-and-giorgio-ferri-kinh-mat-nam-nu-5bd033d5b5107200018695cf">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd8199977f225fd44d8de5f.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd8199977f225fd44d8de5f.jpg 640w, https://images.leflair.vn/w1080/q85/5bd8199977f225fd44d8de5f.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd8199977f225fd44d8de5f.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giorgio Armani & Giorgio Ferri: Kính Mát Nam, Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giorgio Armani &amp; Giorgio Ferri: Kính Mát Nam, Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/philips-panasonic-elmich...-5bd679f173d283bf29e0a9d0">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6b6457cf0470f5e488c09.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6b6457cf0470f5e488c09.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6b6457cf0470f5e488c09.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6b6457cf0470f5e488c09.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Philips, Panasonic, Elmich..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Philips, Panasonic, Elmich...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/parakito-vien-chong-muoi-5bd2b9f7d7751c62fb8f8c81">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd84348056301de7ea86236.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd84348056301de7ea86236.jpg 640w, https://images.leflair.vn/w1080/q85/5bd84348056301de7ea86236.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd84348056301de7ea86236.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Para'kito Viên Chống Muỗi" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Para'kito Viên Chống Muỗi</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">5 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-69-fitflop-giay-dep-thoi-trang-nam-and-nu-5bce9d399eaacb00014996f9">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6dc3faea2cb6a396b19f0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6dc3faea2cb6a396b19f0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6dc3faea2cb6a396b19f0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6dc3faea2cb6a396b19f0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 69% - Fitflop Giày Dép Thời Trang Nam & Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 69% - Fitflop Giày Dép Thời Trang Nam &amp; Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-53-kinh-mat-nu-fendi-mcm-5bd0246522064a0001fa1f04">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6c4e57cf047c6d8488d4a.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6c4e57cf047c6d8488d4a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6c4e57cf047c6d8488d4a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6c4e57cf047c6d8488d4a.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 53% - Kính Mát Nữ: Fendi, Mcm" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 53% - Kính Mát Nữ: Fendi, Mcm</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-gong-kinh-nam-and-nu-fendi-mcm-5bd0210122064a0001fa1eae">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd7b8f8b16f63800440052b.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd7b8f8b16f63800440052b.jpg 640w, https://images.leflair.vn/w1080/q85/5bd7b8f8b16f63800440052b.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd7b8f8b16f63800440052b.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Gọng Kính Nam & Nữ: Fendi, Mcm" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Gọng Kính Nam &amp; Nữ: Fendi, Mcm</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/dung-cu-trang-diem-and-cham-soc-suc-khoe-rio-waterpulse-5bd019cf22064a0001fa1ddb">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6ddf8e50f800cabb11509.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6ddf8e50f800cabb11509.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6ddf8e50f800cabb11509.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6ddf8e50f800cabb11509.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Dụng Cụ Trang Điểm & Chăm Sóc Sức Khỏe: Rio, Waterpulse" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Dụng Cụ Trang Điểm &amp; Chăm Sóc Sức Khỏe: Rio, Waterpulse</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/speedo-do-boi-gia-dinh-5bcea6b1d56ec80001043c7c">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6e3ff0d0a02e9d62600e7.png" srcSet="https://images.leflair.vn/w640/q85/5bd6e3ff0d0a02e9d62600e7.png 640w, https://images.leflair.vn/w1080/q85/5bd6e3ff0d0a02e9d62600e7.png 1080w, https://images.leflair.vn/w1440/q85/5bd6e3ff0d0a02e9d62600e7.png 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Speedo Đồ Bơi Gia Đình" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Speedo Đồ Bơi Gia Đình</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/calvin-klein-tommy-hilfiger...-5bcea3fc9eaacb0001499843">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd6aa9a7cf047c5b54889ab.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd6aa9a7cf047c5b54889ab.jpg 640w, https://images.leflair.vn/w1080/q85/5bd6aa9a7cf047c5b54889ab.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd6aa9a7cf047c5b54889ab.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Calvin Klein, Tommy Hilfiger,..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Calvin Klein, Tommy Hilfiger,...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">4 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/hector-andlab-angellook...-5bcfec1eb510720001867b69">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd40f2f0f102237deb9ecc8.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd40f2f0f102237deb9ecc8.jpg 640w, https://images.leflair.vn/w1080/q85/5bd40f2f0f102237deb9ecc8.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd40f2f0f102237deb9ecc8.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Hector, andLAB, Angellook..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Hector, andLAB, Angellook...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-60-stormtech-thoi-trang-and-tui-xach-nam-nu-5bc959454f3acf000198344c">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bdbc225e747f70e0b198273.jpg" srcSet="https://images.leflair.vn/w640/q85/5bdbc225e747f70e0b198273.jpg 640w, https://images.leflair.vn/w1080/q85/5bdbc225e747f70e0b198273.jpg 1080w, https://images.leflair.vn/w1440/q85/5bdbc225e747f70e0b198273.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 60% - Stormtech Thời Trang & Túi Xách Nam, Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 60% - Stormtech Thời Trang &amp; Túi Xách Nam, Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-55-calvin-klein-kinh-mat-nam-nu-5bcfe87fb510720001867ad6">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd4186f50cfa99a91e02497.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd4186f50cfa99a91e02497.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4186f50cfa99a91e02497.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4186f50cfa99a91e02497.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 55% - Calvin Klein Kính Mát Nam, Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 55% - Calvin Klein Kính Mát Nam, Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-calvin-klein-gong-kinh-thoi-trang-5bcfe7a40d477e00014fb06a">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd4230ac2d2e54ba617f90d.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd4230ac2d2e54ba617f90d.jpg 640w, https://images.leflair.vn/w1080/q85/5bd4230ac2d2e54ba617f90d.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd4230ac2d2e54ba617f90d.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Calvin Klein Gọng Kính Thời Trang" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Calvin Klein Gọng Kính Thời Trang</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/venice-dong-ho-nam-and-nu-5bc5a7fdfa074e00010edce8">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3ed0250cfa9c23ee02431.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3ed0250cfa9c23ee02431.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3ed0250cfa9c23ee02431.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3ed0250cfa9c23ee02431.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Venice Đồng Hồ Nam & Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Venice Đồng Hồ Nam &amp; Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/quay-australia-kinh-mat-nam-and-nu-tu-uc-5bcef68022064a0001fa0407">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd3e34a045f2c76c0a6cd27.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd3e34a045f2c76c0a6cd27.jpg 640w, https://images.leflair.vn/w1080/q85/5bd3e34a045f2c76c0a6cd27.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd3e34a045f2c76c0a6cd27.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Quay Australia Kính Mát Nam & Nữ Từ Úc" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Quay Australia Kính Mát Nam &amp; Nữ Từ Úc</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/nike-el-camino-dsquared...-5bcef386418eb80001ec211d">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd30809c07c397d4cf636de.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd30809c07c397d4cf636de.jpg 640w, https://images.leflair.vn/w1080/q85/5bd30809c07c397d4cf636de.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd30809c07c397d4cf636de.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Nike, El Camino, Dsquared²..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Nike, El Camino, Dsquared²...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/levisr-reebok-kinh-mat-nam-and-nu-5bceef9f22064a0001fa02ba">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2e6aca46c6d1f05596048.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2e6aca46c6d1f05596048.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e6aca46c6d1f05596048.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e6aca46c6d1f05596048.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Levi's®, Reebok: Kính Mát Nam & Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Levi's®, Reebok: Kính Mát Nam &amp; Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/doma-vali-du-lich-5bc5a746fa074e00010edcb7">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2c930cc9f046106233236.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2c930cc9f046106233236.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2c930cc9f046106233236.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2c930cc9f046106233236.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Doma Vali Du Lịch" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Doma Vali Du Lịch</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-60-atlantic-dong-ho-nam-nu-5bc5a6e4fa074e00010edcb6">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2e369c3be27602ed5c816.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2e369c3be27602ed5c816.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2e369c3be27602ed5c816.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2e369c3be27602ed5c816.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 60% - Atlantic Đồng Hồ Nam, Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 60% - Atlantic Đồng Hồ Nam, Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/borgonovi-airlite-gip...-5bce9d049eaacb00014996f5">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2ebc4df505cfd0f55797a.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2ebc4df505cfd0f55797a.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2ebc4df505cfd0f55797a.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2ebc4df505cfd0f55797a.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Borgonovi, Airlite, Gip..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Borgonovi, Airlite, Gip...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/polaroid-sunday-woodzee...-5bce9ac1717629000113237a">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd1b36b021e58000172d138.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd1b36b021e58000172d138.jpg 640w, https://images.leflair.vn/w1080/q85/5bd1b36b021e58000172d138.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd1b36b021e58000172d138.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Polaroid, Sunday, Woodzee..." /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Polaroid, Sunday, Woodzee...</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-60-geparlys-paris-elysees-nuoc-hoa-nu-and-nam-5bce970fd56ec80001043a56">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd2a1b07a96e6a26d539411.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd2a1b07a96e6a26d539411.jpg 640w, https://images.leflair.vn/w1080/q85/5bd2a1b07a96e6a26d539411.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd2a1b07a96e6a26d539411.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 60% - Geparlys, Paris Elysees: Nước Hoa Nữ & Nam" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 60% - Geparlys, Paris Elysees: Nước Hoa Nữ &amp; Nam</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/giam-den-54-fastrack-dong-ho-nam-nu-5bc465dc290cb30001e985e0">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd191ce021e58000172c8be.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd191ce021e58000172c8be.jpg 640w, https://images.leflair.vn/w1080/q85/5bd191ce021e58000172c8be.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd191ce021e58000172c8be.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Giảm Đến 54% - Fastrack Đồng Hồ Nam, Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Giảm Đến 54% - Fastrack Đồng Hồ Nam, Nữ</div>
          <div className="sale-card__endTimeWrap___3q0l3"><span className="sale-card__endTimeContent___3z5se"><i className="ic-ic-time end-time__icon___REEKA" /> <span className="end-time__text___1A-sx">Còn</span> <span className="end-time__timer___LMsIT">3 ngày</span></span></div>
        </div>
      </div>
    </a>
    <a className="default__col-md-6___9I2wX default__padding-remove___2T9LM" href="/sales/storm-dong-ho-nam-and-nu-5bc4659d290cb30001e985bf">
      <div className="sale-card__currentSale___cC1H3">
        <div className="sale-card__image-wrapper___EfOla"><img className="sale-card__currentSaleImg___3wFRM" src="https://images.leflair.vn/w640/q85/5bd183c7021e58000172c3d0.jpg" srcSet="https://images.leflair.vn/w640/q85/5bd183c7021e58000172c3d0.jpg 640w, https://images.leflair.vn/w1080/q85/5bd183c7021e58000172c3d0.jpg 1080w, https://images.leflair.vn/w1440/q85/5bd183c7021e58000172c3d0.jpg 1440w" sizes="(max-width: 575px) 100vw, (max-width: 767px) 540px, (max-width: 991px) 336px, (min-width: 992px) 456px, (min-width: 1200px) 546px, 100vw" alt="Storm Đồng Hồ Nam & Nữ" /></div>
        <div className="sale-card__currentSaleInfo___2LkMa">
          <div className="sale-card__currentSaleTitle___1eVtM">Storm Đồng Hồ Nam &amp; Nữ</div>
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
                          <li><a className="email" href="mailto:help@leflair.vn">help@leflair.vn</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="footer__col-md-2___1vyOI footer__col-4___-XXVx footer__company___GKAFU">
                      <h4 className="footer__title___2Zw_F">Doanh nghiệp</h4>
                      <div className="footer__body___2_pAR">
                        <ul className="list-unstyled">
                          <li><a href="https://pages.leflair.vn/about-us">Về Leflair</a></li>
                          <li><a href="https://styleguide.leflair.vn/">Style Guide</a></li>
                          <li><a href="https://pages.leflair.vn/partners">Hợp tác</a></li>
                          <li><a href="https://pages.leflair.vn/genuine-guarantee">Chính hãng</a></li>
                          <li><a href="https://careers.leflair.vn/">Tuyển dụng</a></li>
                          <li><a href="/brands">Thương hiệu</a></li>
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
                      @ 2018 leflair.vn</span></div>
                        <div className="footer__col-lg-6___2jvLt footer__address___aiHX9">Công ty Cổ phần Leflair - Tầng 16,
                    Tháp A2, Tòa nhà Viettel, 285 Cách Mạng Tháng Tám, P.12, Q.10, TP.HCM</div>
                      </div>
                    </div>
                    <div className="footer__col-lg-4___excjO footer__col-md-4___2KXw4">Cơ quan cấp: Sở Kế hoạch và Đầu tư
                Thành phố Hồ Chí Minh</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__cart___yD7P6 ">
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
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">10%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>1.500.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={0} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">150.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>600.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={1} className="slick-slide slick-active" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">100.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">Vietin Bank</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>0₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={2} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">10%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>1.500.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={3} className="slick-slide slick-cloned" style={{ width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá </span><span className="cart-promo-list__bold-text___1wUCM">150.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>600.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
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
            <a id="go-to-top" className="go-to-top__go-to-top___7XKAr" href="javascript:void(0)"><span className="go-to-top__icon___217Vz ic-ic-arrow-up" /></a>
          </div>
        </div>
      </main>

    )

  }
}
function mapStateToProps(state) {

  return state;
}
const connected = connect(mapStateToProps)(Ebay);
export { connected as Ebay } 