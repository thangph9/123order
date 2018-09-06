import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItem} from "./ProductItem";

class ProductItemList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    componentWillMount(){
        
    }
    render(){
        let menuItems=[];
            for(var i=parseInt(this.props.loadItem,10)-5;i<parseInt(this.props.loadItem,10);i++){
                if(this.props.initLoad[i]!==undefined){
                    menuItems.push(<ProductItem key={i}
                    dealid={this.props.initLoad[i].dealid}
                    base_price={this.props.initLoad[i].base_price}
                    death_clock={this.props.initLoad[i].death_clock}
                    img={this.props.initLoad[i].img}
                    link={this.props.initLoad[i].link}
                    price={this.props.initLoad[i].price}
                    sale={this.props.initLoad[i].sale}
                    timestamp={this.props.initLoad[i].timestamp}
                    title={this.props.initLoad[i].title}
                />)
                }
            }
        
        return (
                <div className="row">
                {menuItems}
                </div>
        )
        
    }
}
function mapStateToProps(state){
    return {
        initLoad:state.initLoadContentDeal
    }
}
const connected=connect(mapStateToProps)(ProductItemList);
export { connected as ProductItemList } 