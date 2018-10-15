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
        var { mouseClickCategory } = this.props;
        var { initLoadCategoryItem } = this.props;
        var arrBreadcrumb = [];
        var parentCate = initLoadCategoryItem.filter((item) => {
            return item.nodeid == mouseClickCategory.nodeid;
        })
        if (arrBreadcrumb.length <= mouseClickCategory.categoryindex-1) {
            arrBreadcrumb = arrBreadcrumb.concat(parentCate);
        }
        
        return (
            <section id="breadcrumbs-block-v2" className="breadcrumbs-block-v2" style={{ marginBottom: 30 }}>
                <div className="container-fedo" itemScope="itemscope" itemType="http://schema.org/BreadcrumbList" style={{ padding: 0, height: 33 }}>
                    <ul style={{ padding: 0, marginBottom: 0 }} className="link-list" itemProp="itemListElement" itemScope="itemscope" itemType="http://schema.org/ListItem">
                        <li><a href="https://fado.vn" itemProp="item"><span itemProp="name">Trang chủ</span></a></li>
                        <li className="break" />
                        <li><a href="/us/amazon-store/" itemProp="item"><span itemProp="name">Amazon Mỹ</span></a></li>
                        <li className="break" />
                        {arrBreadcrumb.map((value, index) => {
                            return (
                                <li key={index} className="is-active">
                                    <a itemProp="item">
                                        <span itemProp="name">{value.category}</span>
                                    </a>
                                    <meta itemProp="position" content={1} />
                                </li>)
                        })}
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
        mouseClickCategory: state.mouseClickCategory,
        initLoadCategoryItem: state.initLoadCategoryItem,
    }
}
const connectedHomePage = connect(mapStateToProps)(Breadcrumbs);
export { connectedHomePage as Breadcrumbs } 