export const REQUEST_STARTED_REPOS = 'REQUEST_STARTED_REPOS';
const REQUEST_COMPLEATE_REPOS = 'REQUEST_COMPLEATE_REPOS';
const REQUEST_ERROR_REPOS = 'REQUEST_ERROR_REPOS';


const initialState = {
  isFetching: false,
  repos: {
    items: []
  },
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED_REPOS:
      return { ...state, isFetching: true, repos: { items: []}};
    case REQUEST_COMPLEATE_REPOS:
      return { ...state, isFetching: false, repos: action.repos };
    case REQUEST_ERROR_REPOS:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const initialRequest = (language) => ({
  type: REQUEST_STARTED_REPOS,
  language
});

export const requestSuccessfull = (repos) => ({
  type: REQUEST_COMPLEATE_REPOS,
  repos
});

export const requestFailed = (error) => ({
  type: REQUEST_ERROR_REPOS,
  error
});
