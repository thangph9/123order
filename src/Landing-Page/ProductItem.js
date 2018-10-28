import React from "react";
import { Link,NavLink  } from "react-router-dom";
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
        var titleTrim=data.title.trim();
        if (data.title.length>45){
            data.title= data.title.slice(0,45)+'...';
        }
        var {initLoadCurrencyRaito}=this.props;
        console.log(initLoadCurrencyRaito);
        var base_priceCurrency=data.base_price*initLoadCurrencyRaito
        var priceCurrency=data.price*initLoadCurrencyRaito
        titleTrim=titleTrim.replace(/ - /g , "-");
        titleTrim=titleTrim.replace(/[\[\]\(\)\,\%\+\.]+/g , "");
        titleTrim=titleTrim.replace(/ /g , "-");
        var starNumber=Number(data.star)*20;
        let index1 = data.sale.indexOf("(");
        let index2 = data.sale.indexOf(")");
        var saleper = data.sale.substring(index1 + 1, index2);
        return (
            <div className="col-md mt-2 px-2" style={{display:display,marginBottom:'8px',flexGrow:0}}>
                <div className="card" style={{width:'212px',height:'340px'}}>
                    <div className="hovereffect" style={{width:'210px',height:'190px'}}>
                    <div className="position-absolute discount-tag-pos"><img style={{width:'36px',height:'40px',position:'relative',left:'10px'}} src="https://static.fado.vn/f/desktop/v2/images/svg/other/sale-tag-orange.svg" alt='img' className="img-fluid" /></div>
                    <span className={(data.sale=='')?'none-hide':''} style={{position: 'absolute',top: '7px',right: '12px',color: '#fff',fontSize: '13px',fontWeight: 700,zIndex: 9}}>-{saleper}</span>
                        <img style= {{width:'210px',height:'210px'}} className="card-img-top img-thumbnail border-0 img-fluid" src={data.img} alt='img'/>
                        <div className="overlay">
                        <NavLink to={`/product-detail-amazon/${titleTrim}&asin=` +`${data.asin}`} className="info">Chi tiết</NavLink>
                        </div>
                    </div>
                    <div className="card-body p-2">
                        <h5 className="card-title deal-title-font" style={{ height:'32px',marginBottom:'0px'}}>{data.title}</h5>
                        {/* Starchart */}
                        <div className={(starNumber==0)?'star-rating height-18px':'star-rating'}>
							<div className={(starNumber==0)?'none-hide':'back-stars'}>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								<i className="fa fa-star" aria-hidden="true"></i>
								
								<div className="front-stars" style={{width:`${starNumber}%`}}>
									<i className="fa fa-star" aria-hidden="true"></i>
									<i className="fa fa-star" aria-hidden="true"></i>
									<i className="fa fa-star" aria-hidden="true"></i>
									<i className="fa fa-star" aria-hidden="true"></i>
									<i className="fa fa-star" aria-hidden="true"></i>
								</div>
							</div>
						</div>  
                        <br/>
                        <strong className="card-text align-left deal-price mb-2" style={{width: '97px',fontSize: '12px',fontFamily:'Arial,Helvetica,sans-serif'}}>{Math.round(priceCurrency).toLocaleString('en-US')} VNĐ</strong>
                        <span className="card-text align-right deal-old-price"><s style={{fontSize:'12px'}}>{Math.round(base_priceCurrency).toLocaleString('en-US')} VNĐ</s></span>
                        <div style={{ clear: 'both' }} />
                        <p className="card-text align-left deal-old-price"><i  className={(data.death_clock==='')? '' :'far fa-clock card-text'} /> {(data.death_clock==='None') ? '' : data.death_clock }</p>
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        initLoadCurrencyRaito:state.initLandingPageDongHo.data[1][0].raito,
        mouseClickLink:state.mouseClickLinkProductItem,
    }
}
const connected = connect(mapStateToProps)(ProductItem);
export { connected as ProductItem } 