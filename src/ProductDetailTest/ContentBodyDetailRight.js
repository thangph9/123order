import React from "react";
import { connect } from "react-redux";

class ContentBodyDetailRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var { loadDetail } = this.props;
    var { initLoadCurrencyRaito } = this.props;
    console.log(initLoadCurrencyRaito);
    if (loadDetail != undefined) {
      var deal = loadDetail[1][0].deal_of_day * loadDetail[2][0].raito
      var save = loadDetail[1][0].save_price * loadDetail[2][0].raito
      var price = loadDetail[1][0].price * loadDetail[2][0].raito
    }
    var starNumber = 0;
    if (loadDetail != undefined) starNumber = Number(loadDetail[1][0].star) * 20;
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
              <div class="tt_nguoiban">
                Người bán: <strong>Ubio Labs</strong>
              </div>
            </div>
            <div className="block_ttsp">
              <ul>
                <li>
                  <label>Giá ban đầu của sản phẩm:</label>
                  <span className="tong_gia_vnd">
                    {(loadDetail != undefined) ? Math.round(price).toLocaleString('en-US') : 0} VNĐ
                    </span>
                </li>
                <li>
                  <label>Bạn tiết kiệm được:</label>
                  <span className="tong_gia_vnd">
                    {(loadDetail != undefined) ? Math.round(save).toLocaleString('en-US') : 0} VNĐ
                  </span>
                </li>
                <li>
                  <label>Giá đã giảm của sản phẩm: </label>
                  <span className="tong_gia_vnd"> {(loadDetail != undefined) ? Math.round(deal).toLocaleString('en-US') : 0} VNĐ</span>
                </li>
              </ul>
              <span>Giá trên là giá cuối cùng, bạn không cần trả thêm bất kỳ khoản phí nào khác</span>
            </div>
            <div className="block_tk_tinhtrangbansp">
              <div className="tinhtrang_sp">
                <span className="time_today w_49">Hôm nay:</span>
                <div className="sl_con pull-left w_49">Số lượng khuyến mại còn lại (17)</div>
                <div className="sl_daban pull-right w_49">Đã bán(13)</div>
              </div>
              <div className="progress tientrinh_bansp w_49">
                <div className="progress-bar" role="progressbar" aria-valuenow="56.6666666666667" aria-valuemin={0} aria-valuemax={100} style={{ width: '56.6666666666667%',height: '100%' }}>
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
            <div style={{paddingLeft: '10px',paddingRight: '0px'}} className="action_dathang col-lg-12 col-md-12 col-sm-12 col-xs-12 no-gutter">
              <div className="tt_ngay col-md-6 col-sm-6 col-xs-6 no-gutter-left btnBuyProduct cur" data-store={2}>
                <a><span>Thanh toán ngay</span></a>
              </div>
              <div style={{paddingLeft: '0px',paddingRight: '10px'}} className="them_giohang col-md-6 col-sm-6 col-xs-6 no-gutter-right">
                <a className="btn-addtocart cur"><span>Thêm vào giỏ hàng</span></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 no-gutter-right bl_kiemhang_us" style={{ position: 'absolute', top: 44, left: 515 }}>
            <div className="block_ttthanhtoan_chitiet" style={{ width: 241 }}>
              <ul>
                <li>
                  <h6 style={{ fontSize: '12px', fontWeight: 600 }}>CHẤP NHẬN THANH TOÁN</h6>
                  <div>
                    <label >Thẻ thanh toán nội địa</label>
                    <span><img width="18" height="18" src="https://usexpress.vn/Media_Master/images/thett_1.svg" alt="img" /></span>
                  </div>
                  <div className="the_thtoan">
                    <label >Thẻ Visa/Master/JCB</label>
                    <span><img width={18} height={18} src="https://usexpress.vn/Media_Master/images/thett_2.svg" alt="img" /></span>
                    <span><img width={18} height={18} src="https://usexpress.vn/Media_Master/images/thett_3.svg" alt="img" /></span>
                    <span><img width={18} height={18} src="https://usexpress.vn/Media_Master/images/thett_4.svg" alt="img" /></span>
                  </div>
                </li>
                <li>
                  <h6 style={{ fontSize: '12px', fontWeight: 600 }}>HỆ THỐNG TỰ ĐỘNG</h6>
                  <div>
                    <label >Xử lý đơn hàng với 123order</label>
                    <span><img width={18} height={13} src="https://usexpress.vn/Media_Master/images/muahang_1.svg" alt="img" /></span>
                  </div>
                  <div>
                    <label >Thông báo tình trạng đơn hàng</label>
                    <span><img width={18} height={18} src="https://usexpress.vn/Media_Master/images/muahang_2.svg" alt="img" /></span>
                  </div>
                </li>
                <li>
                  <h6 style={{ fontSize: '12px', fontWeight: 600 }}>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</h6>
                  <div>
                    <label >Nhận hàng trong vòng 2 tuần nếu thanh toán ngay hôm nay</label>
                    <span><img width={19} height={19} src="https://usexpress.vn/Media_Master/images/muahang_3.svg" alt="img" /></span>
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