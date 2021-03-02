import React from 'react';
import Carousel from './Carousel/Carousel';
import { connect } from 'react-redux';
import { selectApt } from '../store/actions/apratmentActions';

const ApartmentType = (props) => {
  return (
    <>
      <div className="flex-container feature-box">
        <h2>Apartment Type</h2>
        <Carousel images={props.images} selectApartment={props.selectedApt} />
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    selectedApt: state.apartments.selectedApt,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectAppartment: (selectedApt) => {
      dispatch(selectApt({ selectedApt }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentType);
