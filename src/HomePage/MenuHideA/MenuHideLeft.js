import React from "react";
import { connect } from "react-redux";
import {mouseOverCategory} from '../../actions';
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
        console.log(value);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {
        var { LoadCategory } = this.props;
        var categoryItems = [];
        if (LoadCategory.length > 0) {
            for (var i = 9; i < 18; i++) {
                categoryItems[i-9]=(<div key={i-9} className="row tablinks pl-4 my-3" onMouseOver={() => this.handleMouseOver(LoadCategory[i])}>
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
                <div className="row tablinks pl-4 my-3"    >
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