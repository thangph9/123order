import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentSlide extends React.Component{
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
            <div style={{marginTop:'21px',maringBot:'15px'}}>     
                        <Slider {...settings}>
                            <img alt='landing-img' src="https://static-v3.weshop.com.vn/upload/cms/18/09/08/k/d/v/7/v/1.jpg" style={{width:'1140px'}} />
                            <img alt='landing-img' src="https://static-v3.weshop.com.vn/upload/cms/18/09/08/m/c/f/e/o/1349x500.jpg" style={{width:'1140px'}} />
                            <img alt='landing-img' src="https://static-v3.weshop.com.vn/upload/cms/18/09/08/k/d/v/7/v/1.jpg" style={{width:'1140px'}} />
                            <img alt='landing-img' src="https://static-v3.weshop.com.vn/upload/cms/18/09/08/m/c/f/e/o/1349x500.jpg" style={{width:'1140px'}} />
                        </Slider>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentSlide);
export { connected as ContentSlide } 