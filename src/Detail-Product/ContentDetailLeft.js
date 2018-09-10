import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {mouseClickSettingNumberProduct} from '../actions'
class ContentDetailLeft extends React.Component {
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
    handleClickMinus(value){
        var number=this.props.mouseClick +value;
        if(number>=1){
            this.props.dispatch(mouseClickSettingNumberProduct(number));
        }
        onTextChange(){
            
        }
    }
    render() {
        var {loadDetail}=this.props;
        //console.log(loadDetail[0]);
        return (
            <div className="col-md-7 detail-item">
                <h4>{(loadDetail[0]!=undefined) &&loadDetail[0].title}</h4>
                <div className="row border-bottom rate pl-3">
                    <span className="fa fa-star checked pt-1" />
                    <span className="fa fa-star checked pt-1" />
                    <span className="fa fa-star checked pt-1" />
                    <span className="fa fa-star pt-1" />
                    <span className="fa fa-star pt-1" />
                    <ul>
                        <li className="mx-1">(1094 lượt đánh giá) |</li>
                        <li className="mx-1"> Bán tại Amazone Mỹ |</li>
                        <li className="mx-1"> Thương hiệu: FemmeCalm</li>
                    </ul>
                </div>
                <div className="row price-item pl-3">
                    <h5 className="mr-5">2.155.000 VNĐ</h5>
                    <strike className="p">4.320.000 VNĐ</strike>
                </div>
                <div className="p">
                    Tiết kiệm: 971.365 VNĐ
  </div>
                <div className="row">
                    <ul>
                        <li>Kích thước sản phẩm: 3,2 x 8,3 x 8,3 inch</li>
                        <li>Trọng lượng vận chuyển: 1,4 kg</li>
                        <li>ASIN: B07D1J5QC7</li>
                    </ul>
                </div>
                <div className="row quantity mb-4">
                    <div className="col-3">
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" onChange={()=>this.onTextChange} defaultValue={this.props.mouseClick} />
                    </div>
                    <div className="col-2 pl-0">
                        <div className="row plus pl-0">
                            <span className="input-group-btn">
                                <button type="button" onClick={()=>this.handleClickMinus(-1)} className="quantity-left-minus btn btn-danger btn-number" data-type="minus" data-field> -
            <span className="glyphicon glyphicon-minus" />
                                </button>
                            </span>
                        </div>
                        <div className="row">
                            <span className="input-group-btn">
                                <button type="button" onClick={()=>this.handleClickMinus(1)} className="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field> +
            <span className="glyphicon glyphicon-plus">
                                    </span>
                                </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-7 add-cart">
                        <button className="btn btn-primary">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                </div>
                <div className="ml-5">
                    <p>Ưu đãi này sẽ kết thúc trong: </p>
                </div>
                <div className="row ml-3">
                    <div className="col mx-auto pl-3">
                        <p className="mr-2 pl-2" id="day">13d </p>
                        <p>Ngày</p>
                    </div>
                    <div className="col pl-2">
                        <p className="mr-2 pl-2" id="hour">18h</p>
                        <p>Giờ</p>
                    </div>
                    <div className="col pl-2">
                        <p className="mr-2 pl-2" id="minute">21m </p>
                        <p>Phút</p>
                    </div>
                    <div className="col pl-2">
                        <p className="mr-2 pl-2" id="second">33s </p>
                        <p>Giây</p>
                    </div>
                    <div className="col mx-auto">
                    </div>
                    <div className="col mx-auto">
                    </div>
                    <div className="col mx-auto">
                    </div>
                </div>
                <div >
                    <img className="mb-3 pr-3" src="/img/baohanh.png" alt='img' />Cam kết 100% chính hãng
  </div>
                <div >
                    <img className="mb-3 pr-2" src="/img/giaohang.png" alt='img' />Giao hàng dự kiến: Thứ 3 24/7 - Thứ 2 30/7
  </div>
                <div >
                    <img className="mb-3 pr-3" src="/img/doitra.png" alt='img' />Đổi trả trong 7 ngày
  </div>
                <div className="row guide">
                    <ul className="mt-2">
                        <li className="px-2"><em>Hướng dẫn đặt hàng</em></li>
                        <li className="px-2">
                            <em>Chính sách đổi trả</em>
                        </li>
                        <li className="px-2"><em>Quy trình đặt hàng</em></li>
                    </ul>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail,
        mouseClick:state.mouseClickSettingNumberProduct
    }
}
const connected = connect(mapStateToProps)(ContentDetailLeft);
export { connected as ContentDetailLeft } 