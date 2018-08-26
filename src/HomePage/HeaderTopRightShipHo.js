import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderTopRightShipHo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e){
        this.setState({
            login:true,

        })
    }

    render(){
        
        return (
            <li className="nav-item dropdown" id="menuShipHo">
                <a className="nav-link dropdown-toggle dropdown-arrow text-white" href="" id="navbarDropdownMenuLinkShipHo" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SHIP HỘ</a>
                <div className="container p-2 dropdown-menu ship-ho-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkShipHo">
  <div className="row">    
    <div className="col-md-8 my-2 container">
      <div className="row">
        <img src="img/ship-ho.png" alt="img" className="img-fluid col-12" /> 
      </div>
    </div>
    <div className="col-md-4 container p-4">
      <div className="row">
        <span className="mua-ho-title">DỊCH VỤ SHIP HỘ</span>
      </div>
      <div className="row mt-2">
        <span className="mua-ho-subtittle">RẺ HƠN 30% - AN TOÀN - ĐẢM BẢO</span>
        <ul className="mt-2">
          <li className="mua-ho-li">
            <span>Miễn phí gói lại hàng</span>
          </li>
          <li className="mua-ho-li">
            <span>Miễn phí kiểm tra hàng</span>
          </li>
          <li className="mua-ho-li">
            <span>Miễn phí lưu kho 60 ngày</span>
          </li>
          <li className="mua-ho-li">
            <span>Miễn phí gom hàng</span>
          </li>
          <li className="mua-ho-li">
            <span>Và nhiều dịch vụ khác</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* end menu 2 dropdown  */}
</div>

            </li>
        )
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderTopRightShipHo);
export { connected as HeaderTopRightShipHo } 