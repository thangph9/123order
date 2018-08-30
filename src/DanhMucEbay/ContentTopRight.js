import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentTopRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
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
            <div className="col-lg-9 px-2 ">
                <Slider {...settings}>
                    <img src="img\Layer 69.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}} />
                    <img src="img\Layer 70.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}} />
                    <img src="img\Layer 69.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 70.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 69.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 70.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 69.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 70.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 69.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                    <img src="img\Layer 70.png" alt='img' className="img-fluid" style={{width: '839px', marginRight: '10px'}}/>
                </Slider>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentTopRight);
export { connected as ContentTopRight } 