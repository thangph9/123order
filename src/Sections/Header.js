import React from "react";
import { connect } from "react-redux";
import {HeaderTop} from "../HomePage/HeaderTop";
import {HeaderBot} from "../HomePage/HeaderBot";
import {LoginHide} from '../HomePage/LoginHide';
import {RegisterHide} from '../HomePage/RegisterHide';
import {Forgot} from '../HomePage/Forgot';
import axios from 'axios';
import {initLoadCategory} from "../actions";

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
    componentWillMount(){
        
        axios.post('/category').then(res=>{
            var catefirst=res.data[0].filter((item)=>{
                return item.categoryindex==1;
            }) 
            this.props.dispatch(initLoadCategory(catefirst));
           
        })   
    }
    render(){
        
        return (
            <div>
                <HeaderTop/>
                <LoginHide/>
                <RegisterHide/>
                <Forgot/>
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