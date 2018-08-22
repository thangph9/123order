import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentDetailItemBox } from "./ContentDetailItemBox";

class ContentDetailSeller extends React.Component {
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
            <div>
                <div className="container cart-items">
                    <div className="row">
                        <h6 className="pl-3 pt-2">SẢN PHẨM NÀY CÓ 3 NGƯỜI BÁN</h6>
                    </div>
                    
                </div>
                <div className="container item-table">
                        <div className="row">
                            <ContentDetailItemBox/>
                        </div>
                    </div>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetailSeller);
export { connected as ContentDetailSeller } 