import React from "react";
import { connect } from "react-redux";

class ContentBodyDescription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
            <div className="info mt20 width_100 col-sm-12 col-xs-12">
              <div className="tab_product">
                <a href="#detail" className="active">Chi tiết sản phẩm</a>
                <a href="#info">Thông số kỹ thuật</a>
              </div>
              <div className="tab_container">
                <div className="tab_content" id="detail">
                  <div id="product-tab1-espotdetails">
                    {/*{cke_protected}{C}%3C!%2D%2D%20BEGIN%20ContentAreaESpot.jsp%20%2D%2D%3E*/}{/*{cke_protected}{C}%3C!%2D%2D%20END%20ContentAreaESpot.jsp%20%2D%2D%3E*/}
                  </div>
                  <div className="product-info-description">
                    {/*{cke_protected}{C}%3C!%2D%2D%20DO%20NOT%20REMOVE%20THIS%20%2D%2D%3E*/}
                    <div id="SP_ProductImage">
                      <div id="sp_popup_product"><br /></div>
                    </div>
                    <div id="sp_inline_product">
                      <div id="sp_widget_7Gz9E9DY_2_css_listener"><br /></div>
                    </div>
                  </div>
                </div>
                {/* #tab1 */}
                <div className="tab_content" id="info" style={{ display: 'none' }}>
                  <div className="param-panel">
                    <div className="info-cell">
                      <div className="cell-inner">Features:
                        Two 6' Apple Certified Lightning Cables with Silicone Cable Ties
                        4.8A Dual USB Wall Charger with LED Charge Indicators
                        4.8A Dual USB Car Charger
                    </div>
                    </div>
                  </div>
                </div>
                {/* #tab2 */}
              </div>
            </div>
          </div>
        )

    }
}
function mapStateToProps(state) {
    return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDescription);
export { connectedHomePage as ContentBodyDescription } 