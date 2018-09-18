import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHide } from "./MenuHide";
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
    render() {

        return (
            <li className="nav-item dropdown" id='menuEbay' >
                <Link to="/danh-muc-ebay" className='nav-link text-white'>
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

    return state;
}
const connected = connect(mapStateToProps)(HeaderTopLeftEBAY);
export { connected as HeaderTopLeftEBAY } 