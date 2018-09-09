import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

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

    render() {
        var {loadDetail}=this.props;
        return (
            <div className="col-md-1 xzoom-thumbs">
                <span style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) && loadDetail[0].smallimage[0] } /></span>
                <span style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) && loadDetail[0].smallimage[1]}/></span>
                <span style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) && loadDetail[0].smallimage[2]} /></span>
                <span style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) && loadDetail[0].smallimage[3]} /></span>
                <span style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) && loadDetail[0].smallimage[4]} /></span>
                <span style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive" src={(loadDetail[0]!=undefined) && loadDetail[0].smallimage[5]} /></span>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail
    }
}
const connected = connect(mapStateToProps)(ContentDetailRight);
export { connected as ContentDetailRight } 