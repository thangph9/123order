import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ContentSaleRightTop extends React.Component {
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
            <div className="row">
                <Link to={'/landing-page'} className="col-12"> <img alt="Responsive img" src="img/Banner 1.png" className="img-fluid" /> </Link>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentSaleRightTop);
export { connected as ContentSaleRightTop } 