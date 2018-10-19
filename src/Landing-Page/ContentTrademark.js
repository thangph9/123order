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
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Citizen</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Seiko</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Burgi</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Akribos</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Skagen</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Anne Klein</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Guess</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Casio</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Invicta</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Michael Kors</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Daniel Wellington</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Fossil</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Kenneth Cole</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Timex</Link></li>
                    <li className=""><Link style={{fontSize: '14px',fontWeight: 600,textDecoration:'none'}} to={'#'}>Kate Spade</Link></li>
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