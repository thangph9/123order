import React from "react";
import { connect } from "react-redux";
import { MenuHideLeft } from "./MenuHideLeft";
import { MenuHideRight } from "./MenuHideRight";

class MenuHide extends React.Component {
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
             <MenuHideLeft/>
             <MenuHideRight/>
         </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHide);
export { connected as MenuHide } 