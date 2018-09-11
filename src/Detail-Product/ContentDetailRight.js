import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {mouseOverSmallImageProduct} from '../actions'
import {mouseClickSmallImageProduct} from '../actions'
import {mouseOutSmallImageProduct} from '../actions'
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
    handleClickImage(value){
        this.props.dispatch(mouseClickSmallImageProduct(value));
    }
    handleOut(){
        this.props.dispatch(mouseOutSmallImageProduct());
    }
    render() {
        var {loadDetail}=this.props;
        return (
            <div className="col-md-1 xzoom-thumbs">
                <span onMouseOut={()=>this.handleOut()} onClick={()=>this.handleClickImage(1)} onMouseOver={()=>this.handleMouseOver(1)} style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[0]:'' } /></span>
                <span onMouseOut={()=>this.handleOut()} onClick={()=>this.handleClickImage(2)} onMouseOver={()=>this.handleMouseOver(2)} style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[1] :''}/></span>
                <span onMouseOut={()=>this.handleOut()} onClick={()=>this.handleClickImage(3)} onMouseOver={()=>this.handleMouseOver(3)} style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[2] : ''} /></span>
                <span onMouseOut={()=>this.handleOut()} onClick={()=>this.handleClickImage(4)} onMouseOver={()=>this.handleMouseOver(4)} style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[3] : ''} /></span>
                <span onMouseOut={()=>this.handleOut()} onClick={()=>this.handleClickImage(5)} onMouseOver={()=>this.handleMouseOver(5)} style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[4] :''} /></span>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail,
        mouseHandle:mouseOverImageDetailProduct
    }
}
const connected = connect(mapStateToProps)(ContentDetailRight);
export { connected as ContentDetailRight } 