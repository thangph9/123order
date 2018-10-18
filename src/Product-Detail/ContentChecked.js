import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentChecked extends React.Component {
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
        var menuItems = [];
        var settings = {
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            infinite: false,
        };
        return (
            <section className="scroll-products-block is-checked">
                <div className="container">
                    <div className="block-head">
                        <div className="block-title">Sản phẩm liên quan</div>
                    </div>{/* .block-head*/}
                    <div className="block-main">
                        <Slider {...settings}>
                            <div className="panel-product-scroll">
                                <div className="img-pane">
                                    <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                        <span className="field-inner parent-img-loaded">

                                        </span>
                                    </a>
                                </div>{/* .img-pane */}
                                <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll">
                                <div className="img-pane">
                                    <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                        <span className="field-inner parent-img-loaded">

                                        </span>
                                    </a>
                                </div>{/* .img-pane */}
                                <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll">
                                <div className="img-pane">
                                    <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                        <span className="field-inner parent-img-loaded">

                                        </span>
                                    </a>
                                </div>{/* .img-pane */}
                                <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll">
                                <div className="img-pane">
                                    <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                        <span className="field-inner parent-img-loaded">

                                        </span>
                                    </a>
                                </div>{/* .img-pane */}
                                <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll">
                                <div className="img-pane">
                                    <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                        <span className="field-inner parent-img-loaded">

                                        </span>
                                    </a>
                                </div>{/* .img-pane */}
                                <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll">
                                <div className="img-pane">
                                    <a className="img-field" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html">
                                        <span className="field-inner parent-img-loaded">

                                        </span>
                                    </a>
                                </div>{/* .img-pane */}
                                <a className="pd-title" href="/de/tablet-stander-gritin-handyhalterung-phone-dock-multi-winkel-aluminium-verstellbar-stabil-stand-fur-ipad-air-mini-2-3-4-ipad-pro-97-105-iphone-x-8-7-7-plus-6s-6-plus-kindle-nexus-tab-tisch-halterung-und-anderer-tablets-B07C3C55SV.html"><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></a>
                            </div>{/* .panel-product-box */}
                        </Slider>

                    </div>
                </div>{/* .container*/}
            </section>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(ContentChecked);
export { connectedContent as ContentChecked } 