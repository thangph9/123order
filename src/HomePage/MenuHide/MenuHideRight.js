import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopHot } from "./MenuHideRightTopHot";
import { MenuHideRightThoiTrang } from "./MenuHideRightThoiTrang";
import { MenuHideRightDongHo } from "./MenuHideRightDongHo";
import { MenuHideRightDienTu } from "./MenuHideRightDienTu";
import { MenuHideRightSucKhoe } from "./MenuHideRightSucKhoe";
import { MenuHideRightGiaDinh } from "./MenuHideRightGiaDinh";
import { MenuHideRightDoChoi } from "./MenuHideRightDoChoi";
import { MenuHideRightTheThao } from "./MenuHideRightTheThao";
import { MenuHideDoCo } from "./MenuHideDoCo";
import { MenuHideRighOto } from "./MenuHideRighOto";
import { MenuHideRightCongNghiep } from "./MenuHideRightCongNghiep";
import { MenuHideRightAllCategory } from "./MenuHideRightAllCategory";
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
            <MenuHideRightTopHot/>
            <MenuHideRightThoiTrang/>
            <MenuHideRightDongHo/>
            <MenuHideRightDienTu/>
            <MenuHideRightSucKhoe/>
            <MenuHideRightGiaDinh/>
            <MenuHideRightDoChoi/>
            <MenuHideRightTheThao/>
            <MenuHideDoCo/>
            <MenuHideRighOto/>
            <MenuHideRightCongNghiep/>
            <MenuHideRightAllCategory/>
          </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRight);
export { connected as MenuHideRight } 