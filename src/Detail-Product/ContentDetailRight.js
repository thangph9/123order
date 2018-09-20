import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {mouseOverSmallImageProduct} from '../actions'
import {mouseClickSmallImageProduct} from '../actions'
class ContentDetailRight extends React.Component {
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
        console.log(value);
        this.props.dispatch(mouseOverSmallImageProduct(value));
    }
    render() {
        let menuItems = [];
        var {loadDetail}=this.props;
        var {handleMouse}=this.props;
        if(loadDetail[0]!=undefined){
            console.log(loadDetail[0].smallimage.length);
            for(var i=0;i<loadDetail[0].smallimage.length;i++){
                console.log(i);
                menuItems.push(<img key={i} onMouseOver={()=>this.handleMouseOver(i)} alt="img" className={(handleMouse==i) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[i]:'' } />);
            }
        }
        return (
            <ul className="col-md-1 xzoom-thumbs">
                <li style={{cursor:'pointer'}} >
                    {menuItems}
                </li>
                
            </ul>
        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail,
        handleMouse:state.mouseOverImageDetailProduct
    }
}
const connected = connect(mapStateToProps)(ContentDetailRight);
export { connected as ContentDetailRight } 