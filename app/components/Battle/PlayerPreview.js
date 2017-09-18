import React from 'react';
import PropTypes from 'prop-types';
import { Column, Avatar } from '../../styles';
import styled from "styled-components";

const Reset = styled.button`
  border: none;
  background: transparent;
  color: #d0021b;
  display: block;
  width: 100%;
  text-align: center;
  
  :hover {
    cursor: pointer;
  }
`;

const PlayerPreview = ({ username, avatar, onReset }) => (
  <div>
    <Column>
      <Avatar src={avatar} alt={`Avatar for ${username}`}/>
      <h2>@{username}</h2>
    </Column>
    <Reset onClick={onReset}>Reset</Reset>
  </div>
);

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
};

export default PlayerPreview;
