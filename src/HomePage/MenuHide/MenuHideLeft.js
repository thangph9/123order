import React from "react";
import { connect } from "react-redux";
//import {loadImg} from '../../actions';
//import initLoad from '../../actions/initLoadHomePage';
//import axios from 'axios';
class MenuHideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            display: 'none'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.OpenCategory = this.OpenCategory.bind(this);
    }
    OpenCategory(evt, category) {
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        //console.log("Open");
        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(category).style.display = "block";
       //console.log(document.getElementById(category));
       //this.setState({display:'block'});
        
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleClickTopHot(){
        
    }
    render() {
        var {LoadCategory}=this.props;
        console.log(LoadCategory);
        return (
            <div className="container col-md-3 tab">
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'topHot')}>
                    <div className="col-8">
                        <span>Danh mục sản phẩm </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row pl-4">
                    <div className="nav-line col-12" />
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'thoiTrang')}>
                    <div className="col-8">
                        <span>Thời trang </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'dongHo')}>
                    <div className="col-8">
                        <span>Đồng hồ &amp; trang sức </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'dienTu')}>
                    <div className="col-8">
                        <span>Điện tử &amp; công nghệ</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'sucKhoe')}>
                    <div className="col-8">
                        <span>Sức khỏe &amp; làm đẹp </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'giaDinh')}>
                    <div className="col-8">
                        <span>Gia đình &amp; nhà vườn </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'doChoi')}>
                    <div className="col-8">
                        <span>Đồ chơi &amp; sở thích </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'theThao')}>
                    <div className="col-8">
                        <span>Đồ thể thao </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'doCo')}>
                    <div className="col-8">
                        <span>Đồ cổ, sưu tập</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3 active" onMouseOver={() => this.OpenCategory(this, 'oTo')}>
                    <div className="col-8">
                        <span>Phụ tùng, phụ kiện o tô</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'congNghiep')}>
                    <div className="col-8">
                        <span>Công nghiệp</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row pl-4">
                    <div className="nav-line col-12" />
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'allCategory')}   >
                    <div className="col-8">
                        <span>Xem toàn bộ danh mục</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadImg:state.loadImg,
        LoadCategory:state.initLoadCategory
    }
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 