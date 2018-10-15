import React from "react";
import { connect } from "react-redux";
class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    render() {
        var {showBreadcrumbByCategory} = this.props;
        return (
            <section id="breadcrumbs-block-v2" className="breadcrumbs-block-v2" style={{ marginBottom: 30 }}>
                <div className="container-fedo" itemScope="itemscope" itemType="http://schema.org/BreadcrumbList" style={{ padding: 0, height: 33 }}>
                    <ul style={{ padding: 0, marginBottom: 0 }} className="link-list" itemProp="itemListElement" itemScope="itemscope" itemType="http://schema.org/ListItem">
                        <li><a href="https://fado.vn" itemProp="item"><span itemProp="name">Trang chủ</span></a></li>
                        <li className="break" />
                        <li><a href="/us/amazon-store/" itemProp="item"><span itemProp="name">Amazon Mỹ</span></a></li>
                        <li className="break" />
                        <li className="is-active">
                            <a itemProp="item">
                                <span itemProp="name">{showBreadcrumbByCategory.category}</span>
                            </a>
                            <meta itemProp="position" content={1} />
                        </li>
                        <li className="break" />
                    </ul>
                    <form className="search-form" id="search-cate">
                        <input type="search" id="keyword-input-index" defaultValue="" className="keyword-input keyword-txt" placeholder="Tìm kiếm trong danh mục..." />
                        <button type="button" id="search-btn-index" className="submit-btn search-btn-cate" data-lang="us" data-rh="n:172282" />
                    </form>
                </div>{/* .container */}
            </section>
        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd: state.loadAdd,
        showBreadcrumbByCategory:state.showBreadcrumbByCategory
    }
}
const connectedHomePage = connect(mapStateToProps)(Breadcrumbs);
export { connectedHomePage as Breadcrumbs } 