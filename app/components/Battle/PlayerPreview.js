import React from 'react';
import PropTypes from 'prop-types';
import { Column, Avatar } from '../../styles';
import styled from "styled-components";

const PlayerPreview = ({ children, username, avatar }) => (
  <div>
    <Column>
      <Avatar src={avatar} alt={`Avatar for ${username}`}/>
      <h2>@{username}</h2>
    </Column>
    {children}
  </div>
);

PlayerPreview.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

export default PlayerPreview;
