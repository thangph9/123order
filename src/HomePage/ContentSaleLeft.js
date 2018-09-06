import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import {initLoadContentSaleLeft} from '../actions'
import axios from 'axios';
class ContentSaleLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        axios.post('/home').then(res=>{
            var action=initLoadContentSaleLeft(res.data.ContentSale);
            this.props.dispatch(action);
            console.log(this.props.data);
        })
        this.props.dispatch(initLoadContentSaleLeft);
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