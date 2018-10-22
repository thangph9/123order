import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import axios from 'axios';
import {mouseScrollDetailProduct} from '../actions';
import {initLoadProductDetail} from '../actions'; 
import {mouseClickLinkProductItem} from '../actions';
import {mouseClickSmallImageProduct} from '../actions';
class ProductDetailAmazon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            scrollValue:0
        }
        this.handleScrollToElement = this.handleScrollToElement.bind(this); 
    }
    componentWillMount(){
        axios.post('/product-detail-amazon',{
            asin:this.props.match.params.asin
        }).then(res=>{
            var action=initLoadProductDetail(res.data[1]);
            this.props.dispatch(mouseClickSmallImageProduct(0));
            this.props.dispatch(action);
        })
        document.documentElement.scrollTop=0
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }
    handleScrollToElement() {
        this.props.dispatch(mouseScrollDetailProduct(document.documentElement.scrollTop));
    }
    render() {
        return (
            <div className="body-product-detail"  ref="scrollProduct">
                <Header/>
                <Content/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return state;
}
const connectedHomePage = connect(mapStateToProps)(ProductDetailAmazon);
export { connectedHomePage as ProductDetailAmazon } 