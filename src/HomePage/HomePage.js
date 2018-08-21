import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemBox} from "./ProductItemBox";
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false;
        })
        console.log("Hello World")
    }
    handleChange(e){
        this.setState({
            login:false,
        })
    }

    render(){
        
        return (
            <div className="container-fluid mt-4">
                 <div className="container">
					<div className="row">
						<ProductItemBox />
					</div>
				 </div>      
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connectedHomePage=connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage } 