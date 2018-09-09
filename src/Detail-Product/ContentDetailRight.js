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

        return (
            <ul className="col-md-1 xzoom-thumbs">
                <li style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2 xactive" src="img/femmecalm.png" /></li>
                <li style={{cursor:'pointer'}} ><img alt = "img" className="xzoom-gallery d-lg-block  mb-2 "  src="img/Layer 22.png" /></li>
                <li style={{cursor:'pointer'}} ><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive "  src="img/femmecalm.png" /></li>
            </ul>
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