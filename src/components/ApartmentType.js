import React from 'react';
import Carousel from './Carousel/Carousel';

const ApartmentType = (props) => {
  return (
    <>
      <div className="flex-container feature-box">
        <h2>Apartment Type</h2>
        <Carousel images={props.images} />
      </div>
    </>
  );
};

export default ApartmentType;
