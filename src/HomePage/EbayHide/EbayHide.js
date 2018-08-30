import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { MenuHideRightTopHotBox } from "../MenuHide/MenuHideRightTopHotBox";
class EbayHide extends React.Component {
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
            <div className="container dropdown-menu mua-ebay-position menu2-dropdown" aria-haspopup="true" aria-expanded="false" id="linkMuaEbay">
  <div className="row">
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-12 gia-soc-title">
          <span className="title-stroke ml-2" />
          <span className="ml-2">MUA HÀNG AMAZON</span>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <ul>
            <span className="list-tittle">Đồng hồ</span>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Đồng hồ cơ</Link>
            </li>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Đồng hồ pin</Link>
            </li>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Đồng hồ thông minh</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <span className="list-tittle">Thời trang</span>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Thời trang nam</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Thời trang nữ</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Thời trang trẻ em</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <span className="list-tittle">Đồ chơi</span>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark 
                                                              list-item">Đồ chơi lego</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Đồ chơi barbie</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Đồ chơi giáo dục</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Đồ chơi thông minh</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-4">
          <ul>
            <span className="list-tittle">Thực phẩm chức năng</span>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Giảm cân</Link>
            </li>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Protein</Link>
            </li>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Callogen</Link>
            </li>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Vitamin</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <span className="list-tittle">Đồ công nghệ</span>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Loa</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Camera</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Âm ly</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul>
            <span className="list-tittle">Gia dụng</span>
            <li>
              <Link to="/mua-hang-ebay" className="ml-2 text-dark 
                                                              list-item">Máy xay</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Máy xay cafe</Link>
            </li>
            <li>    
              <Link to="/mua-hang-ebay" className="ml-2 text-dark list-item">Máy hút bụi</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <img src="img/dropdown-comerical.png" alt="img" className="img-fluid pr-2" />
    </div>
  </div>
</div>


        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(EbayHide);
export { connected as EbayHide } 