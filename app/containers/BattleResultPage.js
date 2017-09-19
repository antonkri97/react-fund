import { connect } from 'react-redux';
import Results from '../components/Battle/Results';
import { parse } from 'query-string';
import { requestStarted } from '../ducks/battle';

const mapStateToProps = ({ battle }) => ({
  winner: battle.firstUser,
  losser: battle.secondUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { playerOneName, playerTwoName } = parse(ownProps.location.search);

  console.log('Pareser', playerOneName, playerTwoName)

  return {
    getPlayersResult: () => dispatch(requestStarted(playerOneName, playerTwoName))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
