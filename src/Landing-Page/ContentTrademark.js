import React from "react";
import { connect } from "react-redux";

class ContentTrademark extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            loading: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(){
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render(){
        
        return (
            <div className="main-tabs">
            <div className="container">
                <ul className="list-inline">
                    <li className=""><a href="https://weshop.com.vn/search/bulova%20women%20watch.html?portal=ebay">Bulova</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/citizen%20women%20watch.html?portal=ebay">Citizen</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/seiko%20women%20watch.html?portal=ebay">Seiko</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/burgi%20women%20watch.html?portal=ebay">Burgi</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/akribos%20women%20watch.html?portal=ebay">Akribos</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/skagen%20women%20watch.html?portal=ebay">Skagen</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/anne%20klein%20women%20watch.html?portal=ebay">Anne Klein</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/guess%20women%20watch.html?portal=ebay">Guess</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/casio%20women%20watch.html?portal=ebay">Casio</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/invicta%20women%20watch.html?portal=ebay">Invicta</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/michael%20kors%20women%20watch.html?portal=ebay">Michael Kors</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/%20Daniel%20Wellington%20women%20watch.html?portal=ebay">Daniel Wellington</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/fossil%20women%20watch.html?portal=ebay">Fossil</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/Kenneth%20Cole%20women%20watch.html?portal=ebay">Kenneth Cole</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/Timex%20women%20watch.html?portal=ebay">Timex</a></li>
                    <li className=""><a href="https://weshop.com.vn/search/Kate%20Spade%20women%20watch.html?portal=ebay">Kate Spade</a></li>
                </ul>
            </div>
            </div>
        )
        
    }
}
function mapStateToProps(state){
  
    return  state;
}
const connectedContent=connect(mapStateToProps)(ContentTrademark);
export { connectedContent as ContentTrademark } 