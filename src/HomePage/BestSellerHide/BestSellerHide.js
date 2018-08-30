import React from "react";
import { connect } from "react-redux";
import { GiaSocHideItemBox } from "../GiaSocHide/GiaSocHideItemBox";
class BestSellerHide extends React.Component {
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
            <div className="container dropdown-menu best-seller-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkBestSeller">
                <div className="row">
                    <div className="col-md-12 gia-soc-title">
                        <span className="title-stroke ml-2" />
                        <span className="ml-2">BEST SELLER</span>
                    </div>
                </div>
                <GiaSocHideItemBox/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(BestSellerHide);
export { connected as BestSellerHide } 