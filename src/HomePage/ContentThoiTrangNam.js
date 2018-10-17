import React from "react";
import { connect } from "react-redux";
import { ContentThoiTrangNamTitle } from "./ContentThoiTrangNamTitle";
import { ProductItemBoxThoiTrangNam } from "./ProductItemBoxThoiTrangNam";
import { ContentThoiTrangNamSeeMore } from "./ContentThoiTrangNamSeeMore";

class ContentThoiTrangNam extends React.Component{
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
                <ContentThoiTrangNamTitle/>
                <div className="container">
                    <ProductItemBoxThoiTrangNam/>
                    <ContentThoiTrangNamSeeMore/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentThoiTrangNam);
export { connected as ContentThoiTrangNam } 