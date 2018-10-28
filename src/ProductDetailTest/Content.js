import React from "react";
import { connect } from "react-redux";
import './usexpressreal2.css'
import './usexpressreal3.css'
import {ContentBreadcrumb} from './ContentBreadcrumb'
import { ContentBody } from "./ContentBody";
import { connect } from "react-redux";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {

        return (
            <div >
                <section id="main_container" className="width_100 page_folder sticky">
                    <div className="container-use">
                        <ContentBreadcrumb/>
                        <ContentBody/>
                        <div className="box_product_recent">
                        </div>
                    </div>
                </section>

            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(Content);
export { connectedContent as Content } 