import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Breadcrumbs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
            arr: [],
            num: ''
        }
    }
    myFunc(nodeid, arr) {
        var { initLoadCategoryItem } = this.props;
        var breadcrunmb = initLoadCategoryItem.filter((v, i) => {
            return v.nodeid == nodeid
        })
        var breadcrunmbParent = initLoadCategoryItem.filter((value, index) => {
            return value.nodeid == breadcrunmb[0].groupid
        })
        arr.push(breadcrunmbParent[0])
        if (breadcrunmbParent[0].categoryindex > 1) {
            this.myFunc(breadcrunmbParent[0].nodeid, arr)
        }
        return arr;
    }
    render() {

        var { mouseClickCategory } = this.props;
        var { initLoadCategoryItem } = this.props;
        if (mouseClickCategory!= undefined) {
            var arr = [];
            var newarr = this.myFunc(mouseClickCategory.nodeid, arr);
            if (Number(mouseClickCategory.categoryindex) > 1) {
                var parentCate = initLoadCategoryItem.filter((item) => {
                    return item.nodeid == mouseClickCategory.nodeid;
                })
                newarr.unshift(parentCate[0]);
            }
            newarr.reverse();
            console.log(newarr);
        }
        return (
            <section id="breadcrumbs-block-v2" className="breadcrumbs-block-v2" style={{ marginBottom: 30 }}>
                <div className="container-fedo" itemScope="itemscope" itemType="http://schema.org/BreadcrumbList" style={{ padding: 0, height: 33 }}>
                    <ul style={{ padding: 0, marginBottom: 0 }} className="link-list" itemProp="itemListElement" itemScope="itemscope" itemType="http://schema.org/ListItem">
                        <li><a href="https://fado.vn" itemProp="item"><span itemProp="name">Trang chủ</span></a></li>
                        <li className="break" />
                        <li><a href="/us/amazon-store/" itemProp="item"><span itemProp="name">Amazon Mỹ</span></a></li>
                        {(newarr.length > 0) && newarr.map((v, i) => {
                            return (
                                <span key={i}>
                                    <li className="break" />
                                    <li className="is-active">
                                        <Link to={`/category/nodeid=${v.nodeid}&categoryindex=${v.categoryindex}`} itemProp="item">
                                            <span itemProp="name">{v.category}</span>
                                        </Link>
                                        <meta itemProp="position" content={1} />
                                    </li>

                                </span>)
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
        initLoadCategoryItem: state.initLoadCategoryItem,
        mouseClickCategory: state.mouseClickCategory
    }
}
const connectedHomePage = connect(mapStateToProps)(Breadcrumbs);
export { connectedHomePage as Breadcrumbs } 