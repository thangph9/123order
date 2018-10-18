import React from "react";
import { connect } from "react-redux";
import { Itemscope } from "./Itemscope";
import { ContentChecked } from "./ContentChecked";
import { ContentMain } from "./ContentMain";
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
            <div >
                <Itemscope/>
                <ContentMain/>
                <ContentChecked/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(Content);
export { connectedContent as Content } 