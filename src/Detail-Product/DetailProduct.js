import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { ProductItemBox } from "./ProductItemBox";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import axios from 'axios';
import {initLoadProductDetail} from '../actions'; 

class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }
    componentWillMount(){
        
        axios.post('/detail-product',{mouseClickLink:this.props.mouseClickLink}).then(res=>{
            var action=initLoadProductDetail(res.data[1].ProductDetail);
            this.props.dispatch(action);
        })
    }
    render() {

        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail,
        initLoad:state.initLoadContentDeal,
        mouseClickLink:state.mouseClickLinkProductItem
    }
}
const connectedHomePage = connect(mapStateToProps)(DetailProduct);
export { connectedHomePage as DetailProduct } 