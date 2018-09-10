import React from "react";
//import axios from 'axios';
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { ProductItemBox } from "./ProductItemBox";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "../Sections/Footer";
//import {initLoadHomePage} from '../actions';
//import axios from 'axios';
import {initLoadContentDeal} from '../actions';
import {initLoadContentSaleLeft} from '../actions'
import {initLoadEbayHide} from '../actions';
import {initLoadAmazonHide} from '../actions';

import axios from 'axios';
class HomePage extends React.Component {
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
        axios.post('/home').then(res=>{
            this.props.dispatch(initLoadContentDeal(res.data.ContentAmazonDealDay));
            this.props.dispatch(initLoadContentSaleLeft(res.data.ContentSale));
            this.props.dispatch(initLoadEbayHide(res.data.HideEbayTopHot));
            this.props.dispatch(initLoadAmazonHide(res.data.HideAmazonTopHot));
        })
    }
    render() {
        //console.log(this.props.initLoad);
        //console.log('')
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

    return state;
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage } 