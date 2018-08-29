import React from "react";
import { connect } from "react-redux";
import { GiaSocHideItemItemList } from "./GiaSocHideItemItemList";
class GiaSocHideItemBox extends React.Component {
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
        console.log("LOG");
        return (
            <div className="row my-2">
                <div className="col-md-1"></div>
                <div className="col-md-10 justify-content-center">
                <GiaSocHideItemItemList />
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(GiaSocHideItemBox);
export { connected as GiaSocHideItemBox } 