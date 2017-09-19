import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import { Row } from '../../styles';
import Spinner from '../Spinner';

class Results extends Component {
  componentDidMount() {
    this.props.getPlayersResult();
  }

  render() {
    const { winner, losser } = this.props;

    if (!winner) {
      return <Spinner />
    }

    return (
      <Row>
        <Player label='Winner' score={winner.score} profile={winner.profile}/>
        <Player label='Losser' score={losser.score} profile={losser.profile}/>
      </Row>
    )
  }
}

Results.propTypes = {
  getPlayersResult: PropTypes.func.isRequired,
  winner: PropTypes.object,
  losser: PropTypes.object
}

export default Results;
