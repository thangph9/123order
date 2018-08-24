import React from "react";
import { connect } from "react-redux";
class ContentSaleLeft extends React.Component {
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
            <div className="owl-carousel owl-one col-7 p-2 owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{ transform: 'translate3d(-2636px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: 4613 }}>
                        <div className="owl-item cloned" style={{ width: 649, marginRight: 10 }}>
                            <div> <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: 649, marginRight: 10 }}>
                            <div>
                                <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: 649, marginRight: 10 }}>
                            <div>
                                <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="owl-item" style={{ width: 649, marginRight: 10 }}>
                            <div>
                                <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid active" />
                            </div>
                        </div>
                        <div className="owl-item active" style={{ width: 649, marginRight: 10 }}>
                            <div>
                                <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: 649, marginRight: 10 }}>
                            <div> <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="owl-item cloned" style={{ width: 649, marginRight: 10 }}>
                            <div>
                                <img alt="Responsive image" src="img/Banner 3.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owl-nav disabled">
                    <button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">
                        ‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next"><span aria-label="Next">
                        ›</span>
                    </button>
                </div>
                <div className="owl-dots disabled" />
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentSaleLeft);
export { connected as ContentSaleLeft } 