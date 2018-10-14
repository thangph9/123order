import React,{ Component } from "react";
import { Router,Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
//import { createBrowserHistory } from 'history';
import {Price} from '../Price/Price';
import { Test } from '../Test';
import { COD } from "../COD";
import { DanhMucEbay } from "../DanhMucEbay";
import { LandingPage } from "../Landing-Page";
import { DanhMucAmazon } from "../DanhMucAmazon";
//import {PrivateRoute } from "../Sections";
import {MuaHangEbay} from '../MuaHangEbay';
import {BestSeller} from '../BestSeller';
import {GiaSocMoiNgay} from '../GiaSocMoiNgay';
import {HotDealCongNghe} from '../HotDealCongNghe';
import {MuaHangAmazon} from '../MuaHangAmazon';
import {Category} from '../Category';
import {ProductDetailAmazon} from '../ProductDetailAmazon';
import {DetailProduct} from '../Detail-Product/DetailProduct';
import {ProductDetail} from '../Product-Detail/ProductDetail';
import {HomePage} from '../HomePage';
import { history } from "../stores";
import { alertActions } from "../actions";
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
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/home" component={HomePage} />
                        <Route exact path="/cod" component={COD} />
                        <Route exact path="/danh-muc-amazon" component={DanhMucAmazon} />
                        <Route exact path="/danh-muc-ebay" component={DanhMucEbay} />
                        <Route exact path="/mua-hang-ebay" component={MuaHangEbay} />
                        <Route exact path="/gia-soc-moi-ngay" component={GiaSocMoiNgay} />
                        <Route exact path="/mua-hang-amazon" component={MuaHangAmazon} />
                        <Route exact path="/detail-product/*.:dealid" component={DetailProduct} />
                        <Route exact path="/best-seller" component={BestSeller} />
                        <Route exact path="/hot-deal-cong-nghe" component={HotDealCongNghe} />
                        <Route exact path="/landing-page" component={LandingPage} />
                        <Route exact path="/price" component={Price} />
                        <Route exact path="/category/nodeid=:nodeid&categoryindex=:categoryindex" component={Category} />
                        <Route exact path="/product-detail/*id=:dealid" component={ProductDetail} />
                        <Route exact path="/product-detail-amazon/*asin=:asin" component={ProductDetailAmazon} />
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