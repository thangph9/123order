import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
class NewProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    componentDidMount() {
          document.documentElement.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        document.documentElement.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(){
        console.log('abc');
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
const connectedHomePage = connect(mapStateToProps)(NewProductDetail);
export { connectedHomePage as NewProductDetail } 