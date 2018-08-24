import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopHotBox } from "../MenuHide/MenuHideRightTopHotBox";
class MenuHideRightTrungTam extends React.Component {
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
            <div id="storeTrungTam" className="tabcontent" style={{ display: 'none' }}>
                <div className="container bg-white" aria-haspopup="true" aria-expanded="false">
                    <div className="row">
                        <div className="col-md-12 gia-soc-title">
                            <span className="title-stroke ml-2" />
                            <span className="ml-2">Top Hot</span>
                        </div>
                    </div>
                    <MenuHideRightTopHotBox/>

                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(MenuHideRightTrungTam);
export { connected as MenuHideRightTrungTam } 