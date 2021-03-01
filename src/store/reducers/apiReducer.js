import * as CONSTS from '../constants';

const initialState = {
  loading: false,
  images: [],
  error: '',
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTS.FETCH_APARTMENT_REQUEST:
      return { ...state, loading: true };
    case CONSTS.FETCH_APARTMENT_SUCCESS:
      return { loading: false, images: action.payload };
    case CONSTS.FETCH_APARTMENT_SUCCESS:
      return { loading: false, images: [], error: action.payload };
    default:
      return state;
  }
}
