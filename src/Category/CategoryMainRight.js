import React from "react";
import { connect } from "react-redux";
import { CategoryMainRightHead } from "./CategoryMainRightHead";
import { CategoryMainRightBody } from "./CategoryMainRightBody";
import { CategoryMainRightFoot } from "./CategoryMainRightFoot"
class CategoryMainRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            loading: false,
        }
    }
    render() {
        return (
            <div className="container-col">
            <section id="category-block-v2" className="category-block-v2">
                <CategoryMainRightHead/>
                <CategoryMainRightBody/>
                <CategoryMainRightFoot/>

              
            </section>
          </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        loadAdd:state.loadAdd
    }
}
const connectedHomePage = connect(mapStateToProps)(CategoryMainRight);
export { connectedHomePage as CategoryMainRight } 