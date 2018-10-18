import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
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
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Citizen</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Seiko</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Burgi</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Akribos</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Skagen</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Anne Klein</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Guess</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Casio</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Invicta</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Michael Kors</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Daniel Wellington</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Fossil</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Kenneth Cole</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Timex</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} href="#">Kate Spade</Link></li>
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