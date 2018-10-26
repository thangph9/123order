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
            loaded:false,
        }
    }
    componentWillMount(){
        let data=[];
        for(var i=0;i<10;i++){
            data.push(<div key={i} >Data{i}</div>);
        }
        this.setState({
            loaded: true,
            data:data
        })
    }
    componentDidMount(){
        this.setState({
            loaded:  false,
            data:[]
        })
    }
    render(){
        let {initLoad}=this.props;
        let isItem=false
        if( initLoad.length >0 ){
            isItem=true;
        }
        const { loaded ,data} =this.state; 
        var dem=0;
        return (
                <div className="row">
                    { (loaded) ? ( {...data}) :(
                        <div>Has Data</div>
                    )
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
const connected=connect(mapStateToProps)(ProductItemList);
export { connected as ProductItemList } 