import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HeaderBotSearchRight extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e){
        this.setState({
            login:true,

        })
    }

    render(){
        
        return (
            <div className="col-lg-8 offset-1" style={{marginLeft: '0px'}}>
            <div className="input-group input-group-lg mb-3" style={{width: '800px',position: 'relative',left: '-46px'}}>
              <input type="text" className="form-control" placeholder="Tìm sản phẩm, thương hiệu..." aria-label="Tìm sản phẩm, thương hiệu..." aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary search-btn text-white" type="button" id="button-addon2">
                  <i className="fas fa-search" />
                </button>
              </div>
              <div className="justify-content-center ml-3 pt-1"> 
                <img src="/img/icon1.png" alt="img" />
              </div>
            </div>
          </div>
          
        );
        
    }
}
function mapStateToProps(state){
  
    return state;
}
const connected=connect(mapStateToProps)(HeaderBotSearchRight);
export { connected as HeaderBotSearchRight } 