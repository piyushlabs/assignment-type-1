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

  componentDidUpdate(prevProps) {
    if (prevProps.selectApartment.file != this.props.selectApartment.file) {
      let count = this.props.images.findIndex(
        (x) => x.file === this.props.selectApartment.file,
      );
      count = count ? count : 1;
      this.slider.slickGoTo(count);
    }
  }

  handleClick = (e, id) => {
    e.preventDefault();
    console.log(id);
    // console.log(this.slider.slickCurrentSlide());
  };

  render() {
    const settings = {
      dots: false,
      lazyLoad: true,
      accesibilty: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      //initialSlide: count,
      autoplay: false,
      autoplaySpeed: 6000,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 680,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            arrows: false,
            centerMode: false,
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <>
        <Div className="property-carousel ">
          <Slider
            {...settings}
            className="relative"
            ref={(slider) => (this.slider = slider)}
            afterChange={this.afterChangeHandler}
          >
            {this.props.images.map((image, id) => (
              <div
                key={'slide#' + id}
                className="slick-shadow"
                onClick={(e) => this.handleClick(e, id)}
              >
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
