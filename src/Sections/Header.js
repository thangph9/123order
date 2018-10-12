import React from "react";
import { connect } from "react-redux";
import {HeaderTop} from "../HomePage/HeaderTop";
import {HeaderBot} from "../HomePage/HeaderBot";
import {LoginHide} from '../HomePage/LoginHide';
import {RegisterHide} from '../HomePage/RegisterHide';
import {Forgot} from '../HomePage/Forgot';
import axios from 'axios';
import { initLoadCategoryFirstItem} from "../actions";
import { initLoadCategorySecondItem } from "../actions";
import {initLoadCategoryThirdItem} from '../actions';
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
        console.log(this.props.match.params.nodeid);
        console.log(this.props.match.params.categoryindex);
        axios.post('/category').then(res=>{
            var catefirst=res.data[0].filter((item)=>{
                return item.categoryindex==1;
            }) 
            this.props.dispatch(initLoadCategoryFirstItem(catefirst));
            var catescond=res.data[0].filter((item)=>{
                return item.categoryindex==2;
            })            
            this.props.dispatch(initLoadCategorySecondItem(catescond));
            var catethird=res.data[0].filter((item)=>{
                return item.categoryindex==3;
            })            
            this.props.dispatch(initLoadCategoryThirdItem(catethird));
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