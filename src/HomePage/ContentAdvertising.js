import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentAdvertising extends React.Component{
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
        var settings1 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        };
        var settings2 = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            
        };
        return (
            <div className="row">
                <div className="col-6 p-2">
                    <Slider {...settings1}>
                        <img alt="Responsive img" src="img/Layer 26.png" className="img-fluid" style={{width: '554px', marginRight: '10px'}} />
                        <img alt="Responsive img" src="img/Layer 29.png" className="img-fluid" style={{width: '554px', marginRight: '10px'}} />
                    </Slider>
                </div>
                <div className="col-6 p-2">
                    <Slider {...settings2}>
                        <img alt="Responsive img" src="img/Layer 27.png" className="img-fluid" style={{width: '554px', marginRight: '10px'}}/>
                        <img alt="Responsive img" src="img/Layer 28.png" className="img-fluid" style={{width: '554px', marginRight: '10px'}}/> 
                    </Slider>
                </div>
            </div>

        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connectedContent=connect(mapStateToProps)(ContentAdvertising);
export { connectedContent as ContentAdvertising } 