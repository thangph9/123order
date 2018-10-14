import React from "react";
import { connect } from "react-redux";

class Parameter extends React.Component{
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
            <section style={{ fontSize: 14 }} className="product-tab-block-v2 pd-params-block" id="thong-so-tab">
            <div className="block-head" style={{ width: 838 }}>
                <div className="head-title-col">
                    <div className="block-title">Thông số</div>
                </div>
                <div className="head-control-col">
                </div>
            </div>{/* .block-head */}
            <div className="block-main">
                <div className="param-panel" style={{ width: 818 }}>
                    <div className="lbl-cell">Product Dimensions</div>
                    <div className="info-cell"><div className="cell-inner">14 x 15 x 12 cm; 204 g</div></div>
                </div>{/* .param-panel */}
                <div className="param-panel" style={{ width: 818 }}>
                    <div className="lbl-cell">Shipping Weight</div>
                    <div className="info-cell"><div className="cell-inner">358 g</div></div>
                </div>{/* .param-panel */}
                <div className="param-panel" style={{ width: 818 }}>
                    <div className="lbl-cell">ASIN</div>
                    <div className="info-cell"><div className="cell-inner">B01N05W4A2</div></div>
                </div>{/* .param-panel */}
                <div className="param-panel" style={{ width: 818 }}>
                    <div className="lbl-cell">Item model number</div>
                    <div className="info-cell"><div className="cell-inner">S1 Stand</div></div>
                </div>{/* .param-panel */}
            </div>{/* .block-main */}
        </section>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(Parameter);
export { connectedContent as Parameter } 