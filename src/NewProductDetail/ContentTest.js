import React from "react";
import { connect } from "react-redux";

class ContentTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selectStyle = this.selectStyle.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleClick() {
        console.log("clicked")
    } 
    selectStyle(valueScroll){
        if(valueScroll<367) return 'product-img-block beginProduct';
        else if (valueScroll>=367&&valueScroll<3000) return 'product-img-block fixedProduct';
        else if(valueScroll>=3000) return 'product-img-block endProduct';
    }
    render() {
        var {mouseScroll}=this.props;
        var scrollValue=this.selectStyle(mouseScroll);
        return (
            <div>
                <section id="breadcrumbs-block-v2" className="breadcrumbs-block-v2 ">
                    <div className="container-fedo" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
                        <ul className="link-list" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
                            <li><a href="/">Trang chủ</a></li>
                            <li className="break" />
                            <li><a href="/de/amazon-store/" itemProp="item"><span itemProp="name">Amazon Đức</span></a></li>
                            <li className="break" />
                        </ul>
                    </div>
                </section>

                <main style={{ marginBottom: 30 }} id="product-detail-container-v2" className="product-detail-container-v2 container-v2">
                    <div className="container-head">
                        <div className="product-detail-head-block">
                            <div className="block-col-1">
                                <h1 style={{margin:'0px 0px 6px 0px'}} className="pd-title" itemProp="name" id="productName">
                                    Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5"-13" - Silber              </h1>
                                <div className="meta-item-wrap">
                                    <div className="meta-item" itemProp="aggregateRating" itemScope="itemscope" itemType="https://schema.org/AggregateRating">
                                        <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />                        <span itemProp="ratingValue">4</span>/5
            &nbsp;(<span>795</span> lượt đánh giá)
          </div>
                                    <div className="meta-item">
                                        Bán tại:
            <i className="si si-logo-amz-mini" />
                                        Amazon Đức                                          </div>
                                    <div className="meta-item">
                                        Thương hiệu: <span className="text-blue"><a style={{ color: '#007bff' }} href="/de/s/search/?rh=Lamicall&keywords=Lamicall" target="_blank">Lamicall</a></span>
                                    </div>
                                </div>{/* .meta-item-wrap */}
                            </div>{/* .block-col-1 */}
                            <div className="block-col-2">
                                <div className="shop-segment">
                                    <div className="segment-head">
                                        <div className="icon-col"><i className="svg svg-shop svg-24px" /></div>
                                        <div className="info-col">
                                            <div className="shop-title">
                                                <a style={{ color: '#2196f3', textDecoration: 'none' }} href="/de/s/cat/?me=A3AJ0GNLXXLZX8" target="_blank">LamicallDirect</a>
                                            </div>
                                            <div className="desc">
                                    <div className="star">
                                        <i className="fa fa-star text-yellow"></i>
                                        <i className="fa fa-star text-yellow"></i>
                                        <i className="fa fa-star text-yellow"></i>
                                        <i className="fa fa-star text-yellow"></i>
                                        <i className="fa fa-star text-yellow"></i>
                                    </div>
                                    <span> | 100% đánh giá uy tín</span>
                                </div>
                                        </div>
                                    </div>
                                    <div className="segment-main" style={{height: '30px'}}>
                                        <div className="rating">&nbsp;Sản phẩm tốt, rất nhiều người đã mua</div>
                                    </div>{/* .segment-main */}
                                </div>{/* .shop-segment */}
                            </div>{/* .block-col-2 */}
                        </div>{/* .product-detail-head-block */}
                    </div>{/* .container-head */}
                    {/* Location */}
                    {/* end of location */}
                    <div className="container-main">
                        <div className="container-main-col-1" style={{ position: 'relative' }}>
                            <section id="product-img-block" className={scrollValue} >
                                <div className="product-img-segment">
                                    <div className="sale-tag">-21%</div>
                                    <div className="over-img-field">
                                        <span className="field-inner"><img className="over-img" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" alt="img" /></span>
                                    </div>
                                    <div className="swiper-container swiper-container-horizontal">
                                        <div className="swiper-wrapper" style={{ height: 310 }}>
                                            <div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/71xBbWYCjnL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/71xBbWYCjnL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/71xBbWYCjnL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/71WBQpQYhmL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/71WBQpQYhmL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/71WBQpQYhmL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/616D%2BIXHfTL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/616D%2BIXHfTL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/616D%2BIXHfTL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/71AVT%2Ba55OL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/71AVT%2Ba55OL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/71AVT%2Ba55OL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/710b298GPPL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/710b298GPPL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/710b298GPPL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/71mt2EDscbL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/71mt2EDscbL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/71mt2EDscbL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/81EG5%2Bob0TL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/81EG5%2Bob0TL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/81EG5%2Bob0TL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/71tWFPziusL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/71tWFPziusL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/71tWFPziusL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div><div className="swiper-slide" style={{ width: 310, marginRight: 10 }}>
                                                <a className="gallery-item img-item" data-fancybox="group" href="https://images-eu.ssl-images-amazon.com/images/I/71c6V0VDlPL.jpg" target="_blank">
                                                    <div className="item-inner">
                                                        <img style={{ height: 310 }} src="https://images-eu.ssl-images-amazon.com/images/I/71c6V0VDlPL.SR420,420_.jpg" data-zoom-image="https://images-eu.ssl-images-amazon.com/images/I/71c6V0VDlPL.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>{/* .swiper-wrapper */}
                                    </div>{/* .swiper-container */}
                                </div>
                                <div className="product-thumb-segment">
                                    <div className="swiper-container swiper-container-horizontal">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide swiper-slide-active" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={0}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71xBbWYCjnL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide swiper-slide-next" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={1}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71WBQpQYhmL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={2}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/616D%2BIXHfTL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={3}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71AVT%2Ba55OL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={4}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/710b298GPPL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={5}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71mt2EDscbL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={6}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/81EG5%2Bob0TL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={7}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71tWFPziusL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div><div className="swiper-slide" style={{ width: 60, marginRight: 10 }}>
                                                <div className="gallery-item img-item" data-target={8}>
                                                    <div className="item-inner">
                                                        <img src="https://images-eu.ssl-images-amazon.com/images/I/71c6V0VDlPL.SR80,80_.jpg" alt="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* .swiper-wrapper */}
                                    </div>{/* .swiper-container */}
                                    <div className="swiper-button-prev swiper-button-disabled" />
                                    <div className="swiper-button-next" />
                                </div>
                                <div className="social-share-segment">
                                    <div className="segment-col-1">
                                        <a className="favorite-btn add-favorite-btn bt-add-favourite" id="favouriteBtn" href="javascript:;">
                                            <i className="svg svg-heart-grd svg-16px" />
                                            Yêu thích
            </a>
                                    </div>{/* .segment-col-1 */}
                                    <div className="segment-col-2">
                                        <div className="share-panel">
                                            <div className="lbl-col">Chia sẽ tới:</div>
                                            <div className="info-col">
                                                <a className="social-item" href="https://www.facebook.com/sharer/sharer.php?u=https://fado.vn/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html" onClick={()=>this.handleClick()}>
                                                    <i className="svg svg-facebook-circle svg-16px" />
                                                </a>
                                                <a className="social-item" href="https://plus.google.com/share?url=https://fado.vn/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html" onClick={()=>this.handleClick()}>
                                                    <i className="svg svg-google-circle svg-16px" />
                                                </a>
                                                <a className="social-item share-item zalo-share-button" href="javascript:;" data-href="https://fado.vn/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html" data-oaid={579745863508352884} data-layout={2} data-color="blue" data-customize="true">
                                                    <i className="svg svg-zalo-circle svg-16px" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>{/* .segment-col-2 */}
                                </div>
                                <div className="cart-segment">
                                    <div className="segment-main">
                                        <div className="main-inner">
                                            <div className="control-col quantity-col">
                                                <div className="pd-quantity-control">
                                                    <input type="text" className="quantity-input quantity-input-fix" defaultValue={1} min={1} />
                                                    <div className="control-btn plus-btn">+</div>
                                                    <div className="control-btn minus-btn is-disabled">-</div>
                                                </div>{/* .quantity-control */}
                                            </div>
                                            <div className="control-col buy-now-col">
                                                <button id="bt-buy-now" className="buy-now-btn btn btn-pill btn-grd-bg" data-product_quantity="$('.quantity-input').val()" data-product_id="B01N05W4A2" data-product_sku="B01N05W4A2" data-product_price="672084.22" data-product_brand="Lamicall" data-product_cat data-product_name="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber">
                                                    Mua ngay <i className="svg svg-arrow-right-white svg-18px ml-2px" />
                                                </button>
                                            </div>
                                            <div className="control-col add-cart-col">
                                                <button id="bt-add-to-cart" className="add-cart-btn btn btn-pill btn-grd-border" data-product_quantity="$('.quantity-input').val()" data-product_id="B01N05W4A2" data-product_sku="B01N05W4A2" data-product_price="672084.22" data-product_brand="Lamicall" data-product_cat data-product_name="Tablet Ständer Verstellbare, Lamicall Tablet Staender : Universal Halter, Halterung, Dock, für iPad Pro 10.5 / 9.7, iPad Air 2 3 4, iPad mini 2 3 4, Samsung Huawei E-Reader und Google Nexus Schreibtisch, andere Tab 5&quot;-13&quot; - Silber">
                                                    <div className="btn-inner">Giỏ hàng <i className="svg svg-plus-black svg-18px ml-5px" />
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>{/* .segment-main */}
                                </div>
                            </section>{/* .product-img-block */}
                        </div>
                        <div className="container-main-col-2">
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
                                                                <div id="currPrice" className="curr-price">672,084<sup>đ</sup></div>
                                                            </div>
                                                        </div>
                                                        <div className="info-item sub-item">
                                                            <div className="lbl-col">Tiết kiệm:</div>
                                                            <div className="info-col text-nowrap">
                                                                <span className="sale-percent">-70%</span>
                                                                <span className="sale-price">(470,459<sup>đ</sup>)</span>
                                                            </div>
                                                        </div>
                                                        <div className="info-item sub-item">
                                                            <div className="lbl-col">Giá chưa giảm:</div>
                                                            <div className="info-col">
                                                                <span id="oldPrice" className="old-price line-through">1,142,543<sup>đ</sup></span>
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
                            </section>{/* .product-detail-block-v2 */}
                            <section className="product-tab-block-v2 pd-desc-block" id="mo-ta-tab">
                                <div className="block-head" style={{ width: 838 }}>
                                    <div className="head-title-col">
                                        <div style={{ fontSize: 14 }} className="block-title">Mô tả</div>
                                    </div>
                                    <div className="head-control-col">
                                    </div>
                                </div>{/* .block-head */}
                                <div className="block-main" style={{ fontSize: 14 }}>
                                    <p>● 【Einstellbar Tablet Ständer:】 Mehrere Sichtwinkel, die Ihren unterschiedlichen Bedürfnissen entsprechen, stehen Ihnen zur Verfügung, sodass dieser Tablet Ständer praktisch für Sie ist. Sparen Sie 20 % beim Kauf von Lamicall Handy Ständer (Silber) wenn Sie 1 oder mehrere Lamicall iPad Ständer aus dem Angebot von LamicallDirect erwerben!</p>
                                    <p>● 【Haltbare gummierte Auflageflächen:】 Beim Video-Chatten (z.B. FaceTime) und Videos schauen (z.B. Videos auf YouTube) bleibt der Lamicall-Ständer stabil stehend. Mit niedrigem Schwerpunkt und genug breitem Haken wird Ihr relativ großes Gerät vor Kratzern und Rutschen geschützt.</p>
                                    <p>● 【Kompatibilität:】 Kompatibel mit 4 bis 13 Zoll Geräte wie z.B. Neu iPad Pro 2018, iPad Air, Surface Pro, Nintendo Switch, Samsung Tablet, wenn auch mit Schutzhüllen. Wenn das Gerät ist größer als 12'' (z. B. iPad Pro 12,9 ''), nur Set horizontal, es funktioniert auch gut. Der Lamicall-Ständer spielt eine wichtige Rolle in Ihrem Büro, Ihrer Küche und auf Ihrem Nachttisch.</p>
                                    <p>● 【Präzise Verarbeitung:】 Aluminium-Legierung, glatte Kante, geringes Gewicht, leicht tragbar; hochkompatibel mit Alle Tablet.</p>
                                    <p>● 【Was Sie erhalten:】 Ein Lamicall S1 Ständer, sowie unsere Lifetime Garantieservices. Um Ihnen eine volle Rückerstattung oder einen nagelneuen Wiedereinbau anzubieten, wenn Sie nicht mit ihm zufrieden sind.</p>
                                </div>
                            </section>
                            <section style={{ fontSize: 14 }} className="product-tab-block-v2 pd-params-block" id="thong-so-tab">
                                <div className="block-head" style={{ width: 838 }}>
                                    <div className="head-title-col">
                                        <div className="block-title">Thông số</div>
                                    </div>
                                    <div className="head-control-col">
                                    </div>
                                </div>{/* .block-head */}
                                <div className="block-main">
                                    <div className="param-panel" style={{ width: 818 }}>
                                        <div className="lbl-cell">Product Dimensions</div>
                                        <div className="info-cell"><div className="cell-inner">14 x 15 x 12 cm; 204 g</div></div>
                                    </div>{/* .param-panel */}
                                    <div className="param-panel" style={{ width: 818 }}>
                                        <div className="lbl-cell">Shipping Weight</div>
                                        <div className="info-cell"><div className="cell-inner">358 g</div></div>
                                    </div>{/* .param-panel */}
                                    <div className="param-panel" style={{ width: 818 }}>
                                        <div className="lbl-cell">ASIN</div>
                                        <div className="info-cell"><div className="cell-inner">B01N05W4A2</div></div>
                                    </div>{/* .param-panel */}
                                    <div className="param-panel" style={{ width: 818 }}>
                                        <div className="lbl-cell">Item model number</div>
                                        <div className="info-cell"><div className="cell-inner">S1 Stand</div></div>
                                    </div>{/* .param-panel */}
                                </div>{/* .block-main */}
                            </section>
                            <section className="product-tab-block-v2 pd-comment-block" style={{ width: 838 }}>
                                <div className="block-head" style={{ width: 838 }}>
                                    <div className="head-title-col">
                                        <div className="block-title">Bình luận</div>
                                    </div>
                                    <div className="head-control-col">
                                    </div>
                                </div>{/* .block-head */}
                                <div className="block-main">
                                    <div id="__izi-comment_widget" />
                                </div>{/* .block-main */}
                            </section>
                            <section style={{ fontSize: 14 }} className="product-tab-block-v2 pd-comment-block" id="binh-luan-tab">
                                <div className="block-head" style={{ width: 838 }}>
                                    <div className="head-title-col">
                                        <div className="block-title">Bình luận &amp; đánh giá</div>
                                    </div>
                                    <div className="head-control-col">
                                    </div>
                                </div>{/* .block-head */}
                                <div className="block-main">
                                    <ul className="tab-title-list" style={{ paddingLeft: 0 }}>
                                        <li className="is-active" onClick={()=>this.handleClick()} data-tab="#comment-quan-tam-nhat-tab">Quan tâm nhất</li>
                                        <li onClick={()=>this.handleClick()} data-tab="#comment-moi-nhat-tab">Mới nhất</li>
                                    </ul>
                                    <div id="commentList" data-sort data-page={2} className="comment-tab is-show">
                                        <div className="comment-panel-wrap">
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Bietet meinem IPad AIR sicheren Halt und sieht schick aus</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-02-01" />
                                                    <div className="meta" itemProp="author">By J. Ehrhardt on February 01, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            <b>Sonderpreis für eine begrenzte Zeit: </b>Multi-Winkel ipad tablett tablet ständer halter Multi-Winkel 12.9 and halterung für ipad pro 10 5, iPad pro 2018 12,9 zoll, 10 zoll, surface book, iphone ipad, 10-zoll tablets. Tablet dockingstation für ipad pro, ipad air 2, tab samsung, samsung tablet, ipad mini. IPad tisch tablet ständer tischständer tablet für 7 zoll, 10 zoll, samsung galaxy tab 7 s3, iPad pro 10.5 inch, ipad air2, 10-zoll tablet, i phone 6 plus, samsung galaxy tab a6.<br /><br />• Farbe: Der Tablet Ständer sieht in Wirklichkeit noch schöner als im Bild, modern, schick, einfach. ipad pro tablet tisch pad halterung 12.9 tischhalterung staender tablet halter schreibtisch stand für ipad, 8 zoll, iphone, 12 zoll, tab s2, samsung galaxy tab s3, samsung galaxy s7, iphone 7 plus, galaxy tab a, 9.7 zoll, 10 zoll<br />• Qualität des Tablet Ständer: Dieser Tablet Ständer ist aus Aluminium-Legierung mit guter Qualtität; umweltfreundliche Stoffe verbraucht.<br />• kleiner, feiner und tragbarer Tablet Ständer.<br />• Niedlicher "Haken"; und es gibt Gumminoppen auf der Unterseite des Tablet Ständer:<br />1.Ihr Tablet vor Kratzern schützen.<br />2.Ihr Tablet vor Rutschen schützen.<br />• Dort, wo das Tablet liegt, ist breit genug, wenn auch mit einer Schutzhülle.<br />• Der Tablet Ständer passt sehr gut zu Ihrem Ladekabel.<br /><br /><b>Kompatibilität:</b><br />Der Tablet Ständer ist kompatibel mit den meisten Tablet, unterstützt Sie ideal beim Filme schauen und Lesen mit Handy am Tisch.<br /><br /><b>Sowie：</b><br />• Apple: iPod Ipad 1 2 3 Air, ipad mini 1 2 3 4.<br />• Samsung/Huawei/E-Reader/Fire Tablet<br />• Nintendo Switch Tablet<br /><br /><b>Inkl:</b><br />• 1 x Lamicall-Tablet Ständer. Tablett handy multi winkel halter tablet handyhalter tisch staender tischhalterung halterung stand fuer tablett, iphone 7 plus, ipad pro 12.9, samsung S7, 11 zoll, iPad pro 10.5 inch, 12 zoll            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Bin vollends zufrieden, auch mit dem grossen iPad Pro</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-11-04" />
                                                    <div className="meta" itemProp="author">By Di Christoph Ennemoser on November 04, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Habe den IPad Ständer gekauft um mein IPad schön auf einem Sideboard zu stellen. Kaufkriterium war für mich das schicke und schlichte Design. Ich bin echt begeistert von dem Ständer, da er echt sehr wertig verarbeitet ist, mein IPad Air passt hervorragend rein und beides zusammen sieht klasse aus. Die Fläche auf die  das IPad gelegt wird ist verstellbar. Durch die vier Gummistreifen wird das IPad vor Kratzern geschützt. Ich bin wirklich sehr zufrieden mit dem Produkt und kann es weiterempfehlen            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Nützliches Tabet-Zubehör</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-12-19" />
                                                    <div className="meta" itemProp="author">By Schwatzmoserer on December 19, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich verwende den Ständer mit einem iPad Pro 12,9, es gibt keine Probleme. Weder ist es kippelig (gilt natürlich nur wenn es quer steht), noch kann ich sonstige Nachteile finden.<br />Die Winkelverstellung ist schwergängig, das sehe ich aber als Vorteil.<br /><br />Mein iPad ist mit einer Apple Silikonhülle geschützt, auch damit passt es hervorragend in den Ständer.<br /><br />Selbiges gilt für mein iPhone 7 plus, da passt es auch im Hochformat.<br /><br />Ich kann den Ständer uneingeschränkt empfehlen.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Stabil, solide, elegant.</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-12-11" />
                                                    <div className="meta" itemProp="author">By Leseratte on December 11, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Auf meinem begrenzten Schreibtischplatz hatte ich das Problem daß das unheimlich glatte Samsung TAB S2 auf licht unebenen Teilflächen ständig ins Rutschen kam.<br />Ich kaufte daher diesen Tab-Ständer als Ausweg. Im Ergebnis bin ich äußerst zufrieden mit meiner Entscheidung. Zum einen erhielt ich einen ausgesprochen formschönen Ständer aus pulverbeschichtetem Aluminiuml mit einem hervorragenden Kippgelenk das in jeder gewünschten Stellung standfest bleibt. Die mit Gummi ausgekleideten Greifauflagen halten auch das glatte TAB sicher ohne seitliches Verrutschen. Das TAB kann sowohl senkrecht wie auch quer sicher aufgestellt werden. Die Bedienung des Touchscreens ist einwandfrei und ohne Verwackelnder Konstruktion durchzuführen. Gleichzeitig erhielt ich einen geringeren Platzverbrauch auf dem Schreibtisch.<br />Kann ich jederzeit empfehlen.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Ein sehr preisgünstiger , nützlicher , stabiler Ständer für mein  TABLET.</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-07-23" />
                                                    <div className="meta" itemProp="author">By H.J. E on July 23, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Stabile Halterung an einem Stück. Solide, gerade und mit Ersatzpatches.<br />Aus Blech/Aluminium/Stahl (?)geformt aber nicht klobig sondern leicht und elegant. Zur Schonung von iPad und Tisch kleben kleine Patches an der Unterseite und der Halterung.<br />Kam gut verpackt und schnell an.<br /><br />Man sollte wissen, dass die Halterung nicht höhenverstellbar ist. Allerdings lässt sich die Halterung positionieren, es ist hierfür ein Gelenk eingearbeitet.<br />Aber zur Lagerung des iPads super geeignet - das iPad kann nicht von der Tischkante fallen, unter Unterlagen verschwinden oder was auch immer. Und man kann bequem Filme/Videos gucken. Quer- und hochformatgeeignet. Sogar mit Schutzhülle passt mein iPad in die Halterung.<br /><br />Auch die Bedienung des Touch-Displays ist möglich, ohne dass die Halterung gleich umkippt. Wer jedoch ziemlich grobmotorisch unterwegs ist, dem kann dann auch nicht mehrgeholfen werden. Mit grober Gewalt kippt Vieles um. ;-)<br /><br />Ich habe auch noch eine Halterung für iPhone erstanden und bin mit beiden Halterungen hochzufrieden!            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Stabil und stylisch</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2017-11-15" />
                                                    <div className="meta" itemProp="author">By Matthias on November 15, 2017</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich habe diesen Ständer für mein Tablet  erworben da die Standfunktion meiner  Tablet -Tasche  mir zu wackelig / sturzgefährlich war .<br />Der Ständer ist stabil , das Neigungs-Gelenk schön  schwergängig und er ist optisch sehr ansprechend . Das Tablet liegt sicher hinter den Haltenasen des Ständers und der Ständer steht sicher und verwindungssteif . .<br /><br />Ich empfehle diesen Ständer ohne Einschränkungen .            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Geniales Teil!!!</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-01-01" />
                                                    <div className="meta" itemProp="author">By gerrycat on January 01, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Der Ständer ist super verarbeitet und steht stabil und rutschfest auf dem Tisch, die Verstellung geht leicht und hält auch bei Bedienung des Tabletts. Mein Huawei 10 Zoll Me3 Tablet passt hochkant oder quer perfekt darauf, ohne dass der Ständer in die eine oder andere Richtung beim Bedienen wackelt oder Übergewicht bekommt.<br />Klebepads sind als Ersatz dabei, falls die irgendwann mal abgenutzt sein sollten.<br />Von mir eine ganz klare Kaufempfehlung.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Herrlicher Spaß mit Nutzwert</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-03-01" />
                                                    <div className="meta" itemProp="author">By BCM on March 01, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich könnte mich jetzt über die recht stabile Verarbeitung, den verstellbaren Neigungswinkel auslassen....<br />Aber viel wichtiger ist: es erfüllt genau den Zweck den es soll. Nämlich das iPad über einen längeren Zeitraum sicher zu parken.<br />Man hat sofort Zugriff und es kann dabei trotzdem ungestört weiter geladen werden.<br />Der ergonomische Gebrauch ist dadurch auch gesichert. Meine Haltung ist innerhalb von nur einer Woche Gebrauch deutlich besser geworden.<br />Man kann sich noch so bemühen, wenn man das Teil in Hand/Schoss oder Tisch hat, senkt man unwillkürlich das Haupt.<br /><br />Was es NICHT ist: es ist keine FIXIERUNG, d.h. trotz aller Stabilität ist es trotzdem nur ein "Parkplatz" und keine Fixverankerung.<br /><br />Für mich persönlich einer der bisher besten Käufe!!!            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Um Filme zu schauen - stabil und eingestellte Position bleibt erhalten</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-02-10" />
                                                    <div className="meta" itemProp="author">By Amazon Customer on February 10, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Herrliches Gadget, das mir jeden Tag wieder Spaß macht. Wahrscheinlich braucht man dieses Ding nicht wirklich aber falls das iPad, sowie bei mir, hin und wieder oder auch im Urlaub als kurzzeitiger TV-Ersatz dient oder man kurze Mails mit einer externen Tastatur schreibt, ist der Ständer von hohem Nutzwert. Material, Verarbeitung und Design sind einwandfrei, ebenso die Funktion. Besonders das Design spricht mich an, sieht doch das iPad damit wie ein Mini-iMac für Arme aus xD... Auch meine Kinder machen sich immer wieder darüber lustig und so hat jeder seinen Spaß. Und weil es so schön war, habe ich mir darauf auch noch das "Ständerchen" für das iPhone gekauft, das nun WIRKLICH niemand mehr braucht, erst recht wie ein ganz armseliges iMacchen nach dem Vollwaschgang aussieht und gerade deswegen besonders viel Spaß macht... Auch für den Preis besonders klare Kaufempfehlung für dieses Tool!            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                            <div className="comment-panel is-checked">
                                                <div className="panel-head">
                                                    <div className="head">
                                                        <span className="star">
                                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" />          </span>
                                                        <span className="title" itemProp="name">Eine Tablet Halterung wie es sein sollte</span>
                                                    </div>
                                                    <meta itemProp="datePublished" className="meta" content="2018-09-23" />
                                                    <div className="meta" itemProp="author">By Don Ralfini on September 23, 2018</div>
                                                </div>
                                                <div className="panel-main">
                                                    <div className="content-pane">
                                                        <div className="content-field" itemProp="description">
                                                            Ich habe den Ständer gekauft, um mein Samsung Note 10.1 2014 darauf abzulegen, um Filme zu schauen.<br />Dafür ist der Ständer perfekt. Der eingestellte Neigungswinkel bleibt erhalten, d.h. der Arm sackt nicht mit der Zeit ab.<br />In einer Rezension stand, das der Ständer beim Tippen auf einem Tablet nachschwingt. Dies ist in der Tat der Fall. Möchte man mit dem Tablet arbeiten, ist wahrscheinlich eine andere Lösung notwendig.            </div>
                                                        <div className="expand-comment-btn">+ Hiện nội dung</div>
                                                    </div>{/* .content-pane */}
                                                </div>{/* .panel-main */}
                                            </div>{/* .comment-panel */}
                                        </div>{/* .comment-panel-wrap */}
                                        <div className="btnClone btn-wrap">
                                            <button style={{ color: '#fff', height: 40, fontSize: 16, padding: '0 30px' }} type="button" data-sort-by className="btn view-more-comment-btn btn-pill btn-grd-bg btn-inner btn-grd-border" id="viewMoreComment" href="javascript:;">Xem thêm bình luận</button>
                                        </div>
                                    </div>{/* .comment-tab */}
                                </div>{/* .block-main */}
                            </section>
                        </div>
                    </div>
                </main>
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

            </div>
        )

    }
}
function mapStateToProps(state) {

    return {
        mouseScroll:state.mouseScrollPageDetailProduct
    }
}
const connectedContent = connect(mapStateToProps)(ContentTest);
export { connectedContent as ContentTest } 