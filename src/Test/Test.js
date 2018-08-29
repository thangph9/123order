import React from "react";
import {connect} from "react-redux";
class Test extends React.Component{
    render(){
        return(
            <div>
                Xin chao
            </div>
        )
    }
}
function mapStateToProps(state){
    return state;
}
const connected=connect(mapStateToProps)(Test);
export {connected as Test};