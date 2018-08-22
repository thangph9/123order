import React from "react";
import { connect } from "react-redux";
import { ProductItemBox } from "./ProductItemBox";
import { PayMoney } from "./PayMoney";

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
            <div className="content">
                <nav aria-label="breadcrumb">
                    <ol className="container breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item"><a href="#">Giỏ hàng</a></li>
                    </ol>
                </nav>
                <div className="container cart-items">
                    <div className="row">
                        <h6 className="pl-3 pt-2">GIỎ HÀNG</h6>
                    </div>
                </div>
                <ProductItemBox/>
                <div class="container pay-money">
                <PayMoney/>
                </div>
                
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(Content);
export { connectedContent as Content } 