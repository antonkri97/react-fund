import { call, takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { requestStarted, requestCompleate, requestError, REQUEST_STARTED_BATTLE } from '../ducks/battle';

const getProfile = username => axios.get(`https://api.github.com/users/${username}`).then(user => user.data);

const getRepos = username => axios.get(`https://api.github.com/users/${username}/repos`);

const getStarCount = repos => repos.data.reduce((count, repo) => count + repo.stargazers_count, 0);

const calculateScore = (profile, repos) => profile.followers * 3 + getStarCount(repos);

function* getPlayerScore(username) {
  const playerData = yield call(axios.all, [
    getProfile(username),
    getRepos(username)
  ]);

  const profile = playerData[0];
  const score = playerData[1];

  return {
    profile,
    score: calculateScore(profile, score)
  };
}

const sortWinners = (...players) => players.sort((a, b) => b.score - a.score)

function* fetchUsers({ firstUsername, secondUsername }) {
  console.log(firstUsername, secondUsername);

  try {
    const firstPlayer = yield getPlayerScore(firstUsername);
    const secondPlayer = yield getPlayerScore(secondUsername);

    const sorted = sortWinners(firstPlayer, secondPlayer);

    yield put(requestCompleate(sorted[0], sorted[1]));

  } catch (error) {
    yield put(requestError(error));
  }
}

export default function* battle() {
  yield takeLatest(REQUEST_STARTED_BATTLE, fetchUsers);
}
