import { connect } from 'react-redux';
import Popular from '../components/Popular';
import { initialRequest as getRepos } from '../ducks/repos';

const mapStateToProps = (state) => ({
  repos: state.api.repos.items
});

const mapDispatchToProps = (dispatch) => ({
  onLanguageSelect: (lang) => dispatch(getRepos(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
