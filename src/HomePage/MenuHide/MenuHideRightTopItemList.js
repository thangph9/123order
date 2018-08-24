import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopItem } from "./MenuHideRightTopItem";
class MenuHideRightTopItemList extends React.Component {
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
            <div className="owl-carousel owl-two p-2">
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
                <MenuHideRightTopItem/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRightTopItemList);
export { connected as MenuHideRightTopItemList } 