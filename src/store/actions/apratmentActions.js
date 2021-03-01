import { SELECT_APARTMENT } from '../constants';
import axios from 'axios';

// Clear errors
export const selectApt = (selectedApt) => {
  return {
    type: SELECT_APARTMENT,
    selectedApt: selectedApt,
  };
};
