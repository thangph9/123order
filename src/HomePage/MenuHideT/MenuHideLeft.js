import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {mouseOverCategory} from '../../actions';
import {initLoadCategoryIndexSecond} from '../../actions';
import {initLoadCategoryIndexThird} from '../../actions';
class MenuHideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            active: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleMouseOver(value){
        this.props.dispatch(mouseOverCategory(value));
        var {initLoadCategorySecondItem}=this.props;
        var {initLoadCategoryThirdItem}=this.props;
        var categoryScecond=initLoadCategorySecondItem.filter((item,index)=>{
            return item.categoryindex==2&&item.groupid==value.nodeid
        }).filter((v,i)=>{
            return i<6
        })
        
        this.props.dispatch(initLoadCategoryIndexSecond(categoryScecond))
        var mapCate=categoryScecond.map((value,index)=>{
            return (
                initLoadCategoryThirdItem.filter((item,index)=>{
                    return item.categoryindex==3&&item.groupid==value.nodeid
                }).filter((v,i)=>{
                    return i<3
                })
            )
        })
        this.props.dispatch(initLoadCategoryIndexThird(mapCate))
    }
    handleClick(){
        document.getElementById("linkTopStore").style.display = "none";
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {
        var { LoadCategory } = this.props;
        var {mouseOverCategory} =this.props;
        var newLoadCategory=[];
        if(LoadCategory.length > 0){
             newLoadCategory = LoadCategory.slice(18, 27);
        }
        return (
            <div className="container col-md-3 tab">
                {(LoadCategory.length > 0) && newLoadCategory.map((value, index) => {
                    return (
                        <Link onClick={()=>this.handleClick()} id={(mouseOverCategory==newLoadCategory[0])?`link-${index}-color-category-amazon`:''} style={{color:'#212529'}} to={`/category/nodeid=${value.nodeid}&categoryindex=${value.categoryindex}`} key={index} className="row tablinks pl-4 my-3 link-color-category" onMouseOver={() => this.handleMouseOver(value)}>
                            <div className="col-10">
                                <span>{value.category}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>


        )


    }
}
function mapStateToProps(state) {

    return {
        loadImg: state.loadImg,
        LoadCategory: state.initLoadCategoryFirstItem,
        LoadCategoryIndexSencond: state.initLoadCategoryIndexSecond,
        initLoadCategorySecondItem:state.initLoadCategorySecondItem,
        initLoadCategoryThirdItem:state.initLoadCategoryThirdItem,
        mouseOverCategory:state.mouseOverCategory
    }
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 