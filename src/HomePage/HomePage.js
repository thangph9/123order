import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
    }
    componentDidMount(){
        //this.props.dispatch(userAction.All());
        //console.log();
        /*
        document.body.className='ltr vi default unconfirmed macintosh';
        //console.log(document.head);
        this.loadStyleSheets(null,'/css/homepage.v1.css')
        var sc = document.createElement("link");
        document.getElementsByTagName('html')[0].setAttribute('class', 'css3 flexbox notouch');
        */
    }
    componentWillMount(){
         this._stylesheetPromises = [];
    }
    componentWillUnmount(){
        /*
        this._stylesheetPromises.forEach(function(p){
          // we use the promises because unmount before the download finishes is possible
          p.then(function(link){
            // guard against it being otherwise removed
            //console.log(link);
            if (link.parentNode) link.parentNode.removeChild(link);
          });
        });
        let head=document.head;
        let myNode = document.getElementsByTagName("link");
        //console.log(myNode[0].firstChild);
        for(var i=0 ; i< myNode.length ; i++){
            if(myNode[i].href.indexOf('homepage') > -1 ){
                myNode[i].parentNode.removeChild(myNode[i]);
            //    console.log(myNode[i]);
            }
        }
        //console.log(this._stylesheetPromises);
        */
    }
    loadStyleSheets(name,url){
        this._stylesheetPromises.push(this.loadStyleSheet(url));
       //console.log(this._stylesheetPromises);
    }
    /*
    loadStyleSheet(url){
      var sheet = document.createElement('link');
      sheet.rel = 'stylesheet';
      sheet.href = url;
      sheet.type = 'text/css';
      document.head.appendChild(sheet);
      var _timer;

      // TODO: handle failure
      return new Promise(function(resolve){
        sheet.onload = resolve;
        sheet.addEventListener('load', resolve);
        sheet.onreadystatechange = function(){
          if (sheet.readyState === 'loaded' || sheet.readyState === 'complete') {
            resolve();
          }
        };

        _timer = setInterval(function(){
          try {
            for (var i=0; i<document.styleSheets.length; i++) {
              if (document.styleSheets[i].href === sheet.href) resolve();
            } 
            }catch(e) { }
          }, 250);
      })
      .then(function(){ clearInterval(_timer); return sheet; });
    }
    */
    render(){
        
        return (
            <div id="wrapper">
                 HomePage      
            </div>
        )
        
    }
}
function mapStateToProps(state){
    const {page} = state;
    return {page};
}
const connectedHomePage=connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage } 