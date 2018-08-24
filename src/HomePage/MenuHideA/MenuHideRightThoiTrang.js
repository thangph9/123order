import React from "react";
import { connect } from "react-redux";
class MenuHideRightThoiTrang extends React.Component {
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
            <div id="thoiTrangA" className="tabcontent" style={{ display: 'none' }}>
                <div className="container" aria-haspopup="true" aria-expanded="false">
                <div className="row">
  <div className="col-md-8">
    <div className="row">
      <div className="col-md-12 gia-soc-title">
        <span className="title-stroke ml-2" />
        <span className="ml-2">THỜI TRANG</span>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Đồng hồ</span>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Đồng hồ cơ</a>
          </li>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Đồng hồ pin</a>
          </li>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Đồng hồ thông minh</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Thời trang</span>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Thời trang nam</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Thời trang nữ</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Thời trang trẻ em</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Đồ chơi</span>
          <li>
            <a href="#" className="ml-2 text-dark 
                                                                          list-item">Đồ chơi lego</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Đồ chơi barbie</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Đồ chơi giáo dục</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Đồ chơi thông minh</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="row mt-2">
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Thực phẩm chức năng</span>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Giảm cân</a>
          </li>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Protein</a>
          </li>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Callogen</a>
          </li>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Vitamin</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Đồ công nghệ</span>
          <li>
            <a href="#" className="ml-2 text-dark list-item">Loa</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Camera</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Âm ly</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <span className="list-tittle">Gia dụng</span>
          <li>
            <a href="#" className="ml-2 text-dark 
                                                                          list-item">Máy xay</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Máy xay cafe</a>
          </li>
          <li>    
            <a href="#" className="ml-2 text-dark list-item">Máy hút bụi</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <img src="img/dropdown-comerical.png" alt='img' className="img-fluid pr-2" />
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
const connected = connect(mapStateToProps)(MenuHideRightThoiTrang);
export { connected as MenuHideRightThoiTrang } 