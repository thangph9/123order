import React from "react";
import { connect } from "react-redux";
import { ContentSale } from "./ContentSale";
import { ContentDeal } from "./ContentDeal";
import { ContentBuyAmazon } from "./ContentBuyAmazon";
import { ContentBuyEbay } from "./ContentBuyEbay";
import { ContentTransport } from "./ContentTransport";
import {initLoadContentDeal} from '../actions';
import axios from 'axios';
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    componentWillMount(){
        axios.post('/home').then(res=>{
            var action=initLoadContentDeal(res.data.ContentAmazonDealDay);
            this.props.dispatch(action);
            
        })
    }

    render(){
        
        return (
            <div>
                <ContentSale/>
                <ContentDeal/>
                <ContentBuyAmazon/>
                <ContentBuyEbay/>
                <ContentTransport/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return {
        loadContent:state.initLoadContentDeal
    }
}
const connectedContent=connect(mapStateToProps)(Content);
export { connectedContent as Content } 