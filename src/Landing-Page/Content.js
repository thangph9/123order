import React from "react";
import { connect } from "react-redux";
import { ContentSlide } from "./ContentSlide";
import { ContentTrademark } from "./ContentTrademark";
import {ContentDeal} from './ContentDeal';
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
                <ContentSlide/>
                <ContentTrademark/>
                <ContentDeal/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(Content);
export { connectedContent as Content } 