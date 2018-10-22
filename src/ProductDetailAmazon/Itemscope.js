import React from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
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
                        <li><Link to={"/home"}>Trang chủ</Link></li>
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