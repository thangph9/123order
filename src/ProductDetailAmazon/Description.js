import React from "react";
import { connect } from "react-redux";
class Description extends React.Component {
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
    componentWillMount(){
        
    }
    render() {
        
        var blockMain=document.getElementById("block-main");
        var {loadDetail}=this.props;
        if(loadDetail[0]!=undefined&&blockMain!=null){
            blockMain.innerHTML =loadDetail[0].description
        }
        return (
            <section className="product-tab-block-v2 pd-desc-block" id="mo-ta-tab">
                <div className="block-head" style={{ width: 838 }}>
                    <div className="head-title-col">
                        <div style={{ fontSize: 14 }} className="block-title">Mô tả</div>
                    </div>
                    <div className="head-control-col">
                    </div>
                </div>
                <div id="block-main" className="block-main" style={{ fontSize: 14 }}>
                
                </div>
            </section>
        )

    }
}
function mapStateToProps(state) {

    return {
        loadDetail:state.initLoadProductDetail
    }
}
const connectedContent = connect(mapStateToProps)(Description);
export { connectedContent as Description } 