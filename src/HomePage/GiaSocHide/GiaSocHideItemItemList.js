import React from "react";
import { connect } from "react-redux";
import { GiaSocHideItem } from "./GiaSocHideItem";
import Slider from "react-slick";
class GiaSocHideItemItemList extends React.Component {
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
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        };
        return (
        	<div style={{padding : '10px'}}>
            <Slider {...settings}>     
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
                <GiaSocHideItem/>
            </Slider>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(GiaSocHideItemItemList);
export { connected as GiaSocHideItemItemList } 