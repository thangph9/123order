import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ContentBotRightPage extends React.Component {
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
            <div className="row justify-content-center mt-2">
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-light">&lt;</button>
              <button type="button" className="btn btn-light">1</button>
              <button type="button" className="btn btn-light">2</button>
              <button type="button" className="btn btn-light">3</button>
              <button type="button" className="btn btn-light">&gt;</button>
            </div>
          </div>
          

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBotRightPage);
export { connected as ContentBotRightPage } 