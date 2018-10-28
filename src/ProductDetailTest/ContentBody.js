import React from "react";
import { ContentBodyDescription } from "./ContentBodyDescription";
import { ContentBodyDetail } from "./ContentBodyDetail";
class ContentBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="product-info mb20">
        <ContentBodyDetail/>
        <ContentBodyDescription/>
      </div>
    )

  }
}
function mapStateToProps(state) {
  return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBody);
export { connectedHomePage as ContentBody } 