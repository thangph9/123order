import React from "react";
import { connect } from "react-redux";
import { CategoryMainLeft } from "./CategoryMainLeft";
import { CategoryMainRight } from "./CategoryMainRight";
class CategoryMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    render() {
        return (
            <div className="cate-container-v2 container" style={{ padding: 0 }}>
                <CategoryMainLeft/>
                <CategoryMainRight/>

            </div>

        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd: state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(CategoryMain);
export { connectedHomePage as CategoryMain } 