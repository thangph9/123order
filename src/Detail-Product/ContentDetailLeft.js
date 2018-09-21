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
        this.handleSelect = this.handleSelect.bind(this);
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
        
    }
    handleSelect(e){
		console.log(e.target.value);
	}
    render() {
        var {loadDetail}=this.props;
        var {mouseClickLink}=this.props;
        return (
            <div className="col-md-7 detail-item">
                <h4>{(loadDetail[0]!=undefined) &&loadDetail[0].title}</h4>
                <div className="row price-item pl-3">
                    <h5 className="mr-5">{(mouseClickLink!=undefined) &&mouseClickLink.price}</h5>
                    <strike className="p">{(mouseClickLink!=undefined) &&mouseClickLink.base_price}</strike>
                </div>
                <div className={(mouseClickLink.sale=='')?'none-hide':'p'}>
                Tiết kiệm: {(mouseClickLink!=undefined) &&mouseClickLink.sale}
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
						<select style={{position: 'relative',left:'25px',borderWidth: '1px',borderStyle: 'solid',borderColor: 'rgb(221, 221, 221)',borderImage: 'initial',borderRadius: '5px',padding: '3px',width: '46px'}} defaultValue={1} onChange={this.handleSelect}>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
                            <option value={4}>4	</option>
							<option value={4}>5	</option>
							<option value={5}>6	</option>
							<option value={6}>7	</option>
							<option value={7}>8	</option>
							<option value={8}>9	</option>
							<option value={10}>10</option>
							<option value={11}>11</option>
							<option value={12}>12</option>
							<option value={13}>13</option>
							<option value={14}>14</option>
							<option value={15}>15</option>
							<option value={16}>16</option>
							<option value={17}>17</option>
							<option value={18}>18</option>
							<option value={19}>19</option>
							<option value={20}>20</option>
							<option value={21}>21</option>
							<option value={22}>22</option>
							<option value={23}>23</option>
							<option value={24}>24</option>
							<option value={25}>25</option>
							<option value={26}>26</option>
							<option value={27}>27</option>
							<option value={28}>28</option>
							<option value={29}>29</option>
							<option value={30}>30</option>
						</select>
                    </div>
                    <div className="col-7 add-cart">
                        <button style={{position: 'relative',right: '77px',top: '-2px',width: '55%'}} className="btn btn-primary">THÊM VÀO GIỎ HÀNG</button>
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
        mouseClick:state.mouseClickSettingNumberProduct,
        mouseClickLink:state.mouseClickLinkProductItem
    }
}
const connected = connect(mapStateToProps)(ContentDetailLeft);
export { connected as ContentDetailLeft } 