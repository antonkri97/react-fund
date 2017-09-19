import repos from './repos';
import battle from './battle';
import { fork } from 'redux-saga/effects';

export default function*() {
  yield [
    fork(repos),
    fork(battle)
  ]
}
