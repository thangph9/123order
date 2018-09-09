import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ContentDetail } from "./ContentDetail";
import { ContentDetailSeller } from "./ContentDetailSeller";
import { ContentChangePrice } from "./ContentChangePrice";
import { ContentItemInfo } from "./ContentItemInfo";
import { ContentItemInfoDetail } from "./ContentItemInfoDetail";
import { ContentCommentAndRate } from "./ContentCommentAndRate";
import { ContentCommentDetail } from "./ContentCommentDetail";
import { ShowMore } from "./ShowMore";
import { ProductItemList } from "./ProductItemList";

class Content extends React.Component {
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
        var {loadDetail} = this.props;
        return (
            <div>
                <nav aria-label="breadcrumb ">
                    <ol className="container breadcrumb ">
                        <li className="breadcrumb-item "><Link to="/home">Trang chủ</Link></li>
                        <li className="breadcrumb-item "><Link to="/mua-hang-amazon" >Mua hàng Amazon</Link></li>
                        <li className="breadcrumb-item ">{loadDetail[0].title}</li>
                    </ol>
                </nav>
                <ContentDetail />
                <ContentDetailSeller />
                <ContentChangePrice />
                <ContentItemInfo />
                <ContentItemInfoDetail />
                <ContentCommentAndRate />
                <ContentCommentDetail />
                <ShowMore />
                <ContentCommentAndRate />
                <div className="container product-involve-detail mb-5">
                    <ProductItemList/>
                </div>

            </div>

        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(Content);
export { connectedContent as Content } 