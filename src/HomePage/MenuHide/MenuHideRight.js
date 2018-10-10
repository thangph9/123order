import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from 'axios';
class MenuHideRight extends React.Component {
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
  componentWillMount(){
      axios.post('/category',{itemCateSecond:this.props.LoadCategoryIndexSencond}).then(res=>{
  }) 
  }
  render() {
    var { mouseOver } = this.props;
    var { LoadCategoryIndexSencond } = this.props;
    console.log(LoadCategoryIndexSencond);
    return (
      <div className="col-md-9">
        <div id="congNghiep" className={(mouseOver == undefined) ? 'tabcontent' : 'tabcontent block-show'} style={{ display: 'none' }}>
          <div className="container" aria-haspopup="true" aria-expanded="false">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 gia-soc-title">
                    <span className="title-stroke ml-2" />
                    <span className="ml-2">{mouseOver.category}</span>
                  </div>
                </div>
                <div className="row mt-2">
                  {LoadCategoryIndexSencond.length > 0 && LoadCategoryIndexSencond.map((value, index) => {
                    return(
                      <div key={index} className="col-md-4">
                      <ul>
                        <span className="list-tittle">{value.category}</span>
                        <li>
                          <Link to="/danh-muc-ebay" className="ml-2 text-dark  list-item">Đồ chơi lego</Link>
                        </li>
                      </ul>
                    </div>
                    )
                  })}
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
    mouseOver: state.mouseOverCategory,
    LoadCategoryIndexSencond: state.initLoadCategoryIndexSecond
  }
}
const connected = connect(mapStateToProps)(MenuHideRight);
export { connected as MenuHideRight } 