import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderBotSearchLeft extends React.Component{
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
            <div className="col-lg-2 mx-2 my-2 justify-content-center"> 
                <Link to="/home"> <img src="/img/logo-trang.png" alt="img" className="web-logo"/></Link>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderBotSearchLeft);
export { connected as HeaderBotSearchLeft } 