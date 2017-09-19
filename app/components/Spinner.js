import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Loader = styled.h1`
  display: flex;
  justify-content: center;
`

export default class Spinner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingStates: [ 'Loading', 'Loading.', 'Loading..', 'Loading...'],
      currentStates: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        currentStates: prevState.currentStates + 1 === 4 ? 0 : ++prevState.currentStates
      }))
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <Loader>
        {
          this.state.loadingStates[this.state.currentStates]
        }
      </Loader>
    )
  }
}