import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
                <img alt ="img" className="xzoom" src={(loadDetail[0]!=undefined ) ? loadDetail[0].largeimage[mouseOverImage]:''} />
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