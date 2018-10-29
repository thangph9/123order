import React from "react";
import { connect } from "react-redux";

class ContentBodyDescription extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      var blockMain=document.getElementById("descriptions");
        var {loadDetail}=this.props;
        if(loadDetail!=undefined&&blockMain!=null){
            blockMain.innerHTML =loadDetail[1][0].description
        }
        return (
            <div className="row">
            <div className="info mt20 width_100 col-sm-12 col-xs-12">
              <div className="tab_product">
                <a href="#info" className="active">Thông số kỹ thuật</a>
              </div>
              <div className="tab_container">
                <div className="tab_content" id="info" style={{ display: 'none' }}>
                  <div className="param-panel">
                    <div className="info-cell">
                      <div id="description-main" className="cell-inner">

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
    return {
      loadDetail: state.initLoadProductDetail.data,
    }
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDescription);
export { connectedHomePage as ContentBodyDescription } 