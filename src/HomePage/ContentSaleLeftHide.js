import React from "react";
import { connect } from "react-redux";
class ContentSaleLeftHide extends React.Component {
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
            <div className="col-7 p-2">
                <div style={{minHeight:'584px'}}>
                    <img alt="img" src="img/Spinner-1s-200px.gif"/>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return {
        initLoad:state.initLoadContentDeal.data,
        initLoading:state.initLoadContentDeal.loading,
    }
}
const connected = connect(mapStateToProps)(ContentSaleLeftHide);
export { connected as ContentSaleLeftHide } 