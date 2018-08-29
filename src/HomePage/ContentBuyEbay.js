import React from "react";
import { connect } from "react-redux";
import { ContentBuyEbayTitle } from "./ContentBuyEbayTitle";
import { ProductItemBoxEbay } from "./ProductItemBoxEbay";
import { ContentDealSeeMore } from "./ContentDealSeeMore";
import { ProductItemEbay } from "./ProductItemEbay";
class ContentBuyEbay extends React.Component{
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
                <ContentBuyEbayTitle/>
                <div className="container mt-4 p-2">
                <div className="row">
                    <ProductItemEbay/>
                    <ProductItemEbay/>
                    <ProductItemEbay/>
                </div>
                <ProductItemBoxEbay/>
                <ContentDealSeeMore/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentBuyEbay);
export { connected as ContentBuyEbay } 