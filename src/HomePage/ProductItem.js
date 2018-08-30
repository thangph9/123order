import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className="col-md mt-2 px-2">
                <div className="card">
                    <div className="hovereffect">
                        <div className="position-absolute discount-tag-pos"><img src="img/discount.png" alt='img' className="img-fluid" /></div>
                        <img className="card-img-top img-thumbnail border-0 img-fluid" src="img/Layer 6.png" alt='img'/>
                        <div className="overlay">
                            <Link to="/detail-product" className="info">Chi tiết</Link>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title deal-title-font">Neato Robotics Botvac D3 Wi-Fi Connected Laser Navigating....</h5>
                        <p className="card-text xuat-xu mb-1">Xuất xứ: Mỹ</p>
                        {/* Starchart */}
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fas fa-star-half-alt='img' text-warning" />
                        <i className="far fa-star text-warning" />
                        <i className="far fa-star text-warning" />
                        <br />
                        <span className="card-text align-left deal-price">2.155.000 VND</span>
                        <span className="card-text align-right pl-5 deal-old-price mb-2"><s>4.320.000 VND</s></span>
                        <div style={{ clear: 'both' }} />
                        <p className="card-text align-left deal-old-price"><i className="far fa-clock card-text" /> Còn lại 7 ngày</p>
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {
    const { page } = state;
    return { page };
}
const connected = connect(mapStateToProps)(ProductItem);
export { connected as ProductItem } 