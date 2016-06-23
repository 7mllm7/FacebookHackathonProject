import { createReducer } from 'reduxsauce';
import Types from '../actions/types';
const initialState = {
  torch: {},
  list: []
};

const runsFetchSuccess = (state, action) => ({
  ...state, ...{
    torch: action.torch || state.torch,
    list: [
      ...state.list,
      ...action.runs
    ]
  }
});

const ACTION_HANDLERS = {
  [Types.RUNS_FETCH_SUCCESS]: runsFetchSuccess
}

export default createReducer(initialState, ACTION_HANDLERS)
