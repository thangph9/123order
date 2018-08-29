import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopItemList } from "./MenuHideRightTopItemList";
class MenuHideRightTopHotBox extends React.Component {
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
                <MenuHideRightTopItemList/>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRightTopHotBox);
export { connected as MenuHideRightTopHotBox } 