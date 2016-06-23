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

const pickup = (state, action) => ({
  ...state, ...{
    torch: { ...state.torch, currentRun: 'Yes', currentLocation: action.location }
  }
});

const drop = (state, action) => ({
  ...state, ...{
    torch: { ...state.torch, currentRun: null, currentLocation: action.destination },
    list: state.list.concat({
      name: 'Woosh',
      runner: 'Me',
      destination: action.destination,
      origin: state.list[state.list.length - 1].destination
    })
  }
});

const ACTION_HANDLERS = {
  [Types.RUNS_FETCH_SUCCESS]: runsFetchSuccess,
  [Types.PICKUP]: pickup,
  [Types.DROP]: drop
}

export default createReducer(initialState, ACTION_HANDLERS)
