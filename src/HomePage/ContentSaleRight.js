import React from "react";
import { connect } from "react-redux";
import { ContentSaleRightTop } from "./ContentSaleRightTop";
import { ContentSaleRightBot } from "./ContentSaleRightBot";
class ContentSaleRight extends React.Component{
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
            <div class="col-5 p-2">
                <div class="container p-0">
                    <ContentSaleRightTop/>
                    <ContentSaleRightBot/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentSaleRight);
export { connected as ContentSaleRight } 