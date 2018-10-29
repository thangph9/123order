import React from "react";
import { connect } from "react-redux";
import { ContentBodyDetailLeftTop } from "./ContentBodyDetailLeftTop";
import { ContentBodyDetailLeftBot } from "./ContentBodyDetailLeftBot";
class ContentBodyDetailLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-md-4 col-sm-5 col-xs-12 col-tn-12">
        <div className="PD_Media" style={{ maxWidth: 370,maxHeight:370 }}>
          <div className="slider-avatar">
            <ContentBodyDetailLeftTop/>
            <ContentBodyDetailLeftBot/>
          </div>
        </div>
      </div>
    )

  }
}
function mapStateToProps(state) {
  return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailLeft);
export { connectedHomePage as ContentBodyDetailLeft } 