import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import httpsWithQuality from '../../utils/httpsWithQuality';

const Div = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    let count =
      this.props.images.findIndex(
        (x) => x.file === this.props.selectApartment.file,
      ) + 1;
    count = count ? count : 1;
    console.log(this.props, this.props.selectApartment, count);
    const settings = {
      dots: false,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: count,
      autoplay: false,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
        <Div className="property-carousel">
          <Slider {...settings} className="relative">
            {this.props.images.map((image, id) => (
              <div key={'slide#' + id}>
                <img
                  src={httpsWithQuality(image.image_url, 450)}
                  alt={image.filename}
                  className="img-responsive"
                />
              </div>
            ))}
          </Slider>
        </Div>
      </>
    );
  }
}
