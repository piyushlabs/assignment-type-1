import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from '@emotion/styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import httpsWithQuality from '../../utils/httpsWithQuality';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBed,
  faBath,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

const Div = styled.div`
  background-color: rgb(246, 248, 248);
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
    const {
      type,
      price,
      location,
      maxResident,
      beds,
      bathroom,
    } = this.props.selectApartment;
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
        <Div className="property-carousel ">
          <Slider {...settings} className="relative">
            {this.props.images.map((image, id) => (
              <div key={'slide#' + id} class="slick-shadow">
                <img
                  src={httpsWithQuality(image.image_url, 450)}
                  alt={image.filename}
                  className="img-responsive"
                />
                <h5 title="2 Bedroom" className="float-left">
                  {image.type}
                </h5>
                <h5 className="float-right">
                  <span className="font-weight-bold h4"> {image.price}</span>{' '}
                  /night
                </h5>
                <div className="clearfix" />
                <h4>
                  {' '}
                  <FontAwesomeIcon className="fa" icon={faBed} /> : {image.beds}{' '}
                  <FontAwesomeIcon
                    className="fa"
                    icon={faBath}
                    style={{ marginLeft: '10px' }}
                  />{' '}
                  {image.bathroom}
                </h4>
                <hr />
                <h5>
                  <FontAwesomeIcon className="fa" icon={faMapMarkerAlt} />{' '}
                  {image.location}
                </h5>
                <h6>Max residents: {image.maxResident}</h6>
              </div>
            ))}
          </Slider>
        </Div>
      </>
    );
  }
}
