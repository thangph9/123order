import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ContentBotRightItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }

    render() {

        return (
            <div className="col-md-4 mt-2">
                <div className="card">
                    <div className="hovereffect">
                        <div className="position-absolute discount-tag-pos"><img src="img/discount.png" alt='img' className="img-fluid" /></div>
                        <img className="card-img-top img-thumbnail border-0 img-fluid" src="img/Layer 6.png" alt='img' />
                        <div className="overlay">
                            <a className="info" href="">Chi tiết</a>
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

    return state;
}
const connected = connect(mapStateToProps)(ContentBotRightItem);
export { connected as ContentBotRightItem } 