export const REQUEST_STARTED = 'INITIAL_REQUEST';
const REQUEST_SUCCESSFULL = 'REQUEST_SUCCESSFULL';
const REQUEST_FAILED = 'REQUEST_FAILED';


const initialState = {
  isFetching: false,
  repos: {
    items: []
  },
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
      return { ...state, isFetching: true };
    case REQUEST_SUCCESSFULL:
      return { ...state, isFetching: false, repos: action.repos };
    case REQUEST_FAILED:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const initialRequest = (language) => ({
  type: REQUEST_STARTED,
  language
});

export const requestSuccessfull = (repos) => ({
  type: REQUEST_SUCCESSFULL,
  repos
});

export const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  error
});
