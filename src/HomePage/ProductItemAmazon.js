import React from "react";
import { connect } from "react-redux";
import { ContentBuyAmazonTitle } from "./ContentBuyAmazonTitle";
class ProductItemAmazon extends React.Component {
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
            <div className="col-md-4">
                <div className="card"> <img className="card-img-top img-thumbnail border-0 img-fluid" src="img/Layer 51.png" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title card-title-font">Bộ Đồ Dùng Bàn Ăn Thủy Tinh Corelle...</h5>
                        <i className="far fa-clock card-text align-left" />
                        <p className="card-text align-left remain-time px-1">Còn lại 7 ngày</p>
                        <p className="card-text align-right discount">Giảm 59%</p>
                        <div style={{ clear: 'both' }} />
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ProductItemAmazon);
export { connected as ProductItemAmazon } 