import Types from '../actions/types';

const initialState = { coords: {} };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Types.SET_LOCATION:
      return action.payload;

    default:
      return state;
  }
}