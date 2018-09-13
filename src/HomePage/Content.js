import React from "react";
import { connect } from "react-redux";
import { ContentSale } from "./ContentSale";
import { ContentDeal } from "./ContentDeal";
import { ContentBuyAmazon } from "./ContentBuyAmazon";
import { ContentBuyEbay } from "./ContentBuyEbay";
import { ContentTransport } from "./ContentTransport";

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
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(Content);
export { connectedContent as Content } 