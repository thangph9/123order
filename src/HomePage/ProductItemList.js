import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItem} from "./ProductItem";
import {ProductItemHide} from "./ProductItemHide";
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
        let {initLoad,initLoading}=this.props;
        console.log(initLoading);
        let isItem=false
        if( initLoad!=undefined ){
            isItem=true;
        }
        var dem=0;
        return (
                <div className="row">
                
                {(isItem && initLoading==true)&& 
                    initLoad.map((e,i) =>{                     
                            return (<ProductItemHide key={i} />)  
                    })}
                </div>
        )
        
    }
}
function mapStateToProps(state){
     return {
        initLoad:state.initLoadContentDeal.data,
        initLoading:state.initLoadContentDeal.loading,
        loadAdd:state.loadAdd
    }
}
const connected=connect(mapStateToProps)(ProductItemList);
export { connected as ProductItemList } 