import React from "react";
import { connect } from "react-redux";
import { HeaderBotSearch } from "./HeaderBotSearch";
import { HeaderBotMenu } from "./HeaderBotMenu";
class HeaderBot extends React.Component {
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
            <div className="container-fluid order-menu" style={{paddingTop: '20px'}}>
                <div className="container pt-4">
                  <HeaderBotSearch/>  
                  <HeaderBotMenu/>
                </div>
            </div>
        );

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(HeaderBot);
export { connected as HeaderBot } 