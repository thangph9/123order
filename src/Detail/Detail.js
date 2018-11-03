import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import '../Sections/style.css';
import './slick.css';
import './slick-themes.css';
import Slider from "react-slick";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dem:0
    }
  }
  componentWillMount() {
    document.documentElement.scrollTop = 0
  }
  handleClick() {
    document.documentElement.scrollTop = 0
  }
  handleClickDesciption(idDetail){
    var body=document.getElementById("app__body___3NlTJ");
    var width = body.offsetWidth;
   
    if(width<767){
      var id=document.getElementById(idDetail);
      if(id.classList.length>2){
        id.classList.remove("open"); 
        id.classList.remove("product-description__panel-open___2KMq2");return;
      }
      var allClass=document.getElementsByClassName("product-description__group___3Z2qF");
      console.log(allClass)
      for(let i=0;i<allClass.length;i++){
      console.log(allClass[i].id)
        var element=document.getElementById(allClass[i].id);
        element.classList.remove('open');
        element.classList.remove('product-description__panel-open___2KMq2');
      }
      id.classList.toggle("open"); 
      id.classList.toggle("product-description__panel-open___2KMq2");
    }
    else{
      var element=document.getElementById(idDetail);
      element.classList.toggle("open"); 
      element.classList.toggle("product-description__panel-open___2KMq2");
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      dots: true
    };
    return (
      <main id="app__body___3NlTJ" className="app__body___3NlTJ" data-reactroot>
        <div>
          <div>
            <div className="loading-bar" style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center 0px', transition: 'transform 800ms linear 0s', width: '100%', willChange: 'transform, opacity', position: 'fixed', zIndex: 10002, backgroundColor: 'rgb(14, 192, 232)', height: 3 }} />
            <div style={{ display: 'table', clear: 'both' }} />
          </div>
          <div className="default-layout__container___13v1V false">
            <div className="backdrop__body-backdrop___1rvky  " />
            <div className="header__header___1t3MH false">
              <nav className="header__my-navbar___2Cghd header__navbar-toggleable-sm___pR4tF header__nav-header___3lWCb">
                <div className="container__container___1fvX0 header__container___2d-Oi">
                  <div className="hidden-md-up header__my-navbar-toggler___2PiaS"><button className="header__btn-icon___17D-i" type="button"><i className="ic-ic-user" /></button></div>
                  <Link to={`/home`} className="header__navbar-brand___SzzgD" ><img style={{ position: 'relative', top: '4px' }} src="/img/logo123order.png" /></Link>
                  <div className="clearfix collapse header__navbar-collapse___2AK1h">
                    <Link to={`/home`} className="hidden-md-up header__navbar-brand___SzzgD" ><img src="/img/logo123order.png" /></Link>
                    <ul className="hidden-md-down header__navbar-nav___9cfBy header__navbar-left___25OFe">
                      <li className="header__nav-item___MQLXP"><a className="header__nav-link___3W4sc " href="/Women">Amazon</a></li>
                      <li className="header__nav-item___MQLXP"><a className="header__nav-link___3W4sc " href="/Men">Ebay</a></li>
                      <li className="header__nav-item___MQLXP"><a className="header__nav-link___3W4sc " href="/Home">Adidas</a></li>
                      <li className="header__nav-item___MQLXP"><a className="header__nav-link___3W4sc " href="/Kids">Nike</a></li>
                    </ul>
                    <ul className="header__navbar-nav___9cfBy header__navbar-right___2_zf5">
                      <li className="header__nav-item___MQLXP">
                        <div className="undefined language-dropdown__dropdown____KQAB language-dropdown__dropdown-section___2Exp9 ">
                          <a className="text-uppercase language-dropdown__nav-link___2sOBe language-dropdown__dropdown-toggle___3DM4H" href="javascript:void(0)">vn</a>
                          <ul className="language-dropdown__dropdown-menu___2iFhf">
                            <li className="language-dropdown__active___23oVE"><a className="language-dropdown__dropdown-item___3bDVi" href="javascript:void(0)">Tiếng Việt (vn)</a></li>
                            <li><a className="language-dropdown__dropdown-item___3bDVi" href="javascript:void(0)">English (en)</a></li>
                          </ul>
                        </div>
                      </li>
                      <li className="header__nav-item___MQLXP">
                        <div className="auth-buttons__auth___33bfZ"><a className="auth-buttons__nav-link___1DCMU auth-buttons__btn-sign-in___1nV-O" href="/auth/signin?redirect=/products/bo-vong-tay-mat-trang-charm-ngoi-sao-and-vong-tay-thach-anh-toc-den-charm-hoa-mai-5bd2ceb8001f375c3ce6b71e">Đăng nhập</a><a className="auth-buttons__nav-link___1DCMU auth-buttons__btn-register___3sIO1" href="/auth/register">Tạo tài khoản</a></div>
                      </li>
                    </ul>
                  </div>
                  <button className="header__cart-icon___38YSW cart-button__btn-cart___2KPCq" type="button"><i className="ic-ic-bag cart-button__icon___3QHeM" /></button>
                </div>
              </nav>
              <div />
            </div>

            <div className="container__container___1fvX0 ">
              <div className="product__product___2plEK">
                <div className="clearfix product__product-header___2yYGL">
                  <ol className="undefined breadcrumb__breadcrumb___3F6K8">
                    <li className="breadcrumb__breadcrumb-item___3ytpk"><a href="/">Ưu đãi</a></li>
                    <li className="breadcrumb__breadcrumb-item___3ytpk"><a href="/sales/j-natural-stonesr-trang-suc-phong-thuy-5bd6c4d93bc9335db599c3b6">J Natural Stones® Trang Sức Phong Thủy</a></li>
                    <li className="breadcrumb__breadcrumb-item___3ytpk">
                      <h1>Bộ Vòng Tay Mặt Trăng Charm Ngôi Sao &amp; Vòng Tay Thạch Anh Tóc Đen Charm Hoa Mai</h1>
                    </li>
                  </ol>
                  <div className="product__data-layer-category___1lWBV">Women</div>
                </div>
                <div>
                  <div className="row__row___2roCA ">
                    <div className="product__col-md-7___kn-eV product__slider-section___2raV3">
                      <div className="row__row___2roCA  undefined">
                        <div className="images-slider__col-lg-2___1yd0l images-slider__slider-container___2AcvT">
                          <div className="hidden-md-down images-slider__slider___2EiI8">
                            <div className="ic-ic-arrow-up images-slider__images-navigation___KCIEC images-slider__navigation-up___yqRaw undefined" />
                            <ul className="list-unstyled images-slider__list-thumbnail-inner___2vzS2" id="images-container">
                              <li className="images-slider__image-border___2hkRy "><img className="images-slider__image___wW9Yw" src="https://images.leflair.vn/w90/q85/5bda7a8502c08e863b71bb2b.jpg" srcSet="https://images.leflair.vn/w90/q85/5bda7a8502c08e863b71bb2b.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a8502c08e863b71bb2b.jpg 144w" sizes="80px" /></li>
                              <li className="images-slider__image-border___2hkRy "><img className="images-slider__image___wW9Yw" src="https://images.leflair.vn/w90/q85/5bda7a852b25c2eab5b33bc9.jpg" srcSet="https://images.leflair.vn/w90/q85/5bda7a852b25c2eab5b33bc9.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a852b25c2eab5b33bc9.jpg 144w" sizes="80px" /></li>
                              <li className="images-slider__image-border___2hkRy "><img className="images-slider__image___wW9Yw" src="https://images.leflair.vn/w90/q85/5bda7a9793073444b0761dc1.jpg" srcSet="https://images.leflair.vn/w90/q85/5bda7a9793073444b0761dc1.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a9793073444b0761dc1.jpg 144w" sizes="80px" /></li>
                              <li className="images-slider__image-border___2hkRy images-slider__image-selected___3ftth"><img className="images-slider__image___wW9Yw" src="https://images.leflair.vn/w90/q85/5bda7a922b25c20d05b33bca.jpg" srcSet="https://images.leflair.vn/w90/q85/5bda7a922b25c20d05b33bca.jpg 90w, https://images.leflair.vn/w144/q85/5bda7a922b25c20d05b33bca.jpg 144w" sizes="80px" /></li>
                            </ul>
                            <div className="ic-ic-arrow-down images-slider__images-navigation___KCIEC images-slider__navigation-down___2GHVX undefined" />
                          </div>
                          <div className="hidden-lg-up images-slider__slider-wrapper___1hmGf">
                          <Slider  {...settings}>
                            <img className="slick-slide slick-active images-slider__image___wW9Yw" src="https://images.leflair.vn/w380/q85/5bda7a8502c08e863b71bb2b.jpg" srcSet="https://images.leflair.vn/w380/q85/5bda7a8502c08e863b71bb2b.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a8502c08e863b71bb2b.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a8502c08e863b71bb2b.jpg 850w" sizes style={{ outline: 'none', width: 447 }} /><img className="slick-slide images-slider__image___wW9Yw" src="https://images.leflair.vn/w380/q85/5bda7a852b25c2eab5b33bc9.jpg" srcSet="https://images.leflair.vn/w380/q85/5bda7a852b25c2eab5b33bc9.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a852b25c2eab5b33bc9.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a852b25c2eab5b33bc9.jpg 850w" sizes style={{ outline: 'none', width: 447 }} /><img className="slick-slide images-slider__image___wW9Yw" src="https://images.leflair.vn/w380/q85/5bda7a9793073444b0761dc1.jpg" srcSet="https://images.leflair.vn/w380/q85/5bda7a9793073444b0761dc1.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a9793073444b0761dc1.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a9793073444b0761dc1.jpg 850w" sizes style={{ outline: 'none', width: 447 }} /><img className="slick-slide images-slider__image___wW9Yw" src="https://images.leflair.vn/w380/q85/5bda7a922b25c20d05b33bca.jpg" srcSet="https://images.leflair.vn/w380/q85/5bda7a922b25c20d05b33bca.jpg 380w, https://images.leflair.vn/w640/q85/5bda7a922b25c20d05b33bca.jpg 640w, https://images.leflair.vn/w850/q85/5bda7a922b25c20d05b33bca.jpg 850w" sizes style={{ outline: 'none', width: 447 }} />
                          </Slider>
                            <div className="images-slider__sold-out-overlay___2Avrv">Hết hàng</div>
                          </div>
                        </div>
                        <div className="hidden-md-down images-slider__col-lg-10___3uZXv">
                          <div className="images-slider__main-image___1MFAY">
                            <img className="images-slider__image___wW9Yw" src="https://images.leflair.vn/w580/q85/5bda7a922b25c20d05b33bca.jpg" srcSet="https://images.leflair.vn/w580/q85/5bda7a922b25c20d05b33bca.jpg 580w, https://images.leflair.vn/w1030/q85/5bda7a922b25c20d05b33bca.jpg 1030w, https://images.leflair.vn/w1080/q85/5bda7a922b25c20d05b33bca.jpg 1080w" sizes />
                            <div className="images-slider__sold-out-overlay___2Avrv">Hết hàng</div>
                            <img id="zoom-image" className="images-slider__zoom-image___3jo-j" src="https://images.leflair.vn/w1350/q85/5bda7a922b25c20d05b33bca.jpg" srcSet="https://images.leflair.vn/w1350/q85/5bda7a922b25c20d05b33bca.jpg 1350w, https://images.leflair.vn/w1440/q85/5bda7a922b25c20d05b33bca.jpg 1440w" sizes style={{ top: '-138.534px', left: '-300.779px' }} />
                            <div className="images-slider__overlay___CJo-l" />
                          </div>
                        </div>
                      </div>
                      <div className="hidden-sm-down product__brand-info___1s9-O">
                        <img src="https://leflair-assets.storage.googleapis.com/59ca0a3be1b357001a65d626.jpg" />
                        <h4 className="brand-info__heading___EhwGa">"Đem đến cho bạn nhiều điều bình an"</h4>
                        <div className="brand-info__desc___19Dk4">Trang sức đá tự nhiên không chỉ là nguồn thu hút những năng lượng tốt mà còn để làm "điệu". J Natural Stones® ra đời với giá cả cạnh tranh, chế tác tinh xảo, sản phẩm kiểm định nguồn gốc rõ ràng sẽ là phụ kiện tạo được điểm nhấn làm nổi bật cá tính riêng biệt trong mỗi người.</div>
                      </div>
                    </div>
                    <div className="product__right-pane___rYPsq product__col-md-5___21J8E">
                      <div className="product-info__product-info___10ne- product__product-info___3onGQ">
                        <h4 className="product-info__brand___3akKm">J Natural Stones®</h4>
                        <h4 className="product-info__title___2J672">Bộ Vòng Tay Mặt Trăng Charm Ngôi Sao &amp; Vòng Tay Thạch Anh Tóc Đen Charm Hoa Mai</h4>
                        <div id="product-prices"><span className="product-info__retail-price___2eFS9">1.690.000₫</span><span className="product-info__sale-price___1unp2">1.149.000₫</span></div>
                      </div>
                      <p className="product__few-items-notify___1Q8z3">Chỉ còn lại 2 sản phẩm</p>
                      <div className="product__add-to-bag___1tWsb"><button type="button" className="add-to-bag__btn___2i-kl add-to-bag__btn-primary___HSF2G add-to-bag__btn-block___3NXJe">Thêm vào giỏ hàng</button></div>
                      <div className="product__sale-timer___RypVA">
                        <p>Ưu đãi này sẽ kết thúc trong:</p>
                        <div className="row__row___2roCA sale-timer__timer-row___1JwVa product__flex-center___1bEVZ">
                          <div>
                            <div>06</div>
                            <div>Ngày</div>
                          </div>
                          <div>
                            <div>10</div>
                            <div>Giờ</div>
                          </div>
                          <div>
                            <div>01</div>
                            <div>Phút</div>
                          </div>
                          <div>
                            <div>36</div>
                            <div>Giây</div>
                          </div>
                        </div>
                      </div>
                      <div className="product__additional-info___34ReF">
                        <div>
                          <div className="additional-info__item___38NHG"><i className="additional-info__icon___2Ujcw ic-ic-guarantee" /> Cam kết 100% chính hãng</div>
                          <div className="additional-info__item___38NHG"><i className="additional-info__icon___2Ujcw ic-ic-ship" />Giao hàng dự kiến: <span className="additional-info__date-delivery___rKzWW">Thứ 3 6/11 - Thứ 2 12/11</span></div>
                          <div className="additional-info__item___38NHG"><i className="additional-info__icon___2Ujcw additional-info__rotate___3gDnQ ic-ic-return" /> Đổi trả trong 7 ngày<a className="additional-info__link-secondary___1l25I" href="https://support.leflair.vn/hc/vi/articles/214167448-Ch%C3%ADnh-s%C3%A1ch-tr%E1%BA%A3-h%C3%A0ng-v%C3%A0-ho%C3%A0n-ti%E1%BB%81n" target="blank">Xem chi tiết <span className="additional-info__open-tab-icon___1aJYK ic-ic-open-new-tab" /> </a></div>
                        </div>
                      </div>
                      <div className="product__product-desc___3eim0">
                        <div>
                          <div id="info-product" className="product-description__group___3Z2qF ">
                            <h4 className="product-description__panel-title___1aoFo">
                              <a onClick={()=>this.handleClickDesciption('info-product')} className="product-description__accordion-toggle___1kmrM" href="javascript:void(0)">
                                <div className="product-description__title___Xh_fg">Thông tin sản phẩm<span className="product-description__btn-collapse___3Pk93"><i className="ic-ic-minus product-description__expanded___wm98V" /><i className="ic-ic-plus product-description__collapsed___ahwQq" /></span></div>
                              </a>
                            </h4>
                            <div className="collapse product-description__panel-collapse___3G-5Q">
                              <div className="product-description__product-info___nWbK5">
                                <ul className="product-description__desc-list___3qcUM">
                                  <li>
                                    <div>Gia công: Việt Nam</div>
                                  </li>
                                  <li>
                                    <div>
                                      Ý nghĩa:
                          <ul>
                                        <li>Đá mặt trăng được coi như hấp thụ tinh hoa của mặt trăng, mang đến sự êm đềm và khiến tâm trí không bị xao nhãng, xóa bỏ căng thẳng, nguôi ngoai cơn giận. Ngoài ra, còn có tác động tới với thận niệu đạo và bàng quang, điều trị phù thũng.</li>
                                        <li>Thạch anh tóc đen được coi là viên đá của tình cảm, giúp cân bằng cảm xúc, xóa bỏ trạng thái căng thẳng, trầm cảm kéo dài. </li>
                                        <li>Xua đuổi hư khí, giúp người đeo tránh được điềm xui rủi, mang đến vận may, cơ hội.</li>
                                      </ul>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div id="material" className="product-description__group___3Z2qF  ">
                            <h4 className="product-description__panel-title___1aoFo">
                              <a onClick={()=>this.handleClickDesciption('material')} className="product-description__accordion-toggle___1kmrM" href="javascript:void(0)">
                                <div className="product-description__title___Xh_fg">Chất liệu &amp; Cách sử dụng<span className="product-description__btn-collapse___3Pk93"><i className="ic-ic-minus product-description__expanded___wm98V" /><i className="ic-ic-plus product-description__collapsed___ahwQq" /></span></div>
                              </a>
                            </h4>
                            <div className="collapse product-description__panel-collapse___3G-5Q">
                              <div className="product-description__material-care___1szER">
                                <ul className="product-description__desc-list___3qcUM">
                                  <li>
                                    <div>Chất liệu: Đá mặt trăng, đá thạch anh tóc đen, bạc 925</div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div id="size-table" className="product-description__group___3Z2qF  ">
                            <h4 className="product-description__panel-title___1aoFo">
                              <a onClick={()=>this.handleClickDesciption('size-table')} id="size-table-click" className="product-description__accordion-toggle___1kmrM" href="javascript:void(0)">
                                <div className="product-description__title___Xh_fg">Chi tiết kích cỡ<span className="product-description__btn-collapse___3Pk93"><i className="ic-ic-minus product-description__expanded___wm98V" /><i className="ic-ic-plus product-description__collapsed___ahwQq" /></span></div>
                              </a>
                            </h4>
                            <div className="collapse product-description__panel-collapse___3G-5Q">
                              <div>
                                <div className="product-description__size-fit___1p0wI">
                                  <ul className="product-description__desc-list___3qcUM">
                                    <li>
                                      <div>Đường kính: 6cm</div>
                                    </li>
                                    <li>
                                      <div>Hạt đá mặt trăng: 0.3cm</div>
                                    </li>
                                    <li>
                                      <div>Hạt đá thạch anh tóc đen: 0.5cm</div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div id='info-brand' className="product-description__group___3Z2qF hidden-md-up ">
                            <h4 className="product-description__panel-title___1aoFo">
                              <a onClick={()=>this.handleClickDesciption('info-brand')} className="product-description__accordion-toggle___1kmrM" href="javascript:void(0)">
                                <div className="product-description__title___Xh_fg"><span><img className="product-description__about-the-brand-logo___h7FTg" src="https://leflair-assets.storage.googleapis.com/59ca0a3be1b357001a65d626.jpg" /><span className="product-description__about-the-brand-heading___20E5W">Thông tin thương hiệu</span></span><span className="product-description__btn-collapse___3Pk93"><i className="ic-ic-minus product-description__expanded___wm98V" /><i className="ic-ic-plus product-description__collapsed___ahwQq" /></span></div>
                              </a>
                            </h4>
                            <div className="collapse product-description__panel-collapse___3G-5Q">
                              <div className="product-description__about-the-brand___3lT4W">
                                <h4 className="product-description__heading___Mrl6O">"Đem đến cho bạn nhiều điều bình an"</h4>
                                <div className="product-description__desc___Pym2G">Trang sức đá tự nhiên không chỉ là nguồn thu hút những năng lượng tốt mà còn để làm "điệu". J Natural Stones® ra đời với giá cả cạnh tranh, chế tác tinh xảo, sản phẩm kiểm định nguồn gốc rõ ràng sẽ là phụ kiện tạo được điểm nhấn làm nổi bật cá tính riêng biệt trong mỗi người.</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="product-info" className="row__row___2roCA product__extra-info___1r8vd extra-info__extra-info-section___378qZ">
                    <div className="extra-info__extra-info___HmKpD extra-info__col-md-6___3ZC3K extra-info__col-sm-12___2y7dc">
                      <div className="extra-info__info-image___1Kd9E"><img src="/img/product-extra-guarantee.jpg" alt="Product extra guarantee" /></div>
                      <div className="extra-info__info-text___CTc2n">
                        <div className="extra-info__title___1Itso">Bảo đảm 100% chính hãng</div>
                        <ul className="extra-info__text-list-ul___6CagB">
                          <li className="extra-info__text-list___21vcj">123order chỉ làm việc trực tiếp với các thương hiệu và nhà phân phối chính thức</li>
                          <li className="extra-info__text-list___21vcj">123order kiểm soát chặt chẽ quy trình hàng hóa được hợp pháp giao dịch, nhập khẩu và khai thuế</li>
                          <li className="extra-info__text-list___21vcj">123order vận hành nghiêm ngặt quy trình kiểm soát chất lượng của từng sản phẩm trước mỗi chương trình ưu đãi</li>
                        </ul>
                      </div>
                    </div>
                    <div className="extra-info__extra-info___HmKpD extra-info__col-md-6___3ZC3K extra-info__col-sm-12___2y7dc">
                      <div className="extra-info__info-image___1Kd9E"><img src="/img/product-extra-return.jpg" alt="Product extra guarantee" /></div>
                      <div className="extra-info__info-text___CTc2n">
                        <div className="extra-info__title___1Itso">Trả hàng đơn giản theo 4 bước</div>
                        <ul className="extra-info__table-group___1xJ6Q">
                          <li>
                            <div className="extra-info__order-number___2VvsH">1</div>
                            <div className="extra-info__item-text___28eEv">Liên hệ bộ phận CSKH 123order</div>
                          </li>
                          <li>
                            <div className="extra-info__order-number___2VvsH">2</div>
                            <div className="extra-info__item-text___28eEv">Nhân viên đến nhận sản phẩm hoàn trả</div>
                          </li>
                          <li>
                            <div className="extra-info__order-number___2VvsH">3</div>
                            <div className="extra-info__item-text___28eEv">123order xác nhận sản phẩm và hóa đơn</div>
                          </li>
                          <li>
                            <div className="extra-info__order-number___2VvsH">4</div>
                            <div className="extra-info__item-text___28eEv">Hoàn tiền trong vòng 7 ngày làm việc</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="container__container___1fvX0 product__full-view-mobile___2dg3r">
              <div className="product__lower-content___SU6_q">
                <div className="product__recently-viewed-container___1z-1h">
                  <div>
                    <div className="section-title__title-wrap___9DwpB recently-viewed__title-container___1k2rh">
                      <h2 className="section-title__title___2Dw2G">Đã xem gần đây</h2>
                    </div>
                    <div id="product-carousel-recently-viewed" className="undefined products-carousel__products-carousel___Wk8_0">
                      <div className="products-carousel__outerbox___2Ng9R">
                        <div className="products-carousel__innerbox___1Jnq1">
                          <div className="products-carousel__product-card-container___7-x0W">
                            <a className="products-carousel__product-card___2cXOo product-card__productCard___2lSYu" href="/products/Giày Brogues Nam Grain Đen-5b11096f415d08000130e0e5?color=GRA">
                              <div>
                                <div className="product-card__imageContainer___1apY_  "><img className="product-card__image___QEKAk" src="https://images.leflair.vn/w300/q85/5b2b10ad38edf90001bb8eb7.jpg" srcSet="https://images.leflair.vn/w300/q85/5b2b10ad38edf90001bb8eb7.jpg 300w" sizes="140px, (min-width: 768px) 205px" alt="Giày Brogues Nam Grain Đen" /></div>
                                <div className="product-card__titleContainer___1HE6o">
                                  <h4 className="product-card__brand___3np4R">Efora</h4>
                                  <h4 className="product-card__title___3l79X">Giày Brogues Nam Grain Đen</h4>
                                  <div><span className="product-card__retailPrice___2urqH">9.360.000₫</span><span className="product-card__salePrice___3PSWy">3.239.000₫</span></div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="products-carousel__product-card-container___7-x0W">
                            <a className="products-carousel__product-card___2cXOo product-card__productCard___2lSYu" href="/products/Đồng Hồ Nam Automatic Meteorite Grey Dial-5a740cf6fedb3c001bc0995b">
                              <div>
                                <div className="product-card__imageContainer___1apY_  "><img className="product-card__image___QEKAk" src="https://images.leflair.vn/w300/q85/5a93eefe511a4e001ce0f989.jpg" srcSet="https://images.leflair.vn/w300/q85/5a93eefe511a4e001ce0f989.jpg 300w" sizes="140px, (min-width: 768px) 205px" alt="Đồng Hồ Nam Automatic Meteorite Grey Dial" /></div>
                                <div className="product-card__titleContainer___1HE6o">
                                  <h4 className="product-card__brand___3np4R">Thomas Earnshaw</h4>
                                  <h4 className="product-card__title___3l79X">Đồng Hồ Nam Automatic Meteorite Grey Dial</h4>
                                  <div><span className="product-card__retailPrice___2urqH">42.862.000₫</span><span className="product-card__salePrice___3PSWy">15.999.000₫</span></div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="products-carousel__product-card-container___7-x0W">
                            <a className="products-carousel__product-card___2cXOo product-card__productCard___2lSYu" href="/products/Bộ 2 Bình Thủy Tinh Blossom 1L-5af958ce3d5ead000f0981a0">
                              <div>
                                <div className="product-card__imageContainer___1apY_  "><img className="product-card__image___QEKAk" src="https://images.leflair.vn/w300/q85/5b07c4ba024f5e00016fbf1d.jpg" srcSet="https://images.leflair.vn/w300/q85/5b07c4ba024f5e00016fbf1d.jpg 300w" sizes="140px, (min-width: 768px) 205px" alt="Bộ 2 Bình Thủy Tinh Blossom 1L" /></div>
                                <div className="product-card__titleContainer___1HE6o">
                                  <h4 className="product-card__brand___3np4R">Libbey</h4>
                                  <h4 className="product-card__title___3l79X">Bộ 2 Bình Thủy Tinh Blossom 1L</h4>
                                  <div><span className="product-card__retailPrice___2urqH">1.096.000₫</span><span className="product-card__salePrice___3PSWy">379.000₫</span></div>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="products-carousel__product-card-container___7-x0W">
                            <a className="products-carousel__product-card___2cXOo product-card__productCard___2lSYu" href="/products/Bộ Drap & Chăn Sylvan 160x200 (6 Món)-5b2a2c7d38edf90001bb8b7d?color=FLO-MAROON">
                              <div>
                                <div className="product-card__imageContainer___1apY_  "><img className="product-card__image___QEKAk" src="https://images.leflair.vn/w300/q85/5b3309f39b035a000102e5df.jpg" srcSet="https://images.leflair.vn/w300/q85/5b3309f39b035a000102e5df.jpg 300w" sizes="140px, (min-width: 768px) 205px" alt="Bộ Drap & Chăn Sylvan 160x200 (6 Món)" /></div>
                                <div className="product-card__titleContainer___1HE6o">
                                  <h4 className="product-card__brand___3np4R">Novelle</h4>
                                  <h4 className="product-card__title___3l79X">Bộ Drap &amp; Chăn Sylvan 160x200 (6 Món)</h4>
                                  <div><span className="product-card__retailPrice___2urqH">3.400.000₫</span><span className="product-card__salePrice___3PSWy">2.129.000₫</span></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="products-carousel__arrow___34SUB products-carousel__left___14dZg"><a className="products-carousel__arrow-btn___1MhQ5"><i className="ic-ic-arrow-left products-carousel__icon___OV1Rh" /></a></div>
                      <div className="products-carousel__arrow___34SUB products-carousel__right___2ZsRA"><a className="products-carousel__arrow-btn___1MhQ5"><i className="ic-ic-arrow-right products-carousel__icon___OV1Rh" /></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__footerSection___1-2XO" id="footer">
              <div className="container__container___1fvX0 ">
                <div className="footer__upper___3xatR">
                  <div className="row__row___2roCA ">
                    <div className="footer__col-md-2___1vyOI footer__socialLinks___3S5w9"><Link to={`/home`} className="footer__logo___SNGnI" style={{ marginLeft: '25px' }} ><img onClick={() => this.handleClick()} className="footer__image___1wrDs" src="/img/123orderwhite.png" /></Link>
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
                      @ 2018 123order.vn</span></div>
                        <div className="footer__col-lg-6___2jvLt footer__address___aiHX9">Công ty Cổ phần 123order - Tầng 18,
                    Tháp A, Tòa nhà CT2E chung cư VOV, Đường Lương Thế Vinh, Hà Nội</div>
                      </div>
                    </div>
                    <div className="footer__col-lg-4___excjO footer__col-md-4___2KXw4">Cơ quan cấp: Sở Kế hoạch và Đầu tư
                Thành phố Hà Nội</div>
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
                <div className="slick-initialized slick-slider"><button type="button" data-role="none" className="slick-arrow slick-prev" style={{ display: 'block' }}> Previous</button>
                  <div className="slick-list">
                    <div className="slick-track" style={{ opacity: 1, transform: 'translate3d(-1350px, 0px, 0px)', width: 2700 }}>
                      <div data-index={-1} className="slick-slide slick-cloned" style={{ width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá
                            </span><span className="cart-promo-list__bold-text___1wUCM">15%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">Standard Chartered </span><span> khi mua hàng trên
                            </span><span className="cart-promo-list__bold-text___1wUCM"><span>700.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={0} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá
                            </span><span className="cart-promo-list__bold-text___1wUCM">150.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>600.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={1} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá
                            </span><span className="cart-promo-list__bold-text___1wUCM">100.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">Vietin Bank</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>0₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={2} className="slick-slide slick-active" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá
                            </span><span className="cart-promo-list__bold-text___1wUCM">10%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">SCB</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>800.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={3} className="slick-slide" tabIndex={-1} style={{ outline: 'none', width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá
                            </span><span className="cart-promo-list__bold-text___1wUCM">15%</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">Standard Chartered </span><span> khi mua hàng trên
                            </span><span className="cart-promo-list__bold-text___1wUCM"><span>700.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                      <div data-index={4} className="slick-slide slick-cloned" style={{ width: 450 }}>
                        <p className="cart-promo-list__content___1N3l1 cart-promo-list__multi-item____Q_7w"><span>Giảm giá
                            </span><span className="cart-promo-list__bold-text___1wUCM">150.000₫</span><span> cho thẻ </span><span className="cart-promo-list__bold-text___1wUCM">HSBC</span><span> khi mua hàng trên </span><span className="cart-promo-list__bold-text___1wUCM"><span>600.000₫</span>.</span><a href="https://pages.leflair.vn/promotions" target="blank"> Chi tiết→</a></p>
                      </div>
                    </div>
                  </div><button type="button" data-role="none" className="slick-arrow slick-next" style={{ display: 'block' }}>
                    Next</button>
                </div>
              </div>
              <div className="cart__body___XUP_6 cart__empty___1VFD2">
                <div className="cart__cart-empty___2VwBC">
                  <div className="cart__icon___DWUE4"><img src="https://www.leflair.vn/images/empty-bag.jpg" /></div>
                  <div>Giỏ hàng của bạn còn trống</div>
                  <div><button className="cart__btn___1bOR1 cart__btn-primary___2una7 cart__button-shopping___qfkgg" type="button">Tiếp
                        tục mua sắm!</button></div>
                </div>
              </div>
            </div><a id="go-to-top" className="go-to-top__go-to-top___7XKAr" href="#"><span className="go-to-top__icon___217Vz ic-ic-arrow-up" /></a>
          </div>
        </div>
      </main>

    )

  }
}
function mapStateToProps(state) {

  return state;
}
const connected = connect(mapStateToProps)(Detail);
export { connected as Detail } 