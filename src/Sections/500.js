import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Page500 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    componentDidMount(){
        
    }
    componentWillMount(){
        
    }
    componentWillUnmount(){
      
    }
    render(){
        
        return (
            <div id="wrapper">
                 HomePage      
            </div>
        )
        
    }
}
function mapStateToProps(state){
    const {page} = state;
    return {page};
}
const connected=connect(mapStateToProps)(Page500);
export { connected as Page500 } 