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
                <div className="row tablinks pl-4 my-3 active" onMouseOver={() => this.OpenCategory(this, 'storeTrungTam')}>
                    <div className="col-8">
                        <span>Trung tâm mua sắm lớn</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'storeThoiTrang')}>
                    <div className="col-8">
                        <span>Thời trang/Trang sức/Phụ kiện </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'storeSucKhoe')}>
                    <div className="col-8">
                        <span>Sức khỏe/Mỹ phẩm/Sắc đẹp </span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'storeMeBe')}>
                    <div className="col-8">
                        <span>Mẹ &amp; bé</span>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-angle-right pl-5" />
                    </div>
                </div>
                <div className="row tablinks pl-4 my-3" onMouseOver={() => this.OpenCategory(this, 'storeCongNghe')}>
                    <div className="col-8">
                        <span>Công nghệ </span>
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