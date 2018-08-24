import React from "react";
import { connect } from "react-redux";
import { ProductItem } from "./ProductItem";

class ProductItemList extends React.Component {
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
            <tbody>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <tr>
                    <td>
                        <h5>Tổng đơn hàng</h5>
                    </td>
                    <td className="item-price"></td>
                    <td className="item-count"></td>
                    <td className="items-money text-center">73.99 ~ 1.749.000 VNĐ</td>
                </tr>
            </tbody>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ProductItemList);
export { connected as ProductItemList } 