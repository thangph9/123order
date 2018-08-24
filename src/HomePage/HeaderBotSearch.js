import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { HeaderBotSearchLeft } from "./HeaderBotSearchLeft";
import { HeaderBotSearchRight } from "./HeaderBotSearchRight";
class HeaderBotSearch extends React.Component{
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
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e){
        this.setState({
            login:true,

        })
    }

    render(){
        
        return (
            <div className="row justify-content-center">
                <HeaderBotSearchLeft/>
                <HeaderBotSearchRight/>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderBotSearch);
export { connected as HeaderBotSearch } 