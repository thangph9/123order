import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {mouseOverSmallImageProduct} from '../actions'
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
        this.props.dispatch(mouseOverSmallImageProduct(value));
    }
    render() {
        var {loadDetail}=this.props;
        var {handleMouse}=this.props;
        return (
            <ul className="col-md-1 xzoom-thumbs">
                {(loadDetail.length>0)&&
                loadDetail[0].smallimage.map((img,index)=>{
                    return(
                        <li key={index} style={{cursor:'pointer'}} ><img onMouseOver={()=>this.handleMouseOver(index)} alt="img" className={(handleMouse==index) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[index]:'' } /></li>
                    );
                })}
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