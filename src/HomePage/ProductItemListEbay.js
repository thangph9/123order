import React from "react";
import { connect } from "react-redux";
import { ProductItemEbay } from "./ProductItemEbay";
class ProductItemListEbay extends React.Component {
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
            <div className="row mt-4">
                <ProductItemEbay/>
                <ProductItemEbay/>
                <ProductItemEbay/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ProductItemListEbay);
export { connected as ProductItemListEbay } 