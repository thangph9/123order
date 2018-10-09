import React from "react";
import { connect } from "react-redux";
//import {loadImg} from '../../actions';
//import initLoad from '../../actions/initLoadHomePage';
//import axios from 'axios';
class MenuHideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            display: 'none'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.OpenCategory = this.OpenCategory.bind(this);
    }
    OpenCategory(nodeid) {
        
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleClickTopHot() {

    }
    render() {
        var { LoadCategory } = this.props;
        var categoryItems = [];
        if (LoadCategory.length > 0) {
            for (var i = 0; i < 9; i++) {
                categoryItems.push(
                    <div key={i} className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(LoadCategory[i].nodeid)}>
                        <div className="col-10">
                            <span>{LoadCategory[i].category}</span>
                        </div>
                    </div>)
            }
        }
        return (
            <div className="container col-md-3 tab">
                {categoryItems}
                <div className="row pl-4">
                    <div className="nav-line col-12" />
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'allCategory')}   >
                    <div className="col-8">
                        <span>Xem toàn bộ danh mục</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadImg: state.loadImg,
        LoadCategory: state.initLoadCategory
    }
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 