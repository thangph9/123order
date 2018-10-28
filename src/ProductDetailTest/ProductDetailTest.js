import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import {initLoadProductDetail} from '../actions';
class ProductDetailTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            scrollValue:0
        }
        
    }
    componentDidMount(){
        this.props.dispatch(initLoadProductDetail( this.props.match.params.asin));
        document.documentElement.scrollTop=0
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
    return {
        initLoadProductDetail:state.initLoadProductDetail.data
    }
}
const connectedHomePage = connect(mapStateToProps)(ProductDetailTest);
export { connectedHomePage as ProductDetailTest } 