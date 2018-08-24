import React from "react";
import { connect } from "react-redux";
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
                <div className="col-12"> <img alt="Responsive image" src="img/Banner 2.png" className="img-fluid" /> </div>
            </div>
            
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentSaleRightBot);
export { connected as ContentSaleRightBot } 