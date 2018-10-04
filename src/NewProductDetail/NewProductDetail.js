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
            scrollValue:0
        }
        
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScrollToElement);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScrollToElement);
    }
    handleScrollToElement() {
        this.setState({
            scrollValue:document.documentElement.scrollTop
        })
    }
    render() {
        return (
            <div ref="scrollProduct">
                <Header/>
                <Content scrollValue={this.state.scrollValue}/>
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