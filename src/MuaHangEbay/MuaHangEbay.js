import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {Header} from '../Sections/Header';
import{Footer} from '../Sections/Footer'
import{ContentTop} from './ContentTop'
import {ContentDeal} from '../HomePage/ContentDeal';
import {ContentTransport} from '../HomePage/ContentTransport';
class MuaHangEbay extends React.Component {
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
                <ContentTop/>
                <ContentDeal/>
                <ContentDeal/>
                <ContentDeal/>
                <ContentTransport/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MuaHangEbay);
export { connected as MuaHangEbay } 