import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchApartment } from '../store/actions/asynActions';
import ApartmentType from '../components/ApartmentType';
import ApartmentDropDown from '../components/ApartmentDropDown';

function ApartmentComponent({ loading, error, images, fetchApartments }) {
  useEffect(() => {
    fetchApartments();
  }, []);
  return loading ? (
    <h2>Loading</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      {images && (
        <div>
          <ApartmentDropDown images={images} />
          <ApartmentType images={images} />;
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.api.images,
    loading: state.api.loading,
    error: state.api.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchApartments: () => dispatch(fetchApartment()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentComponent);
