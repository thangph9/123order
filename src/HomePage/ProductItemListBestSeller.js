import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {ProductItemBestSeller} from "./ProductItemBestSeller";

class ProductItemListBestSeller extends React.Component{
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
        let {initLoad}=this.props;
        let isItem=false
        if( initLoad.length >0 ){
            isItem=true;
        }
        var dem=0;
        return (
                <div className="row">
                { isItem &&
                    initLoad.map((e,i) =>{
                        if(dem<5+this.props.loadAdd){
                            dem++;
                            return (<ProductItemBestSeller key={i} data={e} customStyle="block"/>)
                        }
                        else{
                            return (<ProductItemBestSeller key={i} data={e} customStyle="none"/>)
                        }
                        
                    })
                }
                </div>
        )
        
    }
}
function mapStateToProps(state){
     return {
        initLoad:state.initLoadContentDeal,
        loadAdd:state.loadAdd
    }
}
const connected=connect(mapStateToProps)(ProductItemListBestSeller);
export { connected as ProductItemListBestSeller } 