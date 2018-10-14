import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import axios from 'axios';
import {mouseScrollDetailProduct} from '../actions';
import {initLoadProductDetailAmazon} from '../actions'; 
import {mouseOverSmallImageProduct} from '../actions';
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
        axios.post('/product-detail-amazon',).then(res=>{
            var findProduct=res.data[0].filter(item=>{
                return item.asin==this.props.match.params.asin
            })
            this.props.dispatch(mouseOverSmallImageProduct(0));
            this.props.dispatch(initLoadProductDetailAmazon(findProduct));
        })
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
            <div ref="scrollProduct">
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