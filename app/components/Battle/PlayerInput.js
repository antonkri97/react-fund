import React, { Component } from 'react';
import { ColumnForm, Header, Button } from '../../styles'
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submit');
    this.props.onSubmit(this.state.username);
  }

  render() {
    return (
      <ColumnForm onSubmit={this.handleSubmit}>
        <Header htmlFor='username'>{this.props.header}</Header>
        <input
          type="text"
          id='username'
          placeholder='github username'
          value={this.state.username}
          autoComplete='off'
          onChange={this.handleChange}
        />
        <Button type='submit' disabled={!this.state.username}>Submit</Button>
      </ColumnForm>
    );
  }
}

PlayerInput.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default PlayerInput;
