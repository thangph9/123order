import React from "react";
import { connect } from "react-redux";

class ContentBodyDetailLeftBot extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="slider-avatar-thumb">
              <div className="slider-thumb owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage" style={{ transform: 'translate3d(-183px, 0px, 0px)', transition: 'all 0s ease 0s', width: 551 }}>
                    <div className="owl-item" style={{ width: '91.75px' }}>
                      <div className="item">
                        <a href="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                          <img src="https://st.usexpress.vn/Images/xbuuq1ka107201823359_1_374.9140d406-8070-4265-88fb-37cf4c8a8b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: '91.75px' }}>
                      <div className="item">
                        <a href="https://st.usexpress.vn/Images/rignho3s107201823359_2_374.267e8762-4566-414b-84bf-57088ad5711b.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                          <img src="https://st.usexpress.vn/Images/rignho3s107201823359_2_374.267e8762-4566-414b-84bf-57088ad5711b.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '91.75px' }}>
                      <div className="item">
                        <a href="https://st.usexpress.vn/Images/0uu5b3s4107201823359_3_374.d238eb03-1afe-4275-a8c0-25e3feb01b62.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                          <img src="https://st.usexpress.vn/Images/0uu5b3s4107201823359_3_374.d238eb03-1afe-4275-a8c0-25e3feb01b62.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '91.75px' }}>
                      <div className="item">
                        <a href="https://st.usexpress.vn/Images/aychoasm107201823359_4_374.841df475-ef9e-4a2f-8ae3-967ee12123fa.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                          <img src="https://st.usexpress.vn/Images/aychoasm107201823359_4_374.841df475-ef9e-4a2f-8ae3-967ee12123fa.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: '91.75px' }}>
                      <div className="item">
                        <a href="https://st.usexpress.vn/Images/4wssht5w107201823359_5_374.826fac2b-ce1a-48fd-97b0-9eacbf8eae63.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                          <img src="https://st.usexpress.vn/Images/4wssht5w107201823359_5_374.826fac2b-ce1a-48fd-97b0-9eacbf8eae63.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                        </a>
                      </div>
                    </div>
                    <div className="owl-item selected active" style={{ width: '91.75px' }}>
                      <div className="item">
                        <a href="https://st.usexpress.vn/Images/5v2gltbh107201823359_6_374.d2a548ae-d6d3-4c1b-bbd9-a8a2b7a6eb55.jpeg" title="Ubio Labs Lightning Cable Charging Kit" rel="P_Media" className="changemedia">
                          <img src="https://st.usexpress.vn/Images/5v2gltbh107201823359_6_374.d2a548ae-d6d3-4c1b-bbd9-a8a2b7a6eb55.jpeg" className="images" alt="Ubio Labs Lightning Cable Charging Kit" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot"><span /></div>
                  <div className="owl-dot active"><span /></div>
                </div>
              </div>
            </div>
        )

    }
}
function mapStateToProps(state) {
    return state;
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailLeftBot);
export { connectedHomePage as ContentBodyDetailLeftBot } 