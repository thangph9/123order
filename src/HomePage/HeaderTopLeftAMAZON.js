import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { MenuHideA } from "./MenuHideA";
import {mouseOverCategory} from '../actions';
import {initLoadCategoryIndexSecond} from '../actions';
import {initLoadCategoryIndexThird} from '../actions';
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
    handleMouseOutMenu(){
        document.getElementById("linkAmazon").style.display = "none";
    }
    handleMouseOverMenu(){
        document.getElementById("linkAmazon").style.display = "block";
    }
    render() {
        var {LoadCate}=this.props;
        return (
            <li className="nav-item dropdown" id='menuAmazon' onMouseOver={()=>this.handleMouseOverMenu()} onMouseOut={()=>this.handleMouseOutMenu()}>
                <Link to="/danh-muc-amazon" className="nav-link text-white" onMouseOver={(LoadCate.length>0)?()=>this.handleMouseOver(LoadCate[9]):()=>this.handleMouseOver(0)}>
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

    return {
        LoadCate: state.initLoadCategoryFirstItem,
        initLoadCategorySecondItem:state.initLoadCategorySecondItem,
        initLoadCategoryThirdItem:state.initLoadCategoryThirdItem,
        
    }
}
const connected = connect(mapStateToProps)(HeaderTopLeftAMAZON);
export { connected as HeaderTopLeftAMAZON } 