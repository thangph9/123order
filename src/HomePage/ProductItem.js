import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
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
        console.log(data);
        return (
            <div className="col-md mt-2 px-2" style={{display:display,marginBottom:'8px'}}>
                <div className="card" style={{width:'212px',height:'402px'}}>
                    <div className="hovereffect" style={{width:'210px',height:'210px'}}>
                    <span style={{position: 'absolute',top: '10px',right: '10px',background: 'red',color: '#fff',fontSize: '13px',fontWeight: 700,borderRadius: '3px',padding: '2px 5px',zIndex: 9}}>-64%</span>
                        <img style= {{width:'210px',height:'210px'}} className="card-img-top img-thumbnail border-0 img-fluid" src={data.img} alt='img'/>
                        <div className="overlay">
                            <Link to={"/detail-product/"+data.dealid} onClick={()=>this.handleClickLink(data)} className="info">Chi tiết</Link>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title deal-title-font" style={{ height:'48px' }}>{data.title}</h5>
                        <p className="card-text xuat-xu mb-1">Xuất xứ: </p>
                        {/* Starchart */}
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fas fa-star-half-alt='img' text-warning" />
                        <i className="far fa-star text-warning" />
                        <i className="far fa-star text-warning" />
                        <br />
                        <span className="card-text align-left deal-price" style={{width:'160px'}}>{data.price}</span>
                        <span className="card-text align-right pl-5 deal-old-price mb-2"><s>12$</s></span>
                        <div style={{ clear: 'both' }} />
                        <p className="card-text align-left deal-old-price"><i  className={(data.death_clock==='None')? '' :'far fa-clock card-text'} /> {(data.death_clock==='None') ? '' : data.death_clock }</p>
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