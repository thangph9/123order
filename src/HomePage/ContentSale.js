import React from "react";
import { connect } from "react-redux";
import { ContentSaleLeft } from "./ContentSaleLeft";
import { ContentSaleLeftHide } from "./ContentSaleLeftHide";
import { ContentSaleRight } from "./ContentSaleRight";
class ContentSale extends React.Component{
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
        var {initLoading}=this.props;
        return (
            <div className="container mt-2">
                <div className="row">
                {(initLoading!=undefined&&initLoading==true? <ContentSaleLeftHide/>:<ContentSaleLeft/>)}
                    <ContentSaleRight/>
                </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  {
        initLoad: state.initLoadContentDeal.data,
        initLoading: state.initLoadContentDeal.loading,
    }
}
const connected=connect(mapStateToProps)(ContentSale);
export { connected as ContentSale } 