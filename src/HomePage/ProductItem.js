import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div className="col-md mt-2 px-2">
                <div className="card" style={{width:'212px',height:'402px'}}>
                    <div className="hovereffect">
                        <div className="position-absolute discount-tag-pos"><img src="https://uphinhnhanh.com/images/2018/09/05/discount.png" alt='img' className="img-fluid" /></div>
                        <img style={{width:'210px',height:'210px'}} className="card-img-top img-thumbnail border-0 img-fluid" src={this.props.link} alt='img'/>
                        <div className="overlay">
                            <Link to="/detail-product" className="info">Chi tiết</Link>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title deal-title-font">{this.props.title}</h5>
                        <p className="card-text xuat-xu mb-1">Nhãn hiệu: {this.props.img}</p>
                        {/* Starchart */}
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fas fa-star-half-alt='img' text-warning" />
                        <i className="far fa-star text-warning" />
                        <i className="far fa-star text-warning" />
                        <br />
                        <span className="card-text align-left deal-price">{this.props.sale}</span>
                        <span className="card-text align-right pl-5 deal-old-price mb-2"><s>{this.props.base_price}</s></span>
                        <div style={{ clear: 'both' }} />
                        <p className="card-text align-left deal-old-price"><i className="far fa-clock card-text" /> {this.props.death_clock}</p>
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return state;
}
const connected = connect(mapStateToProps)(ProductItem);
export { connected as ProductItem } 