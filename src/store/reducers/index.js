import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import apartmentReducer from './apartmentReducer';
import apiReducer from './apiReducer';

export default combineReducers({
  api: apiReducer,
  errors: errorReducer,
  apartments: apartmentReducer,
});
