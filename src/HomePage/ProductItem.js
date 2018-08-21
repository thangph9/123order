import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ProductItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
           <div className="col-md mt-2 px-2">
                    <div className="card">  
                        <div className="hovereffect">
                            <div className="position-absolute discount-tag-pos"><img src="img/discount.png" alt="" className="img-fluid"/></div> 
                            <img className="card-img-top img-thumbnail border-0 img-fluid" src="img/Layer 6.png" alt="Card image cap" />
                            <div className="overlay">
                                <a className="info" href="#">Chi tiết</a>
                            </div>
                        </div>
                        <div className="card-body p-2">
                            <h5 className="card-title deal-title-font">Neato Robotics Botvac D3 Wi-Fi Connected Laser Navigating....</h5>
                            <p className="card-text xuat-xu mb-1">Xuất xứ: Mỹ</p>

                          
                            <i className="fa fa-star text-warning"></i>
                            <i className="fa fa-star text-warning"></i>
                            <i className="fas fa-star-half-alt text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                            <i className="far fa-star text-warning"></i>
                            <br/>
                            <span className="card-text align-left deal-price">2.155.000 VND</span>
                            <span className="card-text align-right pl-5 deal-old-price mb-2"><s>4.320.000 VND</s></span>
                            <div style={{clear: "both"}}></div>

                            <p className="card-text align-left deal-old-price"><i className="far fa-clock card-text"></i> Còn lại 7 ngày</p>
                        </div>
                    </div>
                </div>
        )
        
    }
}
function mapStateToProps(state){
    const {page} = state;
    return {page};
}
const connected=connect(mapStateToProps)(ProductItem);
export { connected as ProductItem } 