import React from "react";
import { connect } from "react-redux";
import { ContentHead } from "./ContentHead";
import { ContentBody } from "./ContentBody";
class ContentMain extends React.Component{
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
            <main style={{ marginBottom: 30 }} id="product-detail-container-v2" className="product-detail-container-v2 container-v2">
                    <ContentHead/>
                    <ContentBody/>
            </main>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ContentMain);
export { connectedContent as ContentMain } 