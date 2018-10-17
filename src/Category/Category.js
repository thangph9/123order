import React from "react";
import { connect } from "react-redux";
import { Header } from "../Sections/Header";
import { Footer } from "../Sections/Footer";
import { Content } from "./Content";
import {mouseClickCategory} from "../actions";
import {initLoadCategoryProducts} from  '../actions';
import axios from 'axios';
class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    componentWillMount(){  
        axios.post('/category').then(res=>{
            this.props.dispatch(initLoadCategoryProducts(res.data[1]))
        })   
    }
    render() {
        var obj={};
        obj.nodeid=this.props.match.params.nodeid;
        obj.categoryindex=this.props.match.params.categoryindex;
        this.props.dispatch(mouseClickCategory(obj));
        return (
            <div>
                <Header/>
                <Content/>
                <Footer/>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd:state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(Category);
export { connectedHomePage as Category } 