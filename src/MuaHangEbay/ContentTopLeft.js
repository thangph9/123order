import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ContentTopLeft extends React.Component {
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
            <div className="col-lg-3 px-2">
  <nav className="navbar navbar-expand-lg navbar-light bg-white p-0">
    <button className="navbar-toggler btn-block side-bg" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <img src="img\ebay-category.png" alt='img' className="img-fluid"/>
    </button>
    <div className="collapse navbar-collapse" alt='igm' id="navbarNav2">
      {/*Mua hang amazone*/}
      <div className="container">
        <div className="row side-bg py-2 d-none d-lg-block">
          <div className="col-12 justif y-content-center">
            <img src="img\ebay-category.png" alt='img' className="img-fluid" />
          </div>
        </div>
        <div className="row side-item mt-3 pb-1">
          <div className="col-10">
            <p>Đồ chơi trẻ em</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-1">
          <div className="col-10">
            <p>Nước hoa &amp; Mỹ phẩm</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-1">
          <div className="col-10">
            <p>Thực phẩm chức năng</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-1">
          <div className="col-10">
            <p>Điện tử công nghệ</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-1">
          <div className="col-10">
            <p>Trò chơi video</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-1">
          <div className="col-10">
            <p>Phụ tùng ô tô</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-1">
          <div className="col-10">
            <p>Đồ cổ, sưu tập</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
        <div className="row side-item mt-2 pb-2">
          <div className="col-10">
            <p>Công nghiệp</p>
          </div>
          <div className="col-1">
            <i className="fas fa-angle-right" />
          </div>
        </div>
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
const connected = connect(mapStateToProps)(ContentTopLeft);
export { connected as ContentTopLeft } 