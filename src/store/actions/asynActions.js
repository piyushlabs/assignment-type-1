import * as CONSTS from '../constants';
import axios from 'axios';

export const fetchApartment = () => {
  return (dispatch) => {
    dispatch(fetchApartmentRequest());
    axios
      .get('http://localhost:4001/images')
      .then((response) => {
        const images = response.data;
        dispatch(fetchApartmentSuccess(images));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchApartmentFailure(error.message));
      });
  };
};

export const fetchApartmentSuccess = (images) => ({
  type: CONSTS.FETCH_APARTMENT_SUCCESS,
  payload: [...images],
});

export const fetchApartmentRequest = () => ({
  type: CONSTS.FETCH_APARTMENT_REQUEST,
});

export const fetchApartmentFailure = (error) => ({
  type: CONSTS.FETCH_APARTMENT_FAILURE,
  payload: error,
});
