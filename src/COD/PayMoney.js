import React from "react";
import { connect } from "react-redux";
import $ from 'jquery';
class PayMoney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.PayCod=this.PayCod.bind(this);
        this.PayCredit=this.PayCredit.bind(this);
    }
    PayCredit(){
      console.log('clicked');
    }
    PayCod(){
      console.log('clicked');
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    componentDidMount() {
        $("input[value='check-cod']").on('click', function () {
          $("#cod").show("slow");
          $("#credit").hide("fast");
        });
        $("input[value='check-credit']").on('click', function () {
          $("#cod").hide("fast");
          $("#credit").show("slow");
        });
    }

    render() {

        return (
            <div className="row">
  <div className="col-md-4 site-left border">
    <div className="row pay-method">
      <h6 className="pl-3 pt-2">CHỌN PHƯƠNG THỨC THANH TOÁN</h6>
    </div>
    <div className="check mt-3 mb-1">
      <div className="form-check" >
        <label className="form-check-label">
          <input style={{width:'unset'}} id="check-cod" defaultValue="check-cod" onClick={()=>this.PayCod()} type="radio" className="form-check-input" name="optradio" />
          COD
        </label>
      </div>
      <div className="form-check mb-3">
        <label className="form-check-label">
          <input style={{width:'unset'}} id="check-credit" defaultValue="check-credit" onClick={()=>this.PayCredit()} type="radio" className="form-check-input" name="optradio" />Thanh toán qua thẻ tín dụng
        </label>
      </div>
    </div>
  </div>
  <div className="col-md-8 site-right border">
    <div id="cod" className="cod">
      <div className="col-md-12 border-bottom">
        <h6 className="pl-3 pt-2">COD</h6>
      </div>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-8">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td className="number-product text-right">Sản phẩm(3)</td>
                <td className="summary-price">12.828.000 VNĐ</td>
              </tr>
              <tr>
                <td className="change-point  text-right">Đổi điểm thưởng</td>
                <td>
                  <form className="search-box">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Nhập số điểm thưởng" id="demo" name="email" />
                      <div className="input-group-append">
                        <span className="input-group-text"><a href=""><i className="fa fa-long-arrow-alt-right text-white" /></a></span>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <td />
                <td className="point">1đ = <span className="point-bonuss">10000 VNĐ</span></td>
              </tr>
              <tr>
                <td>
                  <h5>Tổng đơn hàng</h5>
                </td>
                <td className="summary-price">12.828.000 VNĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-12 text-right">
        <input type="text" className="form-control mb-2" id="usr" placeholder="Họ và tên" />
        <input type="text" className="form-control mb-2" id="usr" placeholder="Số điện thoại" />
        <input type="text" className="form-control mb-2" id="usr" placeholder="Địa chỉ" />
        <input type="text" className="form-control mb-2" id="usr" placeholder="Email" />
        <button type="button" className="btn mb-5">THANH TOÁN</button>
      </div>
    </div>
    <div id="credit" className="credit">
      <div className="col-md-12 border-bottom">
        <h6 className="pl-3 pt-2">THANH TOÁN QUA THẺ TÍN DỤNG</h6>
      </div>
      <div className="col-md-12">
        <div className="row">
          <p>Số thẻ của bạn được giữ an toàn 100% và chỉ được sử dụng cho giao dịch này. 123 order sẽ không bao giờ tiết lộ thông tin thẻ của bạn cho bất kỳ bên thứ ba. Hệ thống thanh toán của chúng tôi tuân thủ PCI-DSS, có nghĩa là
            toàn bộ quá trình thanh toán theo các tiêu chuẩn bảo mật cao nhất và là tương đương với cơ sở hạ tầng cấp ngân hàng.
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <img id="visa" src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img id="vpbank" src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
        <div className="col">
          <img src="img/visa1.png" alt="img" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-8">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td className="number-product text-right">Sản phẩm(3)</td>
                <td className="summary-price">12.828.000 VNĐ</td>
              </tr>
              <tr>
                <td className="change-point  text-right">Đổi điểm thưởng</td>
                <td>
                  <form className="search-box">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Nhập số điểm thưởng" id="demo" name="email" />
                      <div className="input-group-append">
                        <span className="input-group-text"><a href=""><i className="fa fa-long-arrow-alt-right text-white" /></a></span>
                      </div>
                    </div>
                  </form>
                </td>
              </tr>
              <tr>
                <td />
                <td className="point">1đ = <span className="point-bonuss">10000 VNĐ</span></td>
              </tr>
              <tr>
                <td>
                  <h5>Tổng đơn hàng</h5>
                </td>
                <td className="summary-price">12.828.000 VNĐ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-12 text-right">
        <input id="infor-bank-acount" type="text" className="form-control mb-2" placeholder="Nhập tài khoản internet banking" />
        <input id="infor-bank-pw" type="text" className="form-control mb-2" placeholder="Nhập mật khẩu" />
        <input id="infor-visa" type="text" className="form-control mb-2" placeholder="Nhập số tài khoản" />
        <button type="button" className="btn mb-5">THANH TOÁN</button>
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
const connected = connect(mapStateToProps)(PayMoney);
export { connected as PayMoney } 