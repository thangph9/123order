import React from "react";
import { connect } from "react-redux";
import ReactImageMagnify from 'react-image-magnify';
import ImageZoom from 'react-medium-image-zoom'
class ContentBodyDetailLeftTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { loadDetail } = this.props;
    var { mouseClick } = this.props;

    return (
      <div className="big-image-product">
      <ImageZoom
        image={{
          src: (loadDetail!=undefined&&loadDetail.length>0) ? loadDetail[1][0].largeimage[mouseClick] : '',
          alt: 'img',
        }}
        zoomImage={{
          src: (loadDetail!=undefined&&loadDetail.length>0) ? loadDetail[1][0].hugeimage[mouseClick] : '',
          alt: 'img'
        }}
      />
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