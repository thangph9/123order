import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
class   MenuHideRightTopItem extends React.Component {
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
            
            <div className="card" style={{width:'157.25px',marginRight : '10px' }}>
            <div className="hovereffect">
              <div className="position-absolute discount-tag-pos"><img src={this.props.linkImg} alt='img' className="img-fluid" /></div>
              <img className="card-img-top img-thumbnail border-0 img-fluid" src='/img/Layer 6.png' alt='img' />
              <div className="overlay">
                <NavLink className="info" to="/detail-product">Chi Tiết</NavLink>
              </div>
            </div>
            <div className="card-body p-2">
              <h5 className="card-title deal-title-font">{this.props.detail}</h5>
              <p className="card-text xuat-xu mb-1">{this.props.from}</p>
              {/* Starchart */}
              <i className="fa fa-star text-warning" />
              <i className="fa fa-star text-warning" />
              <i className="fas fa-star-half-alt text-warning" />
              <i className="far fa-star text-warning" />
              <i className="far fa-star text-warning" />
              <br/>
              <span className="card-text align-left deal-price">{this.props.salePrice}</span>
              <span className="card-text align-right pl-5 deal-old-price mb-2"><s>{this.props.sale}</s></span>
              <div style={{clear: 'both'}} />
              <p className="card-text align-left deal-old-price"><i className="far fa-clock card-text" /> Còn lại 7 ngày</p>
            </div>
          </div>
        
            )
    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRightTopItem);
export { connected as MenuHideRightTopItem } 