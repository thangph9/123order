import React from "react";
import { connect } from "react-redux";
import ReactImageMagnify from 'react-image-magnify';
class ContentBodyDetailLeftTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { loadDetail } = this.props;
    var { mouseClick } = this.props;
    (loadDetai!=undefined&&loadDetail.length>0) &&console.log(loadDetail);
    return (
      <div className="big-image-product">
        <ReactImageMagnify style={{ zIndex: 3 }} className="xzoom" {...{
          smallImage: {
            alt: 'img',
            isFluidWidth: true,
            src: (loadDetail!=undefined&&loadDetail.length>0) ? loadDetail[1][0].largeimage[mouseClick] : ''

          },
          largeImage: {
            src: (loadDetail!=undefined&&loadDetail.length>0) ? loadDetail[1][0].hugeimage[mouseClick] : '',
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
    loadDetail: state.initLoadProductDetail.data,
    mouseClick: state.mouseClickSmallImageProduct,
  }
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailLeftTop);
export { connectedHomePage as ContentBodyDetailLeftTop } 