import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../../styles';
import styled from 'styled-components';
import Profile from './Profile';

const Score = styled.h3`
  text-align: center;
`

export const Header = styled.h1`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
`;

const Player = ({ label, profile, score }) => (
  <div>
    <Header>{label}</Header>
    <Score>Score: {score}</Score>
    <Profile info={profile} />
  </div>
);

Player.propTypes = {
  label: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
};

export default Player;
