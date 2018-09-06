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
        let menuItems = [];
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000
        };
        for(var i=0;i<this.props.initLoad.length;i++){
            menuItems.push(<MenuHideRightTopItem key={this.props.initLoad[i].id}
             detail={this.props.initLoad[i].detail}
             from={this.props.initLoad[i].from}
             price={this.props.initLoad[i].price}
             salePrice={this.props.initLoad[i].salePrice}
             linkImg={this.props.initLoad[i].linkImg}
             />)
        }
        return (

            <Slider {...settings}>
                {menuItems}
                {menuItems}
                {menuItems}
            </Slider>

        )

    }
}
function mapStateToProps(state) {

    return {
        initLoad:state.initLoadEbayHide
    }
}
const connected = connect(mapStateToProps)(MenuHideRightTopItemList);
export { connected as MenuHideRightTopItemList } 