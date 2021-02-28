import React from 'react';
import Carousel from 'src/components/Carousel/Carousel';

const ApartmentType = (props) => {
  return (
    <>
      <div className="flex-container">
        <Carousel images={props.images} />
      </div>
    </>
  );
};

export default ApartmentType;
