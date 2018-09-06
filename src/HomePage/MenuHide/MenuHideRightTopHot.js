import React from "react";
import { connect } from "react-redux";
import axios from 'axios';
import {initLoadEbayHide} from '../../actions/initLoad';
import { MenuHideRightTopHotBox } from "./MenuHideRightTopHotBox";
class MenuHideRightTopHot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
    }
    componentWillMount(){
        axios.post('/home').then(res=>{
            var action=initLoadEbayHide(res.data.HideEbayTopHot);
            this.props.dispatch(action);
           // console.log(res.data.HideEbayTopHot);
        })
    }
    componentDidMount(){
        
    }
    render() {
       
        return (
            <div id="topHot" className="tabcontent" style={{ display: 'none' }}>
                <div className="container bg-white" aria-haspopup="true" aria-expanded="false">
                    <div className="row">
                        <div className="col-md-12 gia-soc-title">
                            <span className="title-stroke ml-2" />
                            <span className="ml-2">TOP HOT</span>
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
        initLoad:state.initLoadEbayHide
    }
}
const connected = connect(mapStateToProps)(MenuHideRightTopHot);
export { connected as MenuHideRightTopHot } 