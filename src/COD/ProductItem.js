import React from "react";
import { connect } from "react-redux";

class ProductItem extends React.Component {
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
            <tr>
                <td className="row ml-3">
                    <div className="col-md-1">
                        <img src="img/webcam.png" alt="img" />
                    </div>
                    <div className="item-name col-md-11 pl-4">
                        Logitecah HD Pro Webcam C920, Widescreen Video Calling and Recording, 1080p Camera, Desktop or Laptop...
                    </div>
                    <div className="col-md-4">
                        <a href="#" className="ml-5 pl-2 mt-2">Xóa khỏi giỏ hàng</a>
                    </div>
                </td>
                <td className="item-price text-center">$ 33.28 ~ 787.000 VNĐ</td>
                <td className="item-count text-center">2</td>
                <td className="items-money text-center">73.99 ~ 1.749.000 VNĐ</td>
            </tr>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ProductItem);
export { connected as ProductItem } 