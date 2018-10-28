import React from "react";
import { connect } from "react-redux";

class ContentBodyDetailRight extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {

    var {loadDetail}=this.props;
    var starNumber=0;
        if(loadDetail!=undefined) starNumber=Number(loadDetail[1][0].star)*20;
    return (
      <div className="content col-md-8 col-sm-7 col-xs-12 col-tn-12">
        <div className="tt_sp_chitiet">
          <div className="ten_sanpham row col-lg-12 col-md-12 no-gutter-right">
            <h1>Ubio Labs Lightning Cable Charging Kit</h1>
          </div>
          <div className="col-lg-8 col-md-8 no-gutter col-sm-12" style={{ width: 502 }}>
            <div className="col-lg-12 col-md-12 no-gutter">
              <div className="binhluan_dgia pull-left col-sm-12 col-xs-12 col-md-5 col-lg-5 no-gutter">
                <div className="star-rating" style={{ fontSize: '13px', position: 'static' }}>
                  <div className="back-stars" style={{ top: '4px' }}>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <div className="front-stars" style={{ width: `${starNumber}%` }}>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                  </div>
                  <span> Chưa có  đánh giá</span>
                </div>
              </div>
            </div>
            <div className="block_ttsp">
              <ul>
                <li>
                  <label>Giá gốc:</label>
                  <span>
                    {(loadDetail!=undefined)?loadDetail[1][0].price:0}
                    </span>
                </li>
                <li>
                  <label>Bạn tiết kiệm:</label>
                  <span>
                  {(loadDetail!=undefined)?loadDetail[1][0].save_price:0}
                  </span>      
                </li>
                <li>
                  <label>Giá đã giảm: </label>
                  <span>{(loadDetail!=undefined)?loadDetail[1][0].deal_of_day:0}</span>
                </li>
              </ul>
              <span>Giá trên là giá cuối cùng, bạn không cần trả thêm bất kỳ khoản phí nào khác</span>
            </div>
            <div className="block_tk_tinhtrangbansp">
              <div className="tinhtrang_sp">
                <span className="time_today">Hôm nay:</span>
                <div className="sl_con pull-left">Số lượng còn (30)</div>
                <div className="sl_daban pull-right">Đã bán(0)</div>
              </div>
              <div className="progress tientrinh_bansp">
                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{ width: '100%' }}>
                </div>
              </div>
              <div className="tieuchi_banhang">
                <ul>
                  <li>Chi phí minh bạch</li>
                  <li>Giao hàng từ 5 - 12 ngày</li>
                  <li>Hàng hóa được đảm bảo</li>
                  <li>Mua càng nhiều, tiết kiệm càng nhiều</li>
                </ul>
              </div>
            </div>
            <div className="soluong_sp">
              <label className="col-lg-2 no-gutter">Số lượng: </label>
              <div className="range_giatri col-lg-10 no-gutter-right">
                <div>
                  <div className="input-group-prepend down-quantity">
                    <button className="giam_sl" id="minus-btn" />
                  </div>
                  <input type="text" id="txtQuantity" className="qty_input input_num_qty" defaultValue={1} min={1} />
                  <div className="input-group-prepend up-quantity">
                    <button className="tang_sl" id="plus-btn" />
                  </div>
                </div>
              </div>
            </div>
            <div className="action_dathang col-lg-12 col-md-12 col-sm-12 col-xs-12 no-gutter">
              <div className="tt_ngay col-md-6 col-sm-6 col-xs-6 no-gutter-left btnBuyProduct cur" data-store={2}>
                <a><span>Thanh toán ngay</span></a>
              </div>
              <div className="them_giohang col-md-6 col-sm-6 col-xs-6 no-gutter-right">
                <a className="btn-addtocart cur"><span>Thêm vào giỏ hàng</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 no-gutter-right bl_kiemhang_us" style={{ position: 'absolute', top: 44, left: 515 }}>
            <div className="block_ttthanhtoan_chitiet" style={{ width: 241 }}>
              <ul>
                <li>
                  <h6>CHẤP NHẬN THANH TOÁN</h6>
                  <div>
                    <label >Thẻ thanh toán nội địa</label>

                  </div>
                  <div className="the_thtoan">
                    <label >Thẻ Visa/Master/JCB</label>



                  </div>
                </li>
                <li>
                  <h6>HỆ THỐNG TỰ ĐỘNG</h6>
                  <div>
                    <label >Xử lý đơn hàng với costco</label>
                  </div>
                  <div>
                    <label >Thông báo tình trạng đơn hàng</label>

                  </div>
                </li>
                <li>
                  <h6>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</h6>
                  <div>
                    <label >Nhận hàng trong vòng 2 tuần nếu thanh toán ngay hôm nay</label>
                    <span><img width={19} height={19} src="" alt="img" /></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )

  }
}
function mapStateToProps(state) {
  return {
    loadDetail: state.initLoadProductDetail.data,
  }
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailRight);
export { connectedHomePage as ContentBodyDetailRight } 