import React from "react";
import { ContentBodyDetailRight } from "./ContentBodyDetailRight";
import { ContentBodyDetailLeft } from "./ContentBodyDetailLeft";
class ContentBodyDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <ContentBodyDetailLeft/>
        <ContentBodyDetailRight/>
      </div>
    )

  }
}
function mapStateToProps(state) {
  return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetail);
export { connectedHomePage as ContentBodyDetail } 