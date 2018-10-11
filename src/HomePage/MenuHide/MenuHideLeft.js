import React from "react";
import { connect } from "react-redux";
import {mouseOverCategory} from '../../actions';
import {initLoadCategoryIndexSecond} from '../../actions';
import {initLoadCategoryIndexThird} from '../../actions';
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
        var {initLoadCategorySecondItem}=this.props;
        var {initLoadCategoryThirdItem}=this.props;
        var categoryScecond=initLoadCategorySecondItem.filter((item)=>{
            return item.categoryindex==2&&item.groupid==value.nodeid
        })
        this.props.dispatch(initLoadCategoryIndexSecond(categoryScecond))
        var mapCate=categoryScecond.map((value,index)=>{
            console.log(value);
            return (
                initLoadCategoryThirdItem.filter((item)=>{
                    return item.categoryindex==3&&item.groupid==value.nodeid
                })
            )
        })
        this.props.dispatch(initLoadCategoryIndexThird(mapCate))
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
                {(newLoadCategory.length > 0) && newLoadCategory.map((value, index) => {
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
import { format } from "util";
function mapStateToProps(state) {
    return {
        loadImg: state.loadImg,
        LoadCategory: state.initLoadCategoryFirstItem,
        LoadCategoryIndexSencond: state.initLoadCategoryIndexSecond,
        initLoadCategorySecondItem:state.initLoadCategorySecondItem,
        initLoadCategoryThirdItem:state.initLoadCategoryThirdItem
    }
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 