import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentBotRightItemList } from "./ContentBotRightItemList";
import { ContentBotRightPage } from "./ContentBotRightPage";
class ContentBotRightItemBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    handleChange(e) {
        this.setState({
            login: true,

        })
    }

    render() {

        return (
            <div class="container bg-white rounded-top">
                <div className="row py-2">
                    <div className="col-8 pt-1">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb crumb-background mb-0">
                                <li className="breadcrumb-item category align-self-center"><a href="#" className="text-dark">Đồ công nghệ</a></li>
                                <li className="breadcrumb-item active found-item-font align-self-center" aria-current="page">Tìm thấy 99,804 sản phẩm</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-md-4">
                        <nav className="navbar navbar-expand-lg navbar-light bg-white">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="category-item">Sắp xếp theo</span>
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active d-none d-lg-block">
                                        <span className="nav-link category-item">Sắp xếp theo <span className="sr-only">(current)</span></span>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Mới nhất
              </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Mới nhất</a>
                                                <a className="dropdown-item" href="#">Cũ Nhất</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <ContentBotRightItemList/>
                <ContentBotRightItemList/>
                <ContentBotRightItemList/>
                <ContentBotRightPage/>
            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentBotRightItemBox);
export { connected as ContentBotRightItemBox } 