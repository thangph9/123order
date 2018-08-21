import React from "react";
import { connect } from "react-redux";
import { ContentSaleLeft } from "./ContentSaleLeft";
import { ContentSaleRight } from "./ContentSaleRight";
class ContentSale extends React.Component{
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
            <div class="container mt-2">
                <div class="row">
                    <ContentSaleLeft/>
                    <ContentSaleRight/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentSale);
export { connected as ContentSale } 