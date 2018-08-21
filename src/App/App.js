import React,{ Component } from "react";
import { Router,Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { createBrowserHistory } from 'history';

import { alertActions } from "../actions";
import { HomePage } from "../HomePage";
import {PrivateRoute } from "../Sections";

import { history } from "../stores";
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