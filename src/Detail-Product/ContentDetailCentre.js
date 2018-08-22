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

        return (
            <div className="col-md-4 big-img">
                <img className="xzoom" src="img/femmecalm.png" xoriginal="img/femmecalm.png" title="The description goes here " style={{ width: 350 }} />
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetailCentre);
export { connected as ContentDetailCentre } 