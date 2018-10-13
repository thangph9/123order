import React from "react";
import { connect } from "react-redux";
class CategoryMainRightBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    summaryCategory(nodeid,categoryindex,arr){
        
        var childCate=this.props.initLoadCategoryItem.filter((item)=>{
            return item.groupid==nodeid&&item.categoryindex == categoryindex + 1;
        })
        
        if(childCate.length>0){
            childCate.forEach((value,index)=>{
                arr.push(value.nodeid)
                this.summaryCategory(value.nodeid,value.categoryindex)
            })
        }

        return arr;
    }
    render() {
        var { initLoadCategoryProducts } = this.props;
        var {mouseClickCategory} = this.props;
        var categoryindex=Number(mouseClickCategory.categoryindex);
        var arr=[];
        var newarr =this.summaryCategory(mouseClickCategory.nodeid,categoryindex,arr);
        var newinitLoadCategoryProducts=initLoadCategoryProducts.filter((value,index)=>{
            return(
                newarr.forEach(item=>{
                   value.nodeid==item.nodeid 
                })
            )
        })
        return (
            <div className="block-main">
                <div className="wrap-product-col-v2">
                    {(initLoadCategoryProducts.length>0)&&newinitLoadCategoryProducts.map((value,index)=>{
                        return(
                            <div key={index} className="product-col">
                        <div className="panel-product-v2 js-get-product-to-asin-us is-checked" id="panel-product" data-asin="B00ZV9RDKK">
                            <div className="panel-inner" temprop="item" itemScope="itemscope" itemType="http://schema.org/Product">
                                <a className="img-pane href" itemProp="url" href="/us/fire-tv-stick-with-alexa-voice-remote-1st-gen-streaming-media-player-B00ZV9RDKK.html">
                                    <div className="pane-inner">
                                        <img className="pd-img img-lazy" src={value.img} alt="img" />
                                    </div>
                                </a>{/* .img-pane */}
                                <div className="meta-pane">
                                    <div className="col-1">
                                        <div className="star" itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                                            <i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star text-yellow" /><i className="fa fa-star-half-empty  text-yellow" /></div>
                                    </div>
                                    <div className="col-2">
                                        <div className="web">
                                            <i className="si si-flag-us-circle-16" /> <span className="title">Từ Mỹ</span>
                                        </div>
                                    </div>
                                </div>{/* .meta-field */}
                                <a className="pd-title href" href="/us/fire-tv-stick-with-alexa-voice-remote-1st-gen-streaming-media-player-B00ZV9RDKK.html"><span className="title-inner">{value.title}</span></a>
                                <div className="price" itemProp="offers" itemScope="itemscope" itemType="http://schema.org/Offer">
                                    <div className="curr-price totalPrice" itemProp="price" content="Under $25">{value.price}</div>
                                    <div className="old-price">{value.base_price}</div>
                                </div>
                            
                            </div>{/* .panel-inner */}
                        </div>{/* .panel-product-v2*/}
                    </div>
                        )
                    })}

                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd: state.loadAdd,
        initLoadCategoryProducts: state.initLoadCategoryProducts,
        mouseClickCategory: state.mouseClickCategory,
        initLoadCategoryItem: state.initLoadCategoryItem,
    }
}
const connectedHomePage = connect(mapStateToProps)(CategoryMainRightBody);
export { connectedHomePage as CategoryMainRightBody } 