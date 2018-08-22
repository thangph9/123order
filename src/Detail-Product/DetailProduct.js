import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import { ProductItemBox } from "./ProductItemBox";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
class DetailProduct extends React.Component {
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
                <Header/>
                
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedHomePage = connect(mapStateToProps)(DetailProduct);
export { connectedHomePage as DetailProduct } 