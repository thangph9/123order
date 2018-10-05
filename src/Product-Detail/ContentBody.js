import React from "react";
import { connect } from "react-redux";
import { ContentBodyLeft } from "./ContentBodyLeft";
import { ContentBodyRight } from "./ContentBodyRight";
class ContentBody extends React.Component{
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
            <div className="container-main">
                <ContentBodyLeft/>
                <ContentBodyRight/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ContentBody);
export { connectedContent as ContentBody } 