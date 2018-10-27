import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import {initLandingPageThoiTrang} from '../actions';
import {initLoadCurrencyRaito} from '../actions';
import axios from 'axios';
class LandingPageThoiTrang extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    componentWillMount(){
        this.props.dispatch(initLandingPageThoiTrang(this.props.loadAdd));
        axios.post('/landing-page-thoi-trang',{addItem:this.props.loadAdd}).then(res=>{
            
            this.props.dispatch(initLoadCurrencyRaito(res.data[1][0].raito));
        })
        document.documentElement.scrollTop=0
    }
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd:state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(LandingPageThoiTrang);
export { connectedHomePage as LandingPageThoiTrang } 