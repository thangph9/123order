import React from "react";
import { connect } from "react-redux";
import { MenuHideRightTopHotBox } from "./MenuHideRightTopHotBox";
import {initLoadAmazonHide} from '../../actions/initLoad';
import axios from 'axios';
class MenuHideRightTopHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillMount(){
        axios.post('/home').then(res=>{
            var action=initLoadAmazonHide(res.data.HideAmazonTopHot);
            this.props.dispatch(action);
            //console.log(res.data.HideAmazonTopHot);
        })
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {

        return (
            <div id="topHotA" className="tabcontent" style={{ display: 'none' }}>
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

    return {
        initLoad:state.initLoadAmazonHide
    }
}
const connected = connect(mapStateToProps)(MenuHideRightTopHot);
export { connected as MenuHideRightTopHot } 