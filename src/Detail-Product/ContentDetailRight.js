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
            numbOut:0,
            borderStyle:''
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
        this.setState({
            numbOut:value,
            
        })
        this.props.dispatch(mouseClickSmallImageProduct(value));
    }
    handleOut(){
        this.props.dispatch(mouseOutSmallImageProduct(this.state.numbOut));
    }
    render() {
        var {loadDetail}=this.props;
        var {handleMouse}=this.props;
        var borderStyle='';

        return (
            <div onMouseOut={()=>this.handleOut()} className="col-md-1 xzoom-thumbs">
                <span ><img {(handleMouse==0)? borderStyle='solid 1px red':borderStyle=''} style={{border:borderStyle}} onClick={()=>this.handleClickImage(1)} onMouseOver={()=>this.handleMouseOver(1)} alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[0]:'' } /></span>
                <span ><img {(handleMouse==1)? borderStyle='solid 1px red':borderStyle=''} style={{border:borderStyle}} onClick={()=>this.handleClickImage(2)} onMouseOver={()=>this.handleMouseOver(2)} alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[1] :''}/></span>
                <span ><img {(handleMouse==2)? borderStyle='solid 1px red':borderStyle=''} style={{border:borderStyle}} onClick={()=>this.handleClickImage(3)} onMouseOver={()=>this.handleMouseOver(3)} alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[2] : ''} /></span>
                <span ><img {(handleMouse==3)? borderStyle='solid 1px red':borderStyle=''} style={{border:borderStyle}} onClick={()=>this.handleClickImage(4)} onMouseOver={()=>this.handleMouseOver(4)} alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[3] : ''} /></span>
                <span ><img {(handleMouse==4)? borderStyle='solid 1px red':borderStyle=''} style={{border:borderStyle}} onClick={()=>this.handleClickImage(5)} onMouseOver={()=>this.handleMouseOver(5)} alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[4] :''} /></span>
            </div>
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