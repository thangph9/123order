import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ContentBotLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }

    render() {

        return (
            <div className="col-md-3 px-2">
  <nav className="navbar navbar-expand-md navbar-light bg-white">
    <button className="navbar-toggler btn-block" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="category">Tùy Chọn</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav1">
      {/*Mua hang amazone*/}
      <div className="container bg-white rounded-top">
        {/*Danh Mục*/}
        <div className="row pl-4 pt-3 category">
          <p>Danh mục</p>
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Đồ chơi trẻ em</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Nước hoa &amp; Mỹ phẩm</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Thực phẩm chức năng</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Điện tử công nghệ</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Trò chơi video</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Phụ tùng ô tô</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-1">
          <div className="col-8 ml-4 category-item">
            <p>Đồ cổ, sưu tập</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-2 pb-2">
          <div className="col-8 ml-4 category-item">
            <p>Công nghiệp</p>
          </div>
          <div className="col-1 category-item">
            <i className="fas fa-angle-right" />
          </div>	
        </div>
        {/*Giá*/}
        <div className="row pl-4 pt-3 category">
          <p>Giá</p>
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />Nhỏ hơn 500.000 VND
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />500.000 - 1.000.000 VND
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />1.000.000 - 2.500.000 VND
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />2.500.000 - 5.000.000 VND
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio" />Lớm hơn 5.000.000 VND
            </label>
          </div>	
        </div>{/*End giá*/}
        {/*Mau sắc*/}
        <div className="row pl-4 pt-3 category">
          <p>Màu sắc</p>
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio2" />Xanh
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio2" />Đỏ
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio2" />Cam
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio2" />Vàng
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio2" />Tím
            </label>
          </div>	
        </div>{/*End Mau sắc*/}
        {/*Thương hiệu nổi bật*/}
        <div className="row pl-4 pt-3 category">
          <p>Thương hiệu nổi bật</p>
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio3" />Remington
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio3" />L'Oréal Men Expert
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio3" />Duschdas
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio3" />Philips
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio3" />Olaplex
            </label>
          </div>	
        </div>{/*End thuong hieu noi bat*/}
        {/*Đánh giá*/}
        <div className="row pl-4 pt-3 category">
          <p>Đánh giá trung bình của khách hàng</p>
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio4" />4 sao trở lên
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio4" />3 sao trở lên
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio4" />2 sao trở lên
            </label>
          </div>	
        </div>
        <div className="row side-item justify-content-center mt-1 pb-1">
          <div className="col-md-10 ml-4 category-item form-check">
            <label className="form-check-label">
              <input type="radio" className="form-check-input" name="optradio4" />1 sao trở lên
            </label>
          </div>	
        </div>{/*End danh gia*/}
      </div>
    </div>
  </nav>				
</div>
    
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBotLeft);
export { connected as ContentBotLeft } 