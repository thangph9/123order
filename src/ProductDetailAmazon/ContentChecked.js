import React from "react";
import { connect } from "react-redux";
class ContentChecked extends React.Component{
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
            <section className="scroll-products-block is-checked">
            <div className="container">
                <div className="block-head">
                    <div className="block-title">Sản phẩm liên quan</div>
                </div>{/* .block-head*/}
                <div className="block-main">
                    <div className="swiper-container swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide swiper-slide-next" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/ugreen-ipad-stander-tablet-halterung-tablet-stander-fur-laptop-bis-zu-105-zoll-B01ISL5TLC.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/31fvr7WwpDL._SL500_SS135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/ugreen-ipad-stander-tablet-halterung-tablet-stander-fur-laptop-bis-zu-105-zoll-B01ISL5TLC.html"><span className="title-inner">UGREEN iPad Ständer Tablet Halterung Tablet Ständer für Laptop bis zu 10.5 Zoll</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/soonhua-tablet-halter-360-drehbarer-aluminiumlegierung-tischplattenhalter-tablet-stander-fur-ipad-pro-ipad-64321-ipad-air-2-ipad-mini-und-anderen-tablet-B014QZ2RE6.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41tZ3-9BB7L._SL500_SS135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/soonhua-tablet-halter-360-drehbarer-aluminiumlegierung-tischplattenhalter-tablet-stander-fur-ipad-pro-ipad-64321-ipad-air-2-ipad-mini-und-anderen-tablet-B014QZ2RE6.html"><span className="title-inner">SOONHUA Tablet-Halter 360 ° drehbarer Aluminiumlegierung-Tischplattenhalter-Tablet Ständer für iPad Pro iPad 6/4/3/2/1 iPad Air 2 iPad Mini und Anderen Tablet</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-stander-lamicall-multi-winkel-tablet-halter-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B072MZNP1L.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41LReZXGdfL._SL500_SS135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-stander-lamicall-multi-winkel-tablet-halter-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B072MZNP1L.html"><span className="title-inner">Tablet Ständer, Lamicall Multi-Winkel Tablet Halter : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5"-13" - Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-schwarz-B06XCD4PDF.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41ygXIRVJEL._SL500_SY135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-schwarz-B06XCD4PDF.html"><span className="title-inner">Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5"-13" - Schwarz</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-silber-B01LQE4ZS6.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41J6chjpVdL._SL500_SY135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-silber-B01LQE4ZS6.html"><span className="title-inner">Handy Ständer, Lamicall Handy Halterung : Handyhalterung, Halter, Phone Ständer für iPhone Xs Max, Xs, XR, X, 8, 7, 6s 6 / Plus, SE, 5, Samsung S7 S8, Huawei, Tisch Zubehör, Schreibtisch, andere Smartphone - Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/multi-winkel-handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-silber-B01M320AE4.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41rahQ7xaHL._SL500_SY135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/multi-winkel-handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-silber-B01M320AE4.html"><span className="title-inner">Multi-Winkel Handy Ständer, Lamicall Handy Halterung : Handyhalterung, Halter, Phone Ständer für iPhone Xs Max, Xs, XR, X, 8, 7, 6s 6 / Plus, SE, 5, Samsung S7 S8, Huawei, Tisch Zubehör, Schreibtisch, andere Smartphone - Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/abovetek-eleganter-tablet-stand-aluminium-ipad-stand-halter-desktop-kiosk-pos-stander-fur-7-13-zoll-ipad-pro-air-mini-galaxy-tab-nexus-tablet-halterung-fur-store-showcase-buro-rezeption-kuche-B01KW7LSQK.html">
                                            <span className="field-inner parent-img-loaded">
                                                <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41LMJYTyrRL._SL500_SS135_.jpg" alt="img" style={{}} />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/abovetek-eleganter-tablet-stand-aluminium-ipad-stand-halter-desktop-kiosk-pos-stander-fur-7-13-zoll-ipad-pro-air-mini-galaxy-tab-nexus-tablet-halterung-fur-store-showcase-buro-rezeption-kuche-B01KW7LSQK.html"><span className="title-inner">AboveTEK Eleganter Tablet Stand, Aluminium iPad Stand Halter, Desktop Kiosk POS Ständer für 7-13 Zoll iPad Pro Air Mini Galaxy Tab Nexus, Tablet Halterung für Store Showcase Büro Rezeption Küche</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-halterung-syncwire-ipad-stander-verstellbarer-2270-grad-handy-tisch-stand-fur-ipad-pro-12910597-air-mini-iphone-x-876s6-plus-samsung-galaxy-tab-as2s3ee-lites8note-8-huawei-p10mate-10-kindle-schwarz-B077GRNQNW.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/51fDF-Sc7pL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-halterung-syncwire-ipad-stander-verstellbarer-2270-grad-handy-tisch-stand-fur-ipad-pro-12910597-air-mini-iphone-x-876s6-plus-samsung-galaxy-tab-as2s3ee-lites8note-8-huawei-p10mate-10-kindle-schwarz-B077GRNQNW.html"><span className="title-inner">Tablet Halterung Syncwire iPad Ständer - Verstellbarer 2*270-Grad Handy Tisch Stand für iPad Pro 12.9/10.5/9.7 Air Mini, iPhone X 8/7/6s/6 Plus, Samsung Galaxy Tab A/S2/S3/E/E Lite/S8/Note 8, Huawei P10/Mate 10, Kindle - Schwarz</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-stander-lamicall-multi-winkel-tablet-halter-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-grau-B072KDV6V1.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/412JuL78YiL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-stander-lamicall-multi-winkel-tablet-halter-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-grau-B072KDV6V1.html"><span className="title-inner">Tablet Ständer, Lamicall Multi-Winkel Tablet Halter : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5"-13" - Grau</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-schwarz-B01LQE4ZUE.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41w1jyAbWTL._SL500_SY135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-schwarz-B01LQE4ZUE.html"><span className="title-inner">Handy Ständer, Lamicall Handy Halterung : Handyhalterung, Halter, Phone Ständer für iPhone Xs Max, Xs, XR, X, 8, 7, 6s 6 / Plus, SE, 5, Samsung S7 S8, Huawei, Tisch Zubehör, Schreibtisch, andere Smartphone - Schwarz</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/omoton-stander-fur-ipad-pro-mehrere-winkel-alulegierung-mit-tragbarer-verstellbar-lade-dockingstation-fur-ipad-pro-129-zoll-ipad-pro-97-zoll-ipad-air-samsung-tablet-etc-stabil-und-durabel-halter-space-grau-B01K9RTSBK.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41UsoN2HC0L._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/omoton-stander-fur-ipad-pro-mehrere-winkel-alulegierung-mit-tragbarer-verstellbar-lade-dockingstation-fur-ipad-pro-129-zoll-ipad-pro-97-zoll-ipad-air-samsung-tablet-etc-stabil-und-durabel-halter-space-grau-B01K9RTSBK.html"><span className="title-inner">OMOTON Ständer für iPad Pro, mehrere Winkel, Alulegierung, mit tragbarer verstellbar Lade-Dockingstation für iPad Pro 12,9 Zoll, iPad Pro 9,7 Zoll, iPad Air, Samsung Tablet etc.[ stabil und durabel Halter ] Space grau</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/amazonbasics-tablet-stander-verstellbar-B006ZT4VA0.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41KK%2BOVaDzL._SL500_SY135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/amazonbasics-tablet-stander-verstellbar-B006ZT4VA0.html"><span className="title-inner">AmazonBasics Tablet-Ständer, verstellbar</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-stander-lamicall-multi-winkel-tablet-halter-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B07BFW58RP.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41DA0rGXz1L._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-stander-lamicall-multi-winkel-tablet-halter-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B07BFW58RP.html"><span className="title-inner">Tablet Ständer, Lamicall Multi-Winkel Tablet Halter : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5"-13" - silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B078HSK1QV.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41hcendcDyL._SL500_SY135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B078HSK1QV.html"><span className="title-inner">Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5"-13" - Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/omoton-tablet-stander-fur-ipad-97-proairmini-huawei-samsung-fire-maximale-105-zoll-mit-180-grad-einstellbarem-winkel-stabil-aluminium-handy-halterung-silber-B07CYTJRSP.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/416SjWjhO0L._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/omoton-tablet-stander-fur-ipad-97-proairmini-huawei-samsung-fire-maximale-105-zoll-mit-180-grad-einstellbarem-winkel-stabil-aluminium-handy-halterung-silber-B07CYTJRSP.html"><span className="title-inner">OMOTON Tablet Ständer für iPad 9.7 /Pro/Air/Mini, Huawei, Samsung, Fire, maximale (10.5&nbsp;Zoll), mit 180 Grad einstellbarem Winkel, stabil, Aluminium Handy Halterung-Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/ugreen-ipad-stander-tablet-halterung-tablet-stander-fur-laptop-bis-zu-105-zoll-B07CG71KQ1.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41HxWpQoO-L._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/ugreen-ipad-stander-tablet-halterung-tablet-stander-fur-laptop-bis-zu-105-zoll-B07CG71KQ1.html"><span className="title-inner">UGREEN iPad Ständer Tablet Halterung Tablet Ständer für Laptop bis zu 10.5 Zoll</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/mygadget-aluminium-tablet-e-reader-stander-verstellbare-stand-halterung-tisch-halter-fur-zb-apple-ipad-pro-air-minigalaxy-tab-a-s2-silber-B07DJ9FLW5.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41e8EfsAqkL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/mygadget-aluminium-tablet-e-reader-stander-verstellbare-stand-halterung-tisch-halter-fur-zb-apple-ipad-pro-air-minigalaxy-tab-a-s2-silber-B07DJ9FLW5.html"><span className="title-inner">MyGadget Aluminium Tablet &amp; E-Reader Ständer - Verstellbare Stand Halterung Tisch Halter für z.B. Apple iPad Pro, Air, Mini/Galaxy Tab A, S2 - Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/omoton-stander-fur-ipad-air-ipad-mini-ipad-pro-97-bis-zu-12-zollsamsung-tablet-stander-mit-einstellbarem-winkel-und-ladekabelauslass-stabil-aluminium-halterung-in-silber-B01C3Z7SMW.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41x1ML8m3pL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/omoton-stander-fur-ipad-air-ipad-mini-ipad-pro-97-bis-zu-12-zollsamsung-tablet-stander-mit-einstellbarem-winkel-und-ladekabelauslass-stabil-aluminium-halterung-in-silber-B01C3Z7SMW.html"><span className="title-inner">OMOTON Ständer für iPad Air, iPad Mini, iPad Pro 9,7 bis zu 12 Zoll,Samsung Tablet Ständer mit einstellbarem Winkel und Ladekabelauslass, stabil, Aluminium Halterung in Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/lurico-ipad-stander-tablet-stander-270-drehbarer-aluminiumlegierung-tischplattenhalter-handy-stander-universal-halter-halterung-dock-fur-telefone-ipad-pro-97105129-ipad-air-ipad-mini-B07B9FM343.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41MfD0NU08L._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/lurico-ipad-stander-tablet-stander-270-drehbarer-aluminiumlegierung-tischplattenhalter-handy-stander-universal-halter-halterung-dock-fur-telefone-ipad-pro-97105129-ipad-air-ipad-mini-B07B9FM343.html"><span className="title-inner">LURICO iPad Ständer, Tablet Ständer 270 ° drehbarer Aluminiumlegierung-Tischplattenhalter - Handy Ständer, Universal Halter, Halterung, Dock für Telefone iPad Pro 9.7/10.5/12.9, iPad Air iPad Mini</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/ipad-stander-verstellbarer-handy-stander-matone-tablet-stander-universal-halter-halterung-dock-fur-telefone-ipad-pro-97105129-ipad-air-ipad-mini-samsung-huawei-tab-e-reader4-13-silber-B0792QB32L.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/415CFqqyTgL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/ipad-stander-verstellbarer-handy-stander-matone-tablet-stander-universal-halter-halterung-dock-fur-telefone-ipad-pro-97105129-ipad-air-ipad-mini-samsung-huawei-tab-e-reader4-13-silber-B0792QB32L.html"><span className="title-inner">iPad Ständer Verstellbarer Handy Ständer Matone Tablet Ständer, Universal Halter, Halterung, Dock für Telefone iPad Pro 9.7/10.5/12.9, iPad Air iPad Mini Samsung Huawei Tab, E-Reader(4-13) (Silber)</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/amazonbasics-tragbarer-stander-mit-verstellbarem-betrachtungswinkel-fur-tablets-e-reader-und-handys-silber-B01IJ5A0PC.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/3196x2buUKL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/amazonbasics-tragbarer-stander-mit-verstellbarem-betrachtungswinkel-fur-tablets-e-reader-und-handys-silber-B01IJ5A0PC.html"><span className="title-inner">AmazonBasics Tragbarer Ständer mit verstellbarem Betrachtungswinkel für Tablets, E-Reader und Handys - Silber</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/multi-winkel-handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-grau-B0721K77N5.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41K2Yxc8eHL._SL500_SY135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/multi-winkel-handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-grau-B0721K77N5.html"><span className="title-inner">Multi-Winkel Handy Ständer, Lamicall Handy Halterung : Handyhalterung, Halter, Phone Ständer für iPhone Xs Max, Xs, XR, X, 8, 7, 6s 6 / Plus, SE, 5, Samsung S7 S8, Huawei, Tisch Zubehör, Schreibtisch, andere Smartphone - Grau</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/handy-phone-stander-nulaxy-handy-halterung-tisch-smartphone-handy-stander-halter-schwarz-fur-huawei-samsung-s7-8-apple-iphone-5-6-7-plus8-x-se-tablet-universal-mini-aluminium-klappbar-phone-handy-stander-multi-winkel-fur-buro-kuche-schreibtisch-B01MDKI4IO.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41ZiH8U2WPL._SL500_SS135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/handy-phone-stander-nulaxy-handy-halterung-tisch-smartphone-handy-stander-halter-schwarz-fur-huawei-samsung-s7-8-apple-iphone-5-6-7-plus8-x-se-tablet-universal-mini-aluminium-klappbar-phone-handy-stander-multi-winkel-fur-buro-kuche-schreibtisch-B01MDKI4IO.html"><span className="title-inner">Handy Phone Ständer, Nulaxy Handy Halterung Tisch, Smartphone Handy Ständer Halter Schwarz für Huawei Samsung S7 8 Apple iphone 5 6 7 plus8 x se Tablet, Universal Mini Aluminium Klappbar Phone Handy Ständer Multi-Winkel für Büro Küche Schreibtisch</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                            <div className="swiper-slide" style={{ width: '207.6px', marginRight: 30 }}>
                                <div className="panel-product-scroll">
                                    <div className="img-pane">
                                        <a className="img-field" href="/de/multi-winkel-handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-schwarz-B01M8N0G3L.html">
                                            <span className="field-inner">
                                                <img className="pd-img img-lazy" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" data-src="https://images-eu.ssl-images-amazon.com/images/I/41N%2B045AcRL._SL500_SY135_.jpg" alt="img" />
                                            </span>
                                        </a>
                                    </div>{/* .img-pane */}
                                    <a className="pd-title" href="/de/multi-winkel-handy-stander-lamicall-handy-halterung-handyhalterung-halter-phone-stander-fur-iphone-xs-max-xs-xr-x-8-7-6s-6-plus-se-5-samsung-s7-s8-huawei-tisch-zubehor-schreibtisch-andere-smartphone-schwarz-B01M8N0G3L.html"><span className="title-inner">Multi-Winkel Handy Ständer, Lamicall Handy Halterung : Handyhalterung, Halter, Phone Ständer für iPhone Xs Max, Xs, XR, X, 8, 7, 6s 6 / Plus, SE, 5, Samsung S7 S8, Huawei, Tisch Zubehör, Schreibtisch, andere Smartphone - Schwarz</span></a>
                                </div>{/* .panel-product-box */}
                            </div>{/* .swiper-slide */}
                        </div>{/* .swiper-wrapper */}
                    </div>{/* .swiper-container */}
                    <div className="control-nav">
                        <div className="swiper-button-prev swiper-button-disabled"><div className="btn-inner" /></div>
                        <div className="swiper-button-next"><div className="btn-inner" /></div>
                    </div>
                </div>
            </div>{/* .container*/}
        </section>

        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ContentChecked);
export { connectedContent as ContentChecked } 