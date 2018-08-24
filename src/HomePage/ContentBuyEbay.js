import React from "react";
import { connect } from "react-redux";
import { ContentBuyEbayTitle } from "./ContentBuyEbayTitle";
import { ProductItemBoxEbay } from "./ProductItemBoxEbay";
import { ContentDealSeeMore } from "./ContentDealSeeMore";
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
                <ProductItemBoxEbay/>
                <ContentDealSeeMore/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentBuyEbay);
export { connected as ContentBuyEbay } 