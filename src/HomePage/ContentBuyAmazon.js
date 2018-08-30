import React from "react";
import { connect } from "react-redux";
import { ContentBuyAmazonTitle } from "./ContentBuyAmazonTitle";
import { ProductItemBoxAmazon } from "./ProductItemBoxAmazon";
import { ContentDealSeeMore } from "./ContentDealSeeMore";
import { ProductItemAmazon } from "./ProductItemAmazon";
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
                <div className="container mt-4 p-2">
                <div className="row">
                    <ProductItemAmazon/>
                    <ProductItemAmazon/>
                    <ProductItemAmazon/>
                </div>
                <ProductItemBoxAmazon/>
                <ContentDealSeeMore/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentBuyAmazon);
export { connected as ContentBuyAmazon } 