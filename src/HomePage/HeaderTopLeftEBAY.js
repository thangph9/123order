import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHide } from "./MenuHide";
import {mouseOverCategoryFirst} from '../actions';
//import $ from 'jquery';
class HeaderTopLeftEBAY extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            clicked: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //  this.HandleLinkEbay=this.HandleLinkEbay.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,
        })
    }
    handleMouseOver(value){

        if(value!=0){
            this.props.dispatch(mouseOverCategoryFirst(value));
        }
    }
    render() {
        var {LoadCate}=this.props;
        return (
            <li className="nav-item dropdown" id='menuEbay'  >
                <Link to="/danh-muc-ebay" className='nav-link text-white' onMouseOver={(LoadCate.length>0)?()=>this.handleMouseOver(LoadCate[0]):()=>this.handleMouseOver(0)}>
                    EBAY
                </Link>
                <div className="container dropdown-menu ebay-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id='linkEbay'>
                    <MenuHide />
                </div>
            </li>
        )

    }
}
function mapStateToProps(state) {

    return {
        LoadCate:state.initLoadCategoryFirstItem
    }
}
const connected = connect(mapStateToProps)(HeaderTopLeftEBAY);
export { connected as HeaderTopLeftEBAY } 