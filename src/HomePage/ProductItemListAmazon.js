import React from "react";
import { connect } from "react-redux";
import { ContentBuyAmazonTitle } from "./ContentBuyAmazonTitle";
import { ProductItemAmazon } from "./ProductItemAmazon";
class ProductItemListAmazon extends React.Component {
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
            <div class="row mt-4">
                <ProductItemAmazon/>
                <ProductItemAmazon/>
                <ProductItemAmazon/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ProductItemListAmazon);
export { connected as ProductItemListAmazon } 