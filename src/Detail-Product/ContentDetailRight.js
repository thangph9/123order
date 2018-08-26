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
            <div className="col-md-1 xzoom-thumbs">
                <a href=""><img alt="img" className="xzoom-gallery d-lg-block mb-2 xactive" width={80} src="img/femmecalm.png" /></a>
                <a href=""><img alt = "img" className="xzoom-gallery d-lg-block  mb-2 " width={80} src="img/Layer 22.png" /></a>
                <a href=""><img alt="img" className="xzoom-gallery d-lg-block mb-2  xactive " width={80} src="img/femmecalm.png" /></a>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetailRight);
export { connected as ContentDetailRight } 