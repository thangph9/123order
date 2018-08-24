import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopHotBox } from "../MenuHide/MenuHideRightTopHotBox";
class HotDealHide extends React.Component {
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
            <div className="container dropdown-menu hot-deal-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkHotDeal">
                <div className="row">
                    <div className="col-md-12 gia-soc-title">
                        <span className="title-stroke ml-2" />
                        <span className="ml-2">HOT DEAL CÔNG NGHỆ</span>
                    </div>
                </div>
                <MenuHideRightTopHotBox/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HotDealHide);
export { connected as HotDealHide } 