import { take, put, select } from 'redux-saga/effects';
import Types from '../actions/types';
import { runsFetchSuccess } from '../actions/creators';
import { Actions }    from "react-native-router-flux";
import { fetchRuns } from '../services/runs';
import { fetchAll } from '../services/torch';

export function * watchStartup () {
  yield take(Types.STARTUP)
  const torch = yield fetchAll()
  const runs = yield fetchRuns(torch[0].id)
  yield put(runsFetchSuccess(torch[0], runs))
  Actions.main()
}
