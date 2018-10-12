import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHideA } from "./MenuHideA";
class HeaderTopLeftAMAZON extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        this.props.dispatch(mouseOverCategoryFirst(value));
    }
    render() {
        var {LoadCate}=this.props;
        return (
            <li className="nav-item dropdown" id='menuAmazon'>
                <Link to="/danh-muc-amazon" className="nav-link text-white" onMouseOver={()=>this.handleMouseOver(LoadCate[9])}>
                    AMAZON
                </Link>
                <div className="container dropdown-menu amazon-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id='linkAmazon'>
                    <MenuHideA />
                </div>

            </li>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderTopLeftAMAZON);
export { connected as HeaderTopLeftAMAZON } 