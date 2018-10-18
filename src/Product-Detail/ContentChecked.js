import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
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
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            infinite: false,
            className:'list-checked'
        };
        return (
            <section className="scroll-products-block is-checked">
                <div className="container">
                    <div className="block-head">
                        <div className="block-title">Sản phẩm liên quan</div>
                    </div>{/* .block-head*/}
                    <div className="block-main">
                        <Slider {...settings}>
                            <div className="panel-product-scroll" style={{width:'207px',height:'235px'}}>
                                <div className="img-pane">
                                    <Link className="img-field" to={"#"}>
                                        <span className="field-inner parent-img-loaded">
                                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                        </span>
                                    </Link>
                                </div>{/* .img-pane */}
                                <Link className="pd-title" to={"#"}><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></Link>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll" style={{width:'207px',height:'235px'}}>
                                <div className="img-pane">
                                    <Link className="img-field" to={"#"}>
                                        <span className="field-inner parent-img-loaded">
                                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                        </span>
                                    </Link>
                                </div>{/* .img-pane */}
                                <Link className="pd-title" to={"#"}><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></Link>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll" style={{width:'207px',height:'235px'}}>
                                <div className="img-pane">
                                    <Link className="img-field" to={"#"}>
                                        <span className="field-inner parent-img-loaded">
                                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                        </span>
                                    </Link>
                                </div>{/* .img-pane */}
                                <Link className="pd-title" to={"#"}><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></Link>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll" style={{width:'207px',height:'235px'}}>
                                <div className="img-pane">
                                    <Link className="img-field" to={"#"}>
                                        <span className="field-inner parent-img-loaded">
                                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                        </span>
                                    </Link>
                                </div>{/* .img-pane */}
                                <Link className="pd-title" to={"#"}><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></Link>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll" style={{width:'207px',height:'235px'}}>
                                <div className="img-pane">
                                    <Link className="img-field" to={"#"}>
                                        <span className="field-inner parent-img-loaded">
                                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                        </span>
                                    </Link>
                                </div>{/* .img-pane */}
                                <Link className="pd-title" to={"#"}><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></Link>
                            </div>{/* .panel-product-box */}
                            <div className="panel-product-scroll" style={{width:'207px',height:'235px'}}>
                                <div className="img-pane">
                                    <Link className="img-field" to={"#"}>
                                        <span className="field-inner parent-img-loaded">
                                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                                        </span>
                                    </Link>
                                </div>{/* .img-pane */}
                                <Link className="pd-title" to={"#"}><span className="title-inner" style={{ transitionDuration: '0s', marginLeft: 0 }}>Tablet ständer, Gritin Handyhalterung Phone Dock Multi Winkel Aluminium verstellbar Stabil Stand für iPad Air Mini 2 3 4, iPad Pro 9.7 / 10.5, iPhone X, 8, 7, 7 Plus 6s 6 / Plus, Kindle, Nexus, Tab, Tisch Halterung und anderer Tablets</span></Link>
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