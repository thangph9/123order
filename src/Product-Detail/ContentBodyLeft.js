import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentBodyLeft extends React.Component{
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
    selectStyle(valueScroll){
        if(valueScroll<371) return 'product-img-block beginProduct';
        else if (valueScroll>=371&&valueScroll<3000) return 'product-img-block fixedProduct';
        else if(valueScroll>=3000) return 'product-img-block endProduct';
    }
    render(){
        var {loadDetail}=this.props;
        var {mouseScroll}=this.props;
        var scrollValue=this.selectStyle(mouseScroll);
        var productDetailContainer=document.getElementById("root");
        var leftProduct=0;
        if(productDetailContainer!=null){
            leftProduct=(productDetailContainer.offsetWidth-1200)/2+16;
        }
        var menuItems=[];
        var settings = {
            dots: false,
            speed: 500,
            slidesToShow: 4 ,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            infinite:false,
            className:'small-image'
        };
        if(loadDetail.length>0){
            menuItems=loadDetail[0].smallimage.map((img,index)=>{
                return (
                <div className="border-small-image" >
                    <img key={index} style={{width:'48px'}}  alt="img"  src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[index]:'' } />
                </div>
                 
                )
            })
        }   
        console.log(menuItems);
        return (
            <div className="container-main-col-1" style={{ position: 'relative' }}>
                            <section id="product-img-block" style={(scrollValue=='product-img-block fixedProduct')?{left:`${leftProduct}px`}:{}} className={scrollValue} >
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
        )
        
    }
}
function mapStateToProps(state){
  
    return {
        mouseScroll:state.mouseScrollPageDetailProduct,
        loadDetail:state.initLoadProductDetail
    }
}
const connectedContent=connect(mapStateToProps)(ContentBodyLeft);
export { connectedContent as ContentBodyLeft } 
