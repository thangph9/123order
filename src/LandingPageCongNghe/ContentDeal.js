import React from "react";
import { connect } from "react-redux";
import { ProductItemBox } from "./ProductItemBox";
import {ContentDealSeeMoreLanding} from './ContentDealSeeMoreLanding';
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
        //console.log(this.props.loadAdd);
        return (
            <div className="container-fluid mt-4">
                <div className="container">
                    <ProductItemBox/>
                    <ContentDealSeeMoreLanding/>
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