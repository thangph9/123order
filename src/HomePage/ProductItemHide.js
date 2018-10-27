import React from "react";
import { Link,NavLink  } from "react-router-dom";
import { connect } from "react-redux";

class ProductItemHide extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isLoaded:false
        }
    }
    render(){
        return (
            <div  className="col-md mt-2 px-2" style={{display:'block',marginBottom:'8px'}}>
                <div className="card" style={{width:'212px',height:'340px'}}>
                    <div className="hovereffect" style={{width:'210px',height:'190px'}}>
            
                    <img style= {{width:'210px',height:'210px'}} className="card-img-top img-thumbnail border-0 img-fluid" src="img/Spinner-1s-200px.gif" alt='img'/>
                        <div className="overlay">
                            <Link to={`#`}/>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title deal-title-font" style={{ height:'32px',marginBottom:'0px'}}></h5>
                        {/* Starchart */}  
                        <br />
                        <strong className="card-text align-left deal-price mb-2" style={{width: '97px',fontSize: '12px',fontFamily:'Arial,Helvetica,sans-serif'}}></strong>
                        <span className="card-text align-right deal-old-price"><s style={{fontSize:'12px'}}></s></span>
                        <div style={{ clear: 'both' }} />
                        <p className="card-text align-left deal-old-price"></p>
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        mouseClickLink:state.mouseClickLinkProductItem
    }
}
const connected = connect(mapStateToProps)(ProductItemHide);
export { connected as ProductItemHide } 