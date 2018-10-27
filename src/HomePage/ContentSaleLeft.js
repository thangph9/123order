import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
class ContentSaleLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            isLoaded:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleClickLink(value){
        this.props.dispatch(mouseClickLinkProductItem(value));
    }
    componentDidMount(){
        this.load(this.img);
    }
    load(img){
        var image=img;
        image.src= this.props.data.img;
        image.onload=()=>{
            this.onImageLoaded();
        }
        image.oneError=()=>{
            this.onImageLoadedError(this.props.data.img);
        }
    }
    handleClickLink(value){
        this.props.dispatch(mouseClickLinkProductItem(value));
    }
    onImageLoaded(){
        this.setState({
            isLoaded:true
        });
    }
    onImageLoadedError(){
        this.setState({
            isError:true
        })
    }
    render() {
        var menuItems = [];
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            className: 'sale-left'
        };
        if (this.props.initLoad != undefined && this.props.initLoad.length > 0) {
            var menuItems = this.props.initLoad[0].ContentSale.map((picture, index) => {
                return (
                    <Link to={'/landing-page-cong-nghe'} key={index}>
                        {!this.state.isLoaded&&<img src='img/Spinner-1s-200px.gif' alt="loading"/>}
                        <img alt="img" className="img-fluid"  src={picture.linkanh} />
                    </Link>)
            })
        }

        return (
            <div className="col-7 p-2">
                <Slider ref="slick" {...settings}>
                    {menuItems}
                </Slider>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return {
        initLoad: state.initLoadContentDeal.data,
        initLoading: state.initLoadContentDeal.loading,
    }
}
const connected = connect(mapStateToProps)(ContentSaleLeft);
export { connected as ContentSaleLeft } 