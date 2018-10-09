import React from "react";
import { connect } from "react-redux";
import { Breadcrumbs } from "./Breadcrumbs";
import { CategoryMain } from "./CategoryMain";
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      loading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.setState({
      login: false
    })
    console.log("Hello World")
  }
  render() {

    return (
      <div className="body-category">
        <Breadcrumbs />
        <CategoryMain />
      </div>


    )

  }
}
function mapStateToProps(state) {

  return state;
}
const connectedContent = connect(mapStateToProps)(Content);
export { connectedContent as Content } 