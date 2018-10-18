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
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Citizen</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Seiko</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Burgi</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Akribos</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Skagen</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Anne Klein</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Guess</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Casio</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Invicta</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Michael Kors</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Daniel Wellington</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Fossil</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Kenneth Cole</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Timex</a></li>
                    <li className=""><a style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Kate Spade</a></li>
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