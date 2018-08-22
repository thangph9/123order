import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ShowMore extends React.Component {
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
            <div className="my-5 show-more container d-flex justify-content-center">
                <button>XEM THÊM</button>
            </div>


        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedHomePage = connect(mapStateToProps)(ShowMore);
export { connectedHomePage as ShowMore } 