import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
class ContentBodyDetailLeftTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { loadDetail } = this.props;
    var { mouseClick } = this.props;
    return (
      <div className="big-image-product">
        <ReactImageMagnify style={{ zIndex: 3 }} className="xzoom" {...{
          smallImage: {
            alt: 'img',
            isFluidWidth: true,
            src: (loadDetail != undefined) ? loadDetail.largeimage[mouseClick] : ''

          },
          largeImage: {
            src: (loadDetail != undefined > 0) ? loadDetail.hugeimage[mouseClick] : '',
            width: 1200,
            height: 1200
          },
          shouldUsePositiveSpaceLens: true,
          enlargedImageContainerDimensions: {
            width: '190%', height: '200%'
          },

          shouldHideHintAfterFirstActivation: false
        }} />
      </div>
    )

  }
}
function mapStateToProps(state) {
  return {
    loadDetail: state.initLoadProductDetail.data[1][0],
    mouseClick: state.mouseClickSmallImageProduct,
  }
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailLeftTop);
export { connectedHomePage as ContentBodyDetailLeftTop } 