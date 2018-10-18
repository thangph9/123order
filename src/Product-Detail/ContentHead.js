import React from "react";
import { connect } from "react-redux";

class ContentHead extends React.Component{
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
        var {loadDetail}=this.props;
        var { mouseClickLink } = this.props;
        var starNumber=0;
        if(loadDetail[0]!=undefined) starNumber=Number(loadDetail[0].star)*20;
        return (
            <div className="container-head" style={{float:'left'}}>
                        <div className="product-detail-head-block" >
                            <div className="block-col-1" style={{    position: 'relative',top: '-10px'}}>
                                <h1 style={{margin:'0px 0px 6px 0px',width:'907px'}} className="pd-title" itemProp="name" id="productName">
                                {(loadDetail[0]!=undefined) &&loadDetail[0].title}
                                </h1>
                                <div className="meta-item-wrap">
                        <div className="star-rating" style={{fontSize:'13px',position:'static'}}>
							<div className="back-stars" style={{top:'4px'}}>
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
                            <div style={{color:'#737373'}}>
                            <span style={{color:'#737373'}} itemProp="ratingValue">&nbsp; {(loadDetail[0]!=undefined)&&loadDetail[0].star}</span>/5
                                        &nbsp;(<span>{(mouseClickLink!=undefined)&&mouseClickLink.reviews}</span> lượt đánh giá) &nbsp; | &nbsp; Bán tại: &nbsp;<i className="si si-logo-amz-mini" /> &nbsp;
                            </div>
                            
						</div>                                            
                                </div>{/* .meta-item-wrap */}
                            </div>{/* .block-col-1 */}
                            <div className="block-col-2" style={{position: 'relative',left:'10px'}}>
                                <div className="shop-segment">
                                    <div className="segment-head">
                                        <div className="icon-col"><i className="svg svg-shop svg-24px" /></div>
                                        <div className="info-col">
                                            
                                            <div className="desc">
                                            <div className="star-rating" style={{top:'-1px',fontSize:'12px'}}>
							<div className="back-stars" style={{top:'4px'}}>
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
                            <span style={{color:'#999'}}> | 100% đánh giá uy tín</span>
						</div>  
                                    
                                </div>
                                        </div>
                                    </div>
                                    <div className="segment-main" style={{height: '30px'}}>
                                        <div className="rating">&nbsp;Sản phẩm tốt, rất nhiều người đã mua</div>
                                    </div>{/* .segment-main */}
                                </div>{/* .shop-segment */}
                            </div>{/* .block-col-2 */}
                        </div>{/* .product-detail-head-block */}
                    </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return {
        loadDetail:state.initLoadProductDetail,
        mouseClickLink:state.mouseClickLink
    }
}
const connectedContent=connect(mapStateToProps)(ContentHead);
export { connectedContent as ContentHead } 