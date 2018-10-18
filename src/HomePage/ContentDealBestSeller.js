import React from "react";
import { connect } from "react-redux";
import { ContentDealTitleBestSeller } from "./ContentDealTitleBestSeller";
import { ProductItemBoxBestSeller } from "./ProductItemBoxBestSeller";
import { ContentDealSeeMoreBesller } from "./ContentDealSeeMoreBesller";

class ContentDealBestSeller extends React.Component{
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
        //console.log(this.props.loadAdd);
        return (
            <div className="container-fluid mt-4">
                <ContentDealTitleBestSeller/>
                <div className="container">
                    <ProductItemBoxBestSeller/>
                    <ContentDealSeeMoreBesller/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentDealBestSeller);
export { connected as ContentDealBestSeller } 