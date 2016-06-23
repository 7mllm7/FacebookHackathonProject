import { take, put, select } from 'redux-saga/effects';
import Types from '../actions/types';
import { runsFetchSuccess } from '../actions/creators';
import { Actions }    from "react-native-router-flux";
import { fetchRuns } from '../services/runs';

export function * watchStartup () {
  console.log(Types)
  yield take(Types.STARTUP)
  const runs = yield fetchRuns()
  yield put(runsFetchSuccess(runs))
  Actions.main()
}
