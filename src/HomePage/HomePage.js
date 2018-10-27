import React from "react";
//import axios from 'axios';
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { ProductItemBox } from "./ProductItemBox";
import {Header} from '../Sections/Header';
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
    componentDidMount(){
        this.props.dispatch(initLoadContentDeal(this.props.loadAdd));
        axios.post('/home').then(res=>{
            
            this.props.dispatch(initLoadContentSaleLeft(res.data[0].ContentSale));
            this.props.dispatch(initLoadEbayHide(res.data[0].HideEbayTopHot));
            this.props.dispatch(initLoadAmazonHide(res.data[0].HideAmazonTopHot));
        })
        document.documentElement.scrollTop=0
        console.log("Did Mount")
    }
    componentWillMount(){
        console.log("Will Mount")
        
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
        loadAdd:state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage } 