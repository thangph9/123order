import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemList} from "./ProductItemList";
class ProductItemBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    render(){
        var menuItems=[];
        var sodong=(this.props.initLoad.length/5);
        if(this.props.initLoad.length%5===0){
            for(var i=0;i<sodong;i++){
                menuItems.push(<ProductItemList key={i} loadItem={5+i*5}/>)
            }
        }
        else{
            for(var j=0;j<sodong+1;j++){
                if(j!==sodong){
                    menuItems.push(<ProductItemList key={j} loadItem={5+j*5}/>)
                }
                else{
                    menuItems.push(<ProductItemList key={j} loadItem={5+j*5-(5-this.props.initLoad.length%5)}/>)
                }
                
            }
        }
        return (
                <div>
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
const connected=connect(mapStateToProps)(ProductItemBox);
export { connected as ProductItemBox } 