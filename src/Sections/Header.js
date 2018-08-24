import React from "react";
import { connect } from "react-redux";
import {HeaderTop} from "../HomePage/HeaderTop";
import {HeaderBot} from "../HomePage/HeaderBot";
class Header extends React.Component{
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
                <HeaderTop/>
                <HeaderBot/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connectedHeader=connect(mapStateToProps)(Header);
export { connectedHeader as Header } 