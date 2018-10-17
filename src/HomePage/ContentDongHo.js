import React from "react";
import { connect } from "react-redux";
import { ContentDongHoTitle } from "./ContentDongHoTitle";
import { ProductItemBoxDongHo } from "./ProductItemBoxDongHo";
import { ContentDongHoSeeMore } from "./ContentDongHoSeeMore";

class ContentDongHo extends React.Component{
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
                <ContentDongHoTitle/>
                <div className="container">
                    <ProductItemBoxDongHo/>
                    <ContentDongHoSeeMore/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(ContentDongHo);
export { connected as ContentDongHo } 