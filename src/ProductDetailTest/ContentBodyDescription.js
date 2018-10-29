import React from "react";
import { connect } from "react-redux";

class ContentBodyDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statusCT: true,
      stateKT: false
    }
  }
  handleClickCT(value) {
    this.setState({
      statusCT: value,
      stateKT: !value
    })
  }
  handleClickTS(value) {
    this.setState({
      statusCT: !value,
      stateKT: value
    })
  }
  render() {
    var blockMain = document.getElementById("description-main");
    var { loadDetail } = this.props;
    if (loadDetail != undefined && blockMain != null) {
      blockMain.innerHTML = loadDetail[1][0].description
    }
    console.log(blockMain);
    return (
      <div className="row">
        <div className="info mt20 width_100 col-sm-12 col-xs-12">
          <div className="tab_product">
            <a onClick={() => this.handleClickCT(true)} id="chitiet-sp" href="#info" className={(this.state.statusCT == true) ? 'active' : ''}>Thông số kỹ thuật</a>
            <a onClick={() => this.handleClickTS(true)} id="thongso-kt" href="#detail" className={(this.state.statusTS == true) ? 'active' : ''}>Chi tiết sản phẩm</a>
          </div>
          <div className="tab_container">
            <div className="tab_content" id="detail" style={(this.state.statusCT == true) ? { display: 'block' } : { display: 'none' }}>
              <div id="product-tab1-espotdetails">
              </div>
              <div className="product-info-description">
                <div id="SP_ProductImage">
                  <div id="sp_popup_product"><br /></div>
                </div>
                <div id="sp_inline_product">
                  <div id="sp_widget_7Gz9E9DY_2_css_listener"><br /></div>
                </div>
              </div>
              <div id="view-more" className="row view-more hide">
                <div className="col-xs-12 col-sm-6 col-sm-offset-3 col-lg-4 col-lg-offset-4"><input type="button" data-cke-saved-name="view-more" name="view-more" defaultValue="View More Details" data-cke-editable={1} contentEditable="false" /></div>
              </div>
            </div>
            <div className="tab_content" id="info" style={(this.state.statusKT == true) ? { display: 'block' } : { display: 'none' }}>
              <div className="param-panel">
                <div className="info-cell">
                  <div id="description-main" className="cell-inner">

                  </div>
                </div>
              </div>
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
const connectedHomePage = connect(mapStateToProps)(ContentBodyDescription);
export { connectedHomePage as ContentBodyDescription } 