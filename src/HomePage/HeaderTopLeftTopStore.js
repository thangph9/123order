import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHideT } from "./MenuHideT";
//import $ from 'jquery';
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
    // componentDidMount() {
    //     $('#navbarDropdownMenuLinkTopStore').on('click', function () {
    //         $('#menuTopStore').toggleClass("show");
    //             $('#linkTopStore').toggleClass("show");
    //             $('#linkAmazon').removeClass("show");
    //             $('#linkEbay').removeClass("show");
    //             $('#navbarDropdownMenuLinkTopStore').attr('aria-expanded', 'true');
    //     })
    // }
    handleMouseOver(value){
        this.props.dispatch(mouseOverCategoryFirst(value));
    }
    render(){
        var {LoadCate}=this.props;
        return (
            <li className="nav-item dropdown" id="menuTopStore">
                <Link onMouseOver={()=>this.handleMouseOver(LoadCate[18])}  to="/" className="nav-link dropdown-toggle dropdown-arrow text-white" id="navbarDropdownMenuLinkTopStore" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">TOP STORE</Link>
                <div className="container dropdown-menu top-sore-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkTopStore">
                <MenuHideT/>
                </div>
            </li>
        )
        
    }
}
function mapStateToProps(state){
  
    return {
        LoadCate:state.initLoadCategoryFirstItem
    }
}
const connected=connect(mapStateToProps)(HeaderTopLeftTopStore);
export { connected as HeaderTopLeftTopStore } 