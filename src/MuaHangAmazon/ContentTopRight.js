import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class ContentTopRight extends React.Component {
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
            <div className="col-lg-9 px-2 d-flex align-self-stretch">
                <div className="owl-carousel owl-one owl-loaded owl-drag">
                    <div className="owl-stage-outer"><div className="owl-stage" style={{ transform: 'translate3d(-2547px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: 5094 }}><div className="owl-item cloned" style={{ width: 839, marginRight: 10 }}><div><img src="img\Layer 69.png" alt='img' className="img-fluid" /></div></div><div className="owl-item cloned" style={{ width: 839, marginRight: 10 }}><div><img src="img\Layer 70.png" alt='img' className="img-fluid" /></div></div><div className="owl-item" style={{ width: 839, marginRight: 10 }}><div><img src="img\Layer 69.png" alt='img' className="img-fluid" /></div></div><div className="owl-item active" style={{ width: 839, marginRight: 10 }}><div><img src="img\Layer 70.png" alt='img' className="img-fluid" /></div></div><div className="owl-item cloned" style={{ width: 839, marginRight: 10 }}><div><img src="img\Layer 69.png" alt='img' className="img-fluid" /></div></div><div className="owl-item cloned" style={{ width: 839, marginRight: 10 }}><div><img src="img\Layer 70.png" alt='img' className="img-fluid" /></div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled" /></div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentTopRight);
export { connected as ContentTopRight } 