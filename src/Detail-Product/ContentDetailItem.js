import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";

class ContentDetailItem extends React.Component {
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
            <tr>
                <td className="row ml-2">
                    <div className="col-md-2">
                        <img src="/img/amazon.png" alt='img' />
                    </div>
                    <div className="col-md-10">
                        <div className="item-name col-md-11 pl-3">
                            <p>AMAZON.COM</p>
                        </div>
                        <div className="row pl-4">
                            <span className="fa fa-star checked pt-1" />
                            <span className="fa fa-star checked pt-1" />
                            <span className="fa fa-star checked pt-1" />
                            <span className="fa fa-star pt-1" />
                            <span className="fa fa-star pt-1" />
                            <ul>
                                <li className="mx-1">(1094 lượt đánh giá)</li>
                            </ul>
                        </div>
                    </div>
                </td>
                <td className="item-status text-center">Mới</td>
                <td className="item-price text-center">1.155.000 VNĐ</td>
                <td className="items-time text-center">04-08-2018 đến 06-08-2018</td>
                <td><button className="btn btn-primary">THÊM VÀO GIỎ HÀNG</button></td>
            </tr>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentDetailItem);
export { connected as ContentDetailItem } 