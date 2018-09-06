import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentTopLeft } from "./ContentTopLeft";
import { ContentTopRight } from "./ContentTopRight";
class ContentTop extends React.Component {
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
            <div className="container mt-2">
                <div className="row">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb crumb-background">
                            <li className="breadcrumb-item"><Link to="/home" href="" className="text-dark">Trang chủ</Link></li>
                            <li className="breadcrumb-item"><Link to="/mua-hang-amazon"  className="text-dark">Mua hàng Amazon</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Đồ công nghệ</li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <ContentTopLeft/>
                    <ContentTopRight/>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connected = connect(mapStateToProps)(ContentTop);
export { connected as ContentTop } 