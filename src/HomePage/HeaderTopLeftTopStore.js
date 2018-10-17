import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHideT } from "./MenuHideT";
import { mouseOverCategory } from '../actions';
import { initLoadCategoryIndexSecond } from '../actions';
import { initLoadCategoryIndexThird } from '../actions';
//import $ from 'jquery';
class HeaderTopLeftTopStore extends React.Component {
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
    handleMouseOutMenu() {
        document.getElementById("linkTopStore").style.display = "none";
    }
    handleMouseOverMenu() {
        document.getElementById("linkTopStore").style.display = "block";
    }
    handleMouseOver(value) {
        if (value != 0) {
            this.props.dispatch(mouseOverCategory(value));
            var { initLoadCategorySecondItem } = this.props;
            var { initLoadCategoryThirdItem } = this.props;
            var categoryScecond = initLoadCategorySecondItem.filter((item, index) => {
                return item.categoryindex == 2 && item.groupid == value.nodeid
            }).filter((v, i) => {
                return i < 6
            })

            this.props.dispatch(initLoadCategoryIndexSecond(categoryScecond))
            var mapCate = categoryScecond.map((value, index) => {
                return (
                    initLoadCategoryThirdItem.filter((item, index) => {
                        return item.categoryindex == 3 && item.groupid == value.nodeid
                    }).filter((v, i) => {
                        return i < 3
                    })
                )
            })
            this.props.dispatch(initLoadCategoryIndexThird(mapCate))
        }
    }
    render() {
        var { LoadCate } = this.props;
        return (
            <li className="nav-item dropdown" id="menuTopStore" onMouseOver={() => this.handleMouseOverMenu()} onMouseOut={() => this.handleMouseOutMenu()}>
                <Link onMouseOver={(LoadCate.length > 0) ? () => this.handleMouseOver(LoadCate[18]) : () => this.handleMouseOver(0)} to="/" className="nav-link dropdown-toggle dropdown-arrow text-white" id="navbarDropdownMenuLinkTopStore" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Amazon Nhật</Link>
                <div className="container dropdown-menu top-sore-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkTopStore">
                    <MenuHideT />
                </div>
            </li>
        )

    }
}
function mapStateToProps(state) {

    return {
        LoadCate: state.initLoadCategoryFirstItem,
        initLoadCategorySecondItem: state.initLoadCategorySecondItem,
        initLoadCategoryThirdItem: state.initLoadCategoryThirdItem,

    }
}
const connected = connect(mapStateToProps)(HeaderTopLeftTopStore);
export { connected as HeaderTopLeftTopStore } 