import React from "react";
import { connect } from "react-redux";
import { ContentThoiTrangNuTitle } from "./ContentThoiTrangNuTitle";
import { ProductItemBoxThoiTrangNu } from "./ProductItemBoxThoiTrangNu";
import { ContentThoiTrangNuSeeMore } from "./ContentThoiTrangNuSeeMore";

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
                <ContentThoiTrangNuTitle/>
                <div className="container">
                    <ProductItemBoxThoiTrangNu/>
                    <ContentThoiTrangNuSeeMore/>
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