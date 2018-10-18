import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ContentSaleRightBot extends React.Component {
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
            <div className="row mt-3">
                <Link to={'/landing-page-thoi-trang'} className="col-12"> <img alt="Responsive img" src="img/Banner 2.png" className="img-fluid" /> </Link>
            </div>
            
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentSaleRightBot);
export { connected as ContentSaleRightBot } 