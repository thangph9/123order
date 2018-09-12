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
            numbOut:1,
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
        console.log(this.state.numbOut);
    }
    handleClickImage(value){
        this.setState({
            numbOut:value,
        })
        console.log(this.props.handleMouse);
        this.props.dispatch(mouseClickSmallImageProduct(value));
    }
    handleOut(){
        this.props.dispatch(mouseOutSmallImageProduct(this.state.numbOut));
    }
    render() {
        var {loadDetail}=this.props;
        var {handleMouse}=this.props;
        console.log(this.state.numbOut);
        return (
            <div onMouseOut={()=>this.handleOut()} className="col-md-1 xzoom-thumbs">
                <span style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(1)} onMouseOver={()=>this.handleMouseOver(1)} alt="img" className={(this.state.numbOut===1) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[0]:'' } /></span>
                <span style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(2)} onMouseOver={()=>this.handleMouseOver(2)} alt="img" className={(this.state.numbOut===2) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[1] :''}/></span>
                <span style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(3)} onMouseOver={()=>this.handleMouseOver(3)} alt="img" className={(this.state.numbOut===3) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[2] : ''} /></span>
                <span style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(4)} onMouseOver={()=>this.handleMouseOver(4)} alt="img" className={(this.state.numbOut===4) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[3] : ''} /></span>
                <span style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(5)} onMouseOver={()=>this.handleMouseOver(5)} alt="img" className={(this.state.numbOut===5) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[4] :''} /></span>
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