import React from "react";
import { connect } from "react-redux";
import { GiaSocHideItemBox } from "./GiaSocHideItemBox";
class GiaSocHide extends React.Component {
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
            <div className="container dropdown-menu gia-soc-position menu2-dropdown bg-white" aria-haspopup="true" aria-expanded="false" id="linkGiaSoc">
                <div className="row">
                    <div className="col-md-12 gia-soc-title">
                        <span className="title-stroke ml-2" />
                        <span className="ml-2">GIÁ SỐC MỖI NGÀY</span>
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
const connected = connect(mapStateToProps)(GiaSocHide);
export { connected as GiaSocHide } 