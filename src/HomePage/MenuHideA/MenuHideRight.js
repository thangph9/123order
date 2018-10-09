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
                        <div id="congNghiep" className="tabcontent" style={{ display: 'none' }}>
                <div className="container" aria-haspopup="true" aria-expanded="false">
                <div className="row">
  <div className="col-md-8">
    <div className="row">
      <div className="col-md-12 gia-soc-title">
        <span className="title-stroke ml-2" />
        <span className="ml-2">CÔNG NGHIỆP</span>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Đồ chơi</span>
          <li>
            <Link to="/danh-muc-ebay" className="ml-2 text-dark 
                                                                          list-item">Đồ chơi lego</Link>
          </li>
          <li>    
            <Link to="/danh-muc-ebay" className="ml-2 text-dark list-item">Đồ chơi barbie</Link>
          </li>
          <li>    
            <Link to="/danh-muc-ebay" className="ml-2 text-dark list-item">Đồ chơi giáo dục</Link>
          </li>
          <li>    
            <Link to="/danh-muc-ebay" className="ml-2 text-dark list-item">Đồ chơi thông minh</Link>
          </li>
        </ul>
      </div>
    </div>

  </div>
  <div className="col-md-4">
    <img src="/img/dropdown-comerical.png" alt='img' className="img-fluid pr-2" />
  </div>
</div>

                    

                </div>
            </div>
          </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRight);
export { connected as MenuHideRight } 