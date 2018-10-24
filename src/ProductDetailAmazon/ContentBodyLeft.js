import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { mouseClickSmallImageProduct } from '../actions';
import ReactImageMagnify from 'react-image-magnify';
class ContentBodyLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            checkScroll:0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleClick(value) {
        this.props.dispatch(mouseClickSmallImageProduct(value));
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    selectStyle(valueScroll) {
        if (valueScroll < 371) return 'product-img-block beginProduct';
        else if (valueScroll >= 371 && valueScroll < 3000) return 'product-img-block fixedProduct';
        else if (valueScroll >= 3000) return 'product-img-block endProduct';
    }
    render() {
        var { loadDetail } = this.props;
        var { mouseScroll } = this.props;
        var { mouseClick } = this.props;
        var {mouseClickLink}=this.props;
        var {checkScroll}=this.state;
        var image=new Image();
        
        var menuItems = [];
        var settings = {
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            infinite: false,
            className: 'list-small-image'
        };
        if (loadDetail.length > 0) {
            menuItems = loadDetail[0].smallimage.map((img, index) => {
                return (
                    <div key={index} onClick={() => this.handleClick(index)} className="border-small-image">
                        <img  className="small-image" alt="img" src={(loadDetail[0] != undefined) ? loadDetail[0].smallimage[index] : ''} />
                    </div>
                )
            })
        }
        if (loadDetail.length > 0) {
            let index1 = loadDetail[0].save_price.indexOf("(");
            let index2 = loadDetail[0].save_price.indexOf(")");
            var saleper = loadDetail[0].save_price.substring(index1 + 1, index2);
        }
        return (
            <div id="container-scroll" className="container-main-col-1" style={{ position: 'relative' }}>
                <section id="product-img-block" className='product-img-block' >
                    <div className="product-img-segment">
                        <div className={(loadDetail[0]!=undefined&&loadDetail[0].save_price=='')?'none-hide':'sale-tag'}>-{(loadDetail.length > 0) &&saleper}</div>
                        <div className="over-img-field">
                            <span className="field-inner"><img className="over-img" src="https://static.fado.vn/f/desktop/v2/images/null-image.png" alt="img" /></span>
                        </div>
                        <div className="swiper-container swiper-container-horizontal" style={{overflow: 'visible'}}>
                            <div className="swiper-wrapper" >
                                <div className="swiper-slide" style={{  marginRight: 10 }}>
                                    <a className="gallery-item img-item" data-fancybox="group" target="_blank">
                                        <div className="item-inner">
                                            <ReactImageMagnify className="xzoom" {...{
                                                smallImage: {
                                                    alt: 'img',
                                                    isFluidWidth: true,
                                                    src: (loadDetail[0] != undefined) ? loadDetail[0].largeimage[mouseClick] : ''

                                                },
                                                largeImage: {
                                                    src: (loadDetail[0] != undefined) ? loadDetail[0].hugeimage[mouseClick] : '',
                                                    width: 1200,
                                                    height: 1400,
                                                },
                                                shouldUsePositiveSpaceLens: true,
                                                enlargedImageContainerDimensions: {
                                                    width: '190%', height: '200%'
                                                },
                                                
                                                shouldHideHintAfterFirstActivation: false
                                            }} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-thumb-segment">
                        <Slider {...settings}>
                            {menuItems}
                        </Slider>
                    </div>{/* .swiper-container */}
                    <div className="social-share-segment">
                        <div className="segment-col-1">
                            <a className="favorite-btn add-favorite-btn bt-add-favourite" id="favouriteBtn" href="javascript:;">
                                <i className="svg svg-heart-grd svg-16px" />
                                Yêu thích
            </a>
                        </div>{/* .segment-col-1 */}
                        <div className="segment-col-2">
                            <div className="share-panel">
                                <div className="lbl-col">Chia sẻ tới:</div>
                                <div className="info-col">
                                    <a className="social-item" href="https://www.facebook.com/sharer/sharer.php?u=https://fado.vn/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html" onClick={() => this.handleClick()}>
                                        <i className="svg svg-facebook-circle svg-16px" />
                                    </a>
                                    <a className="social-item" href="https://plus.google.com/share?url=https://fado.vn/de/tablet-stander-verstellbare-lamicall-tablet-staender-universal-halter-halterung-dock-fur-ipad-pro-105-97-ipad-air-2-3-4-ipad-mini-2-3-4-samsung-huawei-e-reader-und-google-nexus-schreibtisch-andere-tab-5-13-silber-B01N05W4A2.html" onClick={() => this.handleClick()}>
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
        )

    }
}
function mapStateToProps(state) {

    return {
        mouseScroll: state.mouseScrollPageDetailProduct,
        loadDetail: state.initLoadProductDetail,
        mouseClick: state.mouseClickSmallImageProduct,
        mouseClickLink:state.mouseClickLinkProductItem
    }
}
const connectedContent = connect(mapStateToProps)(ContentBodyLeft);
export { connectedContent as ContentBodyLeft } 
