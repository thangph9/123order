import React from "react";
import { connect } from "react-redux";

class MenuHideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            active: '',
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

        // Show the current tab, and add an "active" class to the link that opened the tab
        document.getElementById(category).style.display = "block";
    
        
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {

        return (
            <div className="container col-md-3 tab">
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'topHotA')}>
                    <div className="col-8">
                        <span>Top hot </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row pl-4">
                    <div className="nav-line col-12" />
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'thoiTrangA')}>
                    <div className="col-8">
                        <span>Thời trang </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'dongHoA')}>
                    <div className="col-8">
                        <span>Đồng hồ &amp; trang sức </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'dienTuA')}>
                    <div className="col-8">
                        <span>Điện tử &amp; công nghệ</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'sucKhoeA')}>
                    <div className="col-8">
                        <span>Sức khỏe &amp; làm đẹp </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'giaDinhA')}>
                    <div className="col-8">
                        <span>Gia đình &amp; nhà vườn </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'doChoiA')}>
                    <div className="col-8">
                        <span>Đồ chơi &amp; sở thích </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'theThaoA')}>
                    <div className="col-8">
                        <span>Đồ thể thao </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'doCoA')}>
                    <div className="col-8">
                        <span>Đồ cổ, sưu tập</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3 active" onMouseOver={() => this.OpenCategory(this, 'oToA')}>
                    <div className="col-8">
                        <span>Phụ tùng, phụ kiện o tô</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'congNghiepA')}>
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
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'allCategoryA')}   >
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

    return state;
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 