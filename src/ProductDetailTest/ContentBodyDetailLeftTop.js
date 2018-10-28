import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentBodyDetailLeftTop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
          <img style={{width:367}} src="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
        )

    }
}
function mapStateToProps(state) {
    return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailLeftTop);
export { connectedHomePage as ContentBodyDetailLeftTop } 