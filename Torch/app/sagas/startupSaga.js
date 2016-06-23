import { take, put, select } from 'redux-saga/effects';
import Types from '../actions/types';
import actions from '../actions/creators';
import { Actions }    from "react-native-router-flux";


export function * watchStartup () {
  while (true) {
    yield take(Types.STARTUP)
    setTimeout(()=> {
      Actions.main()
    },4000)
  }
}
