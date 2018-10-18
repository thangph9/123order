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
                            <img className="pd-img img-lazy" src="https://images-eu.ssl-images-amazon.com/images/I/41%2B-Du4Ow7L._SL500_SY135_.jpg" alt="img" style={{}} />
                        </Slider>

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
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(ContentChecked);
export { connectedContent as ContentChecked } 