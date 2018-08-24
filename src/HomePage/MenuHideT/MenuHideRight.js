import React from "react";
import { connect } from "react-redux";
import { MenuStoreThoiTrang } from "./MenuStoreThoiTrang";
import { MenuStoreSucKhoe } from "./MenuStoreSucKhoe";
import { MenuHideRightTrungTam } from "./MenuHideRightTrungTam";
import { MenuStoreMeBe } from "./MenuStoreMeBe";
import { MenuHideRightCongNghe } from "./MenuHideRightCongNghe";
class MenuHideRight extends React.Component {
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
          <div className="col-md-9">
            <MenuHideRightTrungTam/>
            <MenuStoreThoiTrang/>
            <MenuStoreSucKhoe/>
            <MenuStoreMeBe/>
            <MenuHideRightCongNghe/>
          </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRight);
export { connected as MenuHideRight } 