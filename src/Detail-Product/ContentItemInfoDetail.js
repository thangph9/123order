import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentItemInfoDetail extends React.Component {
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
            <div className="container item-info-detail border-top-0">
                <ul>
                     <li>{(loadDetail[0]!=undefined) &&loadDetail[0].description}</li>
                </ul>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail
    }
}
const connected = connect(mapStateToProps)(ContentItemInfoDetail);
export { connected as ContentItemInfoDetail } 