import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentSaleLeft extends React.Component {
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
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false
        };
        return (
            <div class="col-7 p-2">
            <Slider {...settings}>
                <div>
                    <img alt="Responsive img" src="img/Banner 3.png" className="img-fluid" />
                </div>
                <div>
                    <img alt="Responsive img" src="img/Banner 3.png" className="img-fluid" />
                </div>
                <div>
                    <img alt="Responsive img" src="img/Banner 3.png" className="img-fluid" />
                </div>
                <div>
                    <img alt="Responsive img" src="img/Banner 3.png" className="img-fluid" />
                </div>
            </Slider>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentSaleLeft);
export { connected as ContentSaleLeft } 