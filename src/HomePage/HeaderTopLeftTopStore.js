import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHideT } from "./MenuHideT";
class HeaderTopLeftTopStore extends React.Component{
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
            <li className="nav-item dropdown" id="menuTopStore">
                <a className="nav-link dropdown-toggle dropdown-arrow text-white" href="#" id="navbarDropdownMenuLinkTopStore" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TOP STORE</a>
                <div className="container dropdown-menu top-sore-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkTopStore">
                <MenuHideT/>
                </div>
            </li>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderTopLeftTopStore);
export { connected as HeaderTopLeftTopStore } 