export const REQUEST_STARTED_BATTLE = 'REQUEST_STARTED_BATTLE';
const REQUEST_COMPLEATE_BATTLE = 'REQUEST_COMPLEATE_BATTLE';
const REQUEST_ERROR_BATTLE = 'REQUEST_ERROR_BATTLE';

const intitialState = {
  isFetching: false,
  firstUser: null,
  secondUser: null,
  error: null
};

export default function reducer(state = intitialState, action) {
  switch (action.type) {
    case REQUEST_STARTED_BATTLE:
      return { ...state, isFetching: true };
    case REQUEST_COMPLEATE_BATTLE:
      return { ...state, isFetching: false, firstUser: action.firstUser, secondUser: action.secondUser };
    case REQUEST_ERROR_BATTLE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const requestStarted = (firstUsername, secondUsername) => ({
  type: REQUEST_STARTED_BATTLE,
  firstUsername,
  secondUsername
});

export const requestCompleate = (firstUser, secondUser) => ({
  type: REQUEST_COMPLEATE_BATTLE,
  firstUser,
  secondUser
});

export const requestError = (error) => ({
  type: REQUEST_ERROR_BATTLE,
  error
});
