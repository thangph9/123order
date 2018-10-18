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
class ProductDetail extends React.Component {
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
        console.log(this.props.match.params.dealid);
        axios.post('/product-detail',{
            dealid:this.props.match.params.dealid
        }).then(res=>{
            var action=initLoadProductDetail(res.data[1].ProductDetail);
            this.props.dispatch(mouseClickLinkProductItem(res.data[2]));
            this.props.dispatch(mouseClickSmallImageProduct(0));
            this.props.dispatch(action);
        })
        document.documentElement.scrollTop
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
const connectedHomePage = connect(mapStateToProps)(ProductDetail);
export { connectedHomePage as ProductDetail } 