import React,{ Component } from "react";
import { Router,Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { createBrowserHistory } from 'history';

import { alertActions } from "../actions";
import { HomePage } from "../HomePage";
import { COD } from "../COD";
import { DanhMucAmazon } from "../DanhMucAmazon";
import { DanhMucEbay } from "../DanhMucEbay";
import {PrivateRoute } from "../Sections";
import {MuaHangEbay} from '../MuaHangEbay';
import {MuaHangAmazon} from '../MuaHangAmazon';
import { history } from "../stores";
import {DetailProduct} from '../Detail-Product/DetailProduct';
class App extends Component{
    constructor(props){
        super(props);
        
        const { dispatch }=this.props;
        this.state={
            loading: false,
        }
        history.listen((location,action) => {
           dispatch(alertActions.clear()); 
            
        });
    }
    componentDidMount(){
        this.setState({
            loading: true
        });
        /*
        const {authentication} = this.props;
        if(authentication.loggedIn){
            let head=document.head;
            let myNode = document.getElementsByTagName("link");
            //console.log(myNode[0].firstChild);
            for(var i=0 ; i< myNode.length ; i++){
                if(myNode[i].href.indexOf('homepage') > -1 ){
                    myNode[i].parentNode.removeChild(myNode[i]);
                //    console.log(myNode[i]);
                }
            }
           
        }
        //console.log(authentication);
        */
    }
    componentWillMount(){
        
    }
    render(){
        const {loading} = this.state;
        if(loading){
            return (
                <Router history={history}>
                    <div>
                    <Switch history ={ history  }>
                        
						<Route exact path="/home" component={HomePage} />
                        <Route exact path="/cod" component={COD} />
                        <Route exact path="/danh-muc-amazon" component={DanhMucAmazon} />
                        <Route exact path="/danh-muc-ebay" component={DanhMucEbay} />
                        <Route exact path="/mua-hang-ebay" component={MuaHangEbay} />
                        <Route exact path="/mua-hang-amazon" component={MuaHangAmazon} />
                        <Route exact path="/detail-product" component={DetailProduct} />
                    </Switch>

                    </div>
                </Router>
            )
        }else{
            return (<div></div>)
        }
        
    }
}
function mapStateToProps(state){
                
    const {alert,authentication} =state;
    return {alert, authentication};
}
const connectedApp=connect(mapStateToProps)(App);
export default connectedApp;