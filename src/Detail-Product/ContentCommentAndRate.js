import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentCommentAndRate extends React.Component {
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
            <div style={{marginTop: 20}} className="container commentandrate">
                <div className="row">
                    <h6 className="pl-3 pt-2">BÌNH LUẬN VÀ ĐÁNH GIÁ</h6>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentCommentAndRate);
export { connected as ContentCommentAndRate } 