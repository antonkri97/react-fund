import React, { Component } from 'react';
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview';
import { Link } from 'react-router-dom';
import { Row, Button } from '../../styles';

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: {
        username: '',
        image: null
      },
      playerTwo: {
        username: '',
        image: null
      },
      battleRoute: {
        pathname: '',
        search: ''
      }
    };

    this.handleFirstPlayer = this.handleSubmit.call(this, 'One');
    this.handleSecondPlayer = this.handleSubmit.call(this, 'Two');

    this.onFirstPlayerReset = this.handleReset.call(this, 'One');
    this.onSecondPlayerReset = this.handleReset.call(this, 'Two');
  }

  handleSubmit(id) {
    return (username) => {
      this.setState({
        [`player${id}`]: {
          username,
          image: `https://github.com/${username}.png?size=200`
        }
      }, () => this.setState({
        battleRoute: {
          pathname: `${this.props.match.url}/results`,
          search: `?playerOneName=${this.state.playerOne.username}&playerTwoName=${this.state.playerTwo.username}`
        }
      }))
    }
  }

  handleReset(id) {
    return () => this.setState({
      [`player${id}`]: {
        username: '',
        image: null
      }
    })
  }

  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <div>
        <Row>
          {
            !playerOne.username ?
              <PlayerInput header='Player One' onSubmit={this.handleFirstPlayer}/> :
              <PlayerPreview username={playerOne.username} avatar={playerOne.image} onReset={this.onFirstPlayerReset}/>
          }
          {
            !playerTwo.username ?
              <PlayerInput header='Player Two' onSubmit={this.handleSecondPlayer}/> :
              <PlayerPreview username={playerTwo.username} avatar={playerTwo.image} onReset={this.onSecondPlayerReset}/>
          }
        </Row>
        {
          playerOne.image && playerTwo.image &&
            <Link to={this.state.battleRoute}>
              <Button>
                Battle
              </Button>
            </Link>
        }
      </div>
    )
  }
}

export default Battle;
