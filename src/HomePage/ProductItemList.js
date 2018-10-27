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
                { (isItem && initLoading==false)&& 
                    initLoad.map((e,i) =>{
                        if(dem<10+this.props.loadAdd){
                            dem++;
                            return (<ProductItem key={i} data={e} customStyle="block"/>)
                        }
                        else{
                            return (<ProductItem key={i} data={e} customStyle="none"/>)
                        }
                        
                    })
                }
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