import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ReactImageMagnify from 'react-image-magnify';
class ContentDetailCentre extends React.Component {
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

    render() {
        var {loadDetail}=this.props;
        var {mouseOverImage} = this.props;
        return (
            <div className="col-md-4 big-img">
                <ReactImageMagnify className="xzoom" {...{
						smallImage: {
							alt: 'img',
							width:350,
							height:350,
							src: (loadDetail[0]!=undefined ) ? loadDetail[0].largeimage[mouseOverImage]:''
						},
						largeImage: {
							src: (loadDetail[0]!=undefined ) ? loadDetail[0].largeimage[mouseOverImage]:'',
							width: 900,
                            height: 900						
                        }		
			}} />
            </div>
        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail,
        mouseOverImage:state.mouseOverImageDetailProduct
    }
}
const connected = connect(mapStateToProps)(ContentDetailCentre);
export { connected as ContentDetailCentre } 