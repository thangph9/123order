import React from "react";
import { connect } from "react-redux";
import { ContentSale } from "./ContentSale";
import { ContentDeal } from "./ContentDeal";
import { ContentTransport } from "./ContentTransport";
import { ContentDongHo } from "./ContentDongHo";
import { ContentThoiTrangNam } from "./ContentThoiTrangNam";
import { ContentThoiTrangNu } from "./ContentThoiTrangNu";
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
                <ContentSale/>
                <ContentDeal/>
                <ContentDongHo/>
                <ContentThoiTrangNam/>
                <ContentThoiTrangNu/>
                <ContentTransport/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(Content);
export { connectedContent as Content } 