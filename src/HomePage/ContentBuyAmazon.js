import React from "react";
import { connect } from "react-redux";
import { ContentBuyAmazonTitle } from "./ContentBuyAmazonTitle";
import { ProductItemBoxAmazon } from "./ProductItemBoxAmazon";
import { ContentDealSeeMore } from "./ContentDealSeeMore";
class ContentBuyAmazon extends React.Component{
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
            <div className="container-fluid mt-4">
                <ContentBuyAmazonTitle/>
                <ProductItemBoxAmazon/>
                <ContentDealSeeMore/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentBuyAmazon);
export { connected as ContentBuyAmazon } 