import React from "react";
import { connect } from "react-redux";
class CategoryMainRightFoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    render() {
        return (
            <div className="block-foot">
                <nav className="pagination-nav-v2">
                    <ul className="page-list" style={{ paddingLeft: 0, marginTop: 0, marginBottom: 0 }}>
                        <li className="is-active"><a href="javascript:;">1</a></li><li><a href="/us/s/cat/?rh=n:172282&page=2&ie=UTF8&qid=1538963894">2</a></li><li><a href="/us/s/cat/?rh=n:172282&page=3&ie=UTF8&qid=1538963894">3</a></li><li className="dots">...</li><li><a href="javascript:;">400</a></li><li><a className="next-btn" href="/us/s/cat/?rh=n:172282&page=2&ie=UTF8&qid=1538963894" /></li>                      </ul>
                </nav>{/* .pagination-nav-v2 */}
            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd: state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(CategoryMainRightFoot);
export { connectedHomePage as CategoryMainRightFoot } 