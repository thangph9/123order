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
        var { LoadCategory } = this.props;
        var categoryItems = [];
        if (LoadCategory.length > 0) {
            for (var i = 19; i < 26; i++) {
                categoryItems.push(
                    <div key={i} className="row tablinks pl-4 my-3">
                        <div className="col-10">
                            <span>{LoadCategory[i].category}</span>
                        </div>
                    </div>)
            }
        }
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
                {categoryItems}
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
        loadImg: state.loadImg,
        LoadCategory: state.initLoadCategory
    }
}
const connected = connect(mapStateToProps)(MenuHideLeft);
export { connected as MenuHideLeft } 