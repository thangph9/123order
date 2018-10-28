import React from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import { mouseClickSmallImageProduct } from '../actions';
class ContentBodyDetailLeftBot extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(value) {
    this.props.dispatch(mouseClickSmallImageProduct(value));
  }
  render() {
    var { loadDetail } = this.props;
        var menuItems = [];
        var settings = {
            dots: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            arrows: true,
            infinite: false,
            className: 'list-small-image'
        };
        if (loadDetail.length > 0) {
            menuItems = loadDetail[1][0].smallimage.map((img, index) => {
                return (
                    <div key={index} onClick={() => this.handleClick(index)} className="border-small-image">
                        <img className="small-image" alt="img" src={(loadDetail != undefined) ? img : ''} />
                    </div>
                )
            })
        }
    return (
      <div className="slider-avatar-thumb">
        
        <Slider {...settings}>
          {menuItems}
        </Slider>
      </div>
    )

  }
}
function mapStateToProps(state) {
  return{
    loadDetail: state.initLoadProductDetail.data,
  }
}
const connectedHomePage = connect(mapStateToProps)(ContentBodyDetailLeftBot);
export { connectedHomePage as ContentBodyDetailLeftBot } 