import React from "react";
class ContentBreadcrumb extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="menu_control mb10">
                <div className="container-use">
                    <ul className="breadcrumb">
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/costco/store">costco</a></li>
                        <li className="active" />
                    </ul>
                </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBreadcrumb);
export { connectedHomePage as ContentBreadcrumb } 