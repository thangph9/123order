import React from "react";
import { connect } from "react-redux";

class CommentBlock extends React.Component {
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
            <section className="product-tab-block-v2 pd-comment-block" style={{ width: 838 }}>
                <div className="block-head" style={{ width: 838 }}>
                    <div className="head-title-col">
                        <div className="block-title">Bình luận</div>
                    </div>
                    <div className="head-control-col">
                    </div>
                </div>{/* .block-head */}
                <div className="block-main">
                    <div id="__izi-comment_widget" />
                </div>{/* .block-main */}
            </section>
        )

    }
}
function mapStateToProps(state) {

    return state;
}
const connectedContent = connect(mapStateToProps)(CommentBlock);
export { connectedContent as CommentBlock } 