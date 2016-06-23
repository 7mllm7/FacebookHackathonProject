import { createReducer } from 'reduxsauce';
import Types from '../actions/types';
const initialState = [];

const runsFetchSuccess = (state, action) => ([...state, ...action.runs]);

const ACTION_HANDLERS = {
  [Types.RUNS_FETCH_SUCCESS]: runsFetchSuccess
}

export default createReducer(initialState, ACTION_HANDLERS)
