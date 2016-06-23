import { fork } from 'redux-saga/effects';
import { watchStartup } from './startupSaga';
import { watchLoginAttempt } from './authSaga';
// start the daemons
export default function * root () {
  yield fork(watchStartup)
}
