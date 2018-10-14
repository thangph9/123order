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
  showThird(index,arr){
    var {initLoadCategoryIndexThird}=this.props;
    if(initLoadCategoryIndexThird.length > 0 ){
      for(var j=0;j<3;j++){
        arr.push(<li key={j}>
          <Link to={`/category/nodeid=${initLoadCategoryIndexThird[index][j].nodeid}&categoryindex=${initLoadCategoryIndexThird[i][j].categoryindex}`} className="ml-2 text-dark  list-item">{initLoadCategoryIndexThird[i][j].category}</Link>
        </li>)
      }
    }
    return arr;
  }
  render() {
    var { mouseOver } = this.props;
    var { LoadCategoryIndexSencond } = this.props;

    var arr=[];

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
                          <Link style={{color:'#212529'}} to={`/category/nodeid=${value.nodeid}&categoryindex=${value.categoryindex}`} className="list-tittle">{value.category}</Link>
                          { ()=>this.showThird(index,arr)}
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