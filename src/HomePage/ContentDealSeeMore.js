import React from "react";
import { connect } from "react-redux";
import {loadAdd} from '../actions';
import axios from 'axios';
class ContentDealSeeMore extends React.Component {
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
        console.log("Hello World")
    }

    handleClick(value){     
        var numb=this.props.loadAdd+value;
        this.props.dispatch(loadAdd(numb));
        
    }
    render() {

        return (
            <div className="row justify-content-center my-4">
                <div className="col-lg-4">
                    <button onClick={()=>this.handleClick(5)} className="btn btn-block deal-btn">Xem thêm</button>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return {
        loadAdd:state.loadAdd
    }
}
const connected = connect(mapStateToProps)(ContentDealSeeMore);
export { connected as ContentDealSeeMore } 