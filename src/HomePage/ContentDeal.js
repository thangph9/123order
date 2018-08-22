import React from "react";
import { connect } from "react-redux";
import { ContentDealTitle } from "./ContentDealTitle";
import { ProductItemBox } from "./ProductItemBox";
import { ContentDealSeeMore } from "./ContentDealSeeMore";
class ContentDeal extends React.Component{
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
                <ContentDealTitle/>
                <div className="container">
                    <ProductItemBox/>
                    <ContentDealSeeMore/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentDeal);
export { connected as ContentDeal } 