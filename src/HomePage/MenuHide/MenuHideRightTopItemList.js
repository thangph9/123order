import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopItem } from "./MenuHideRightTopItem";
import Slider from "react-slick";
class MenuHideRightTopItemList extends React.Component {
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
            autoplaySpeed: 1000
        };
        return (
            <Slider {...settings}>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
            </Slider>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRightTopItemList);
export { connected as MenuHideRightTopItemList } 