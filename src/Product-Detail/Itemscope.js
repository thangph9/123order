import React from "react";
import { connect } from "react-redux";
class Itemscope extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({
            login: false
        })
        console.log("Hello World")
    }
    render() {

        return (
            <section style={{marginBottom:'0px'}} id="breadcrumbs-block-v2" className="breadcrumbs-block-v2 ">
                <div className="container-fedo" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
                    <ul className="link-list" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
                        <li><a href="/">Trang chủ</a></li>
                        <li className="break" />
                        <li><a href="/de/amazon-store/" itemProp="item"><span itemProp="name">Amazon Đức</span></a></li>
                        <li className="break" />
                    </ul>
                </div>
            </section>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(Itemscope);
export { connectedContent as Itemscope } 