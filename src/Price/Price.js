import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from '../Sections/Header';
import { Footer } from '../Sections/Footer';
import {ContentSale} from '../Sections/ContentSale';
import { Form } from "./Form";
class Price extends React.Component {
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
                <Header />
                <nav aria-label="breadcrumb">
                    <ol className="container breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item"><a href="#">Yêu cầu báo giá sản phẩm</a></li>
                    </ol>
                </nav>
                <ContentSale/>
                <div className="container content mx-auto">
                <h4 className="d-flex justify-content-center mt-5">YÊU CẦU BÁO GIÁ SẢN PHẨM</h4>
                <hr width="9%" size={50} align="center" style={{background: '#ee7d00', height: 3}} />
                <Form/>
                </div>
                <Footer />

            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedPrice = connect(mapStateToProps)(Price);
export { connectedPrice as Price } 