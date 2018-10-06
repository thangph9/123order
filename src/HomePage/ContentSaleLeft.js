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
    componentWillReceiveProps(){
        this.refs.slick.innerSlider.onWindowResized()
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
            <div className="col-7 p-2">
            <Slider ref="slick" {...settings}>
               {this.props.initLoad.map((picture,index)=>{
                   return(<div key={index}>
                       <img alt="img" className="img-fluid" src={picture.linkanh}/>
                   </div>)
               })}
            </Slider>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return {
        initLoad:state.initLoadContentSaleLeft
    }
}
const connected = connect(mapStateToProps)(ContentSaleLeft);
export { connected as ContentSaleLeft } 