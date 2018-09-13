import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {mouseOverSmallImageProduct} from '../actions';
import {mouseClickSmallImageProduct} from '../actions';
import ReactImageMagnify from 'react-image-magnify';
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
    }
    handleClickImage(value){
        this.setState({
            numbOut:value,
        })
        console.log(this.props.handleMouse);
        this.props.dispatch(mouseClickSmallImageProduct(value));
    }
    render() {
        var {loadDetail}=this.props;
        var {handleMouse}=this.props;
        return (
            <ul className="col-md-1 xzoom-thumbs">
                <li style={{cursor:'pointer'}} >
                <ReactImageMagnify className={(handleMouse==1) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'}  onMouseOver={()=>this.handleMouseOver(1)} {...{
						smallImage: {
							alt: 'img',
							width:300,
							height:300,
							src: (loadDetail[0]!=undefined) ? loadDetail[0].smallimage[0]:'' 
						},
						largeImage: {
							src: (loadDetail[0]!=undefined) ? loadDetail[0].smallimage[0]:'',
							width: 900,
							height: 900
						}		
			}} />
                <img onClick={()=>this.handleClickImage(1)}  alt="img" />
                </li>
                <li style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(2)} onMouseOver={()=>this.handleMouseOver(2)} alt="img" className={(handleMouse==2) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[1] :''}/></li>
                <li style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(3)} onMouseOver={()=>this.handleMouseOver(3)} alt="img" className={(handleMouse==3) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[2] : ''} /></li>
                <li style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(4)} onMouseOver={()=>this.handleMouseOver(4)} alt="img" className={(handleMouse==4) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[3] : ''} /></li>
                <li style={{cursor:'pointer'}} ><img onClick={()=>this.handleClickImage(5)} onMouseOver={()=>this.handleMouseOver(5)} alt="img" className={(handleMouse==5) ? 'xzoom-gallery d-lg-block mb-2  xactive active-small-image': 'xzoom-gallery d-lg-block mb-2  xactive'} src={(loadDetail[0]!=undefined) ? loadDetail[0].smallimage[4] :''} /></li>
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