import { call, put, takeLatest } from 'redux-saga/effects';
import {REQUEST_STARTED, requestFailed, requestSuccessfull} from "../ducks/repos";

function* fetchRepos(action) {
  const { language } = action;

  const uri = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;

  try {
    const repos = yield call(axios.get, uri);

    yield put(requestSuccessfull(repos.data))
  } catch (error) {
    yield put(requestFailed(error.message))
  }
}

function* mySaga() {
  yield takeLatest(REQUEST_STARTED, fetchRepos)
}

export default mySaga;