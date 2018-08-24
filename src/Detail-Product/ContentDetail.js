import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentDetailLeft } from "./ContentDetailLeft";
import { ContentDetailRight } from "./ContentDetailRight";
import { ContentDetailCentre } from "./ContentDetailCentre";

class ContentDetail extends React.Component {
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
            <div className="container">
                <section id="default" className="padding-top0 ">
                    <div className="row large-5 xzoom-container d-flex flex-row-reverse">
                        <ContentDetailLeft/>
                        <ContentDetailCentre/>
                        <ContentDetailRight/>
                    </div>
                </section>
            </div>


        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetail);
export { connected as ContentDetail } 