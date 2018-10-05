import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import {mouseScrollDetailProduct} from '../actions';
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
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }
    handleScrollToElement() {
        //console.log(document.documentElement.scrollTop);
        //console.log(mouseScrollDetailProduct);
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