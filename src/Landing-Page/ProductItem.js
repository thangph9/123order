import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {mouseClickLinkProductItem} from '../actions'
class ProductItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    handleClickLink(value){
        this.props.dispatch(mouseClickLinkProductItem(value));
    }
    render(){

        var display=this.props.customStyle;
        var {data}=this.props;
        if (data.title.length>65){
            data.title= data.title.slice(0,65)+'...';
        }
        console.log(data);
        return (
            <div className="col-md mt-2 px-2" style={{display:display,marginBottom:'8px'}}>
                <div className="card" style={{width:'212px',height:'340px'}}>
                    <div className="hovereffect" style={{width:'210px',height:'190px'}}>
                    <span style={{position: 'absolute',top: '10px',right: '10px',background: 'red',color: '#fff',fontSize: '13px',fontWeight: 700,borderRadius: '3px',padding: '2px 5px',zIndex: 9}}>-64%</span>
                        <img style= {{width:'210px',height:'210px'}} className="card-img-top img-thumbnail border-0 img-fluid" src="https://static-v3.weshop.com.vn/upload/7/0/z/m/a/e/z/4/4/9/michael-kors-mk6113-women-s--22713.jpg" alt='img'/>
                        <div className="overlay">
                            <Link to={"/detail-product/"+data.dealid} onClick={()=>this.handleClickLink(data)} className="info">Chi tiết</Link>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title deal-title-font" style={{ height:'32px' }}>Invicta  Angel 90256  Stainless Steel  Watch</h5>
                        {/* Starchart */}
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fas fa-star-half-alt='img' text-warning" />
                        <i className="far fa-star text-warning" />
                        <i className="far fa-star text-warning" />
                        <br />
                        <strong className="card-text align-left deal-price" style={{width: '97px',fontSize: '12px',fontFamily:'Arial,Helvetica,sans-serif'}}>10.000.000 VNĐ</strong>
                        <span className="card-text align-right deal-old-price mb-2"><s style={{fontSize:'12px'}}>13.000.000 VNĐ</s></span>
                        <div style={{ clear: 'both' }} />
                        <p className="card-text align-left deal-old-price"><i  className='far fa-clock card-text' />15:00</p>
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
const connected = connect(mapStateToProps)(ProductItem);
export { connected as ProductItem } 