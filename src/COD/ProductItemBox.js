import React from "react";
import { connect } from "react-redux";
import { ProductItemList } from "./ProductItemList";

class ProductItemBox extends React.Component {
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
            <div className="container item-table">
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '51%' }}>Tên/Link sản phẩm</th>
                                <th style={{ width: '20%' }} className="text-center">Giá bán</th>
                                <th style={{ width: '9%' }} className="text-center">Số lượng</th>
                                <th className="text-center">Tổng tiền</th>
                            </tr>
                        </thead>
                        <ProductItemList />
                    </table>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ProductItemBox);
export { connected as ProductItemBox } 