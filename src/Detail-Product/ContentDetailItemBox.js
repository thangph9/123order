import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentDetailItemList } from "./ContentDetailItemList";

class ContentDetailItemBox extends React.Component {
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
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ width: '37%' }}>Người bán</th>
                        <th style={{ width: '13%' }} className="text-center">Tình trạng hàng</th>
                        <th style={{ width: '7%' }} className="text-center">Giá bán</th>
                        <th style={{ width: '21%' }} className="text-center">Thời gian nhận hàng</th>
                        <th style={{ width: '22%' }} className="text-center">Lựa chọn</th>
                    </tr>
                </thead>
                <ContentDetailItemList/>
            </table>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetailItemBox);
export { connected as ContentDetailItemBox } 