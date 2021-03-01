import { SELECT_APARTMENT } from '../constants';

const initialState = {
  selectedApt: {},
};

export default function apartmentReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_APARTMENT:
      return { ...state, ...action.selectedApt };
    default:
      return state;
  }
}
