import { call, put, takeLatest } from 'redux-saga/effects';
import {REQUEST_STARTED_REPOS, requestFailed, requestSuccessfull} from "../ducks/repos";
import axios from 'axios';

function* fetchRepos({ language }) {
  const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;

  try {
    const repos = yield call(axios.get, uri);

    yield put(requestSuccessfull(repos.data))
  } catch (error) {
    yield put(requestFailed(error.message))
  }
}

export default function* repos() {
  yield takeLatest(REQUEST_STARTED_REPOS, fetchRepos)
}
