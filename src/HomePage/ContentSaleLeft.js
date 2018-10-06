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
        var menuItems=[];
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
        console.log(this.props.initLoad);
        console.log(this.props.initLoad.length);
        for(var i=0;i<this.props.initLoad.length;i++){
            menuItems.push(
                <div key={i}>
                    <img  alt="Responsive img" src={this.props.initLoad[i].linkanh} className="img-fluid" />
                </div>
            );
        }
        return (
            <div className="col-7 p-2">
            <Slider {...settings}>
               {menuItems}
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