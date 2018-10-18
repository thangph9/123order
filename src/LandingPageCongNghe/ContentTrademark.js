import React from "react";
import { connect } from "react-redux";

class ContentTrademark extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render(){
        
        return (
            <div className="main-tabs">
            <div className="container" style={{textAlign:'center'}}>
                    <h1 style={{fontSize:'24px'}}>ĐỒ CÔNG NGHỆ</h1>
            </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ContentTrademark);
export { connectedContent as ContentTrademark } 