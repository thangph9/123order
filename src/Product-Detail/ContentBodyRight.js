import React from "react";
import { connect } from "react-redux";
import { ContentRightDetail } from "./ContentRightDetail";
import { Description } from "./Description";
import { Parameter } from "./Parameter";
class ContentBodyRight extends React.Component{
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
            <div className="container-main-col-2">
                <ContentRightDetail/>
                <Description/>
                <Parameter/>
                
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ContentBodyRight);
export { connectedContent as ContentBodyRight } 