import React from "react";
import { connect } from "react-redux";
import {mouseOverCategory} from '../../actions';
import axios from 'axios';
import {initLoadCategoryIndexSecond} from '../../actions';

class MenuHideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            display: 'none'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleMouseOver(value){
        this.props.dispatch(mouseOverCategory(value));
        axios.post('/category',{itemCate:value}).then(res=>{
            this.props.dispatch(initLoadCategoryIndexSecond(res.data[1]));
        }) 
        axios.post('/category',{itemCateSecond:this.props.LoadCategoryIndexSencond}).then(res=>{
        }) 
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {
        var { LoadCategory } = this.props;
        var newLoadCategory=[];
        if(LoadCategory.length > 0){
             newLoadCategory = LoadCategory.slice(0, 9);
        }
        return (
            <div className="container col-md-3 tab">
                {(LoadCategory.length > 0) && newLoadCategory.map((value, index) => {
                    return (
                        <div key={index} className="row tablinks pl-4 my-3" onMouseOver={() => this.handleMouseOver(value)}>
                            <div className="col-10">
                                <span>{value.category}</span>
                            </div>
                        </div>
                    )
                })}
                <div className="row pl-4">
                    <div className="nav-line col-12" />
                </div>
                <div className="row tablinks pl-4 my-3"   >
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
        LoadCategory: state.initLoadCategory,
        LoadCategoryIndexSencond: state.initLoadCategoryIndexSecond
    }
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 