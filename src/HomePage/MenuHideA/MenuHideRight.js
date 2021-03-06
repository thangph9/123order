import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
  handleClick(){
    document.getElementById("linkAmazon").style.display = "none";
  }
  render() {
    var { mouseOver } = this.props;
    var { LoadCategoryIndexSencond } = this.props;
    var {initLoadCategoryIndexThird}=this.props;

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
                    return (
                      <div key={index} className="col-md-4">
                        <ul>
                          <Link onClick={()=>this.handleClick()} style={{color:'#212529'}} to={`/category/nodeid=${value.nodeid}&categoryindex=${value.categoryindex}`} className="list-tittle">{value.category}</Link>
                          {initLoadCategoryIndexThird.length > 0 && initLoadCategoryIndexThird[index].map((v, i) => {
                            return (<li key={i}>
                              <Link onClick={()=>this.handleClick()} to={`/category/nodeid=${v.nodeid}&categoryindex=${v.categoryindex}`} className="ml-2 text-dark  list-item">{v.category}</Link>
                            </li>)
                          })}
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
    LoadCategoryIndexSencond: state.initLoadCategoryIndexSecond,
    initLoadCategoryIndexThird: state.initLoadCategoryIndexThird
  }
}
const connected = connect(mapStateToProps)(MenuHideRight);
export { connected as MenuHideRight } 