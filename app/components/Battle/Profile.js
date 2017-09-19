import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PlayerPreview from './PlayerPreview';
import { SpaceListItem } from '../../styles';

const Profile = ({ info }) => (
  <PlayerPreview username={info.login} avatar={info.avatar_url}>
    <SpaceListItem>
      {info.name && <li>{info.name}</li>}
      {info.location && <li>{info.location}</li>}
      {info.company && <li>{info.company}</li>}
      <li>Followers: {info.followers}</li>
      <li>Following: {info.following}</li>
      <li>Public Repos: {info.public_repos}</li>
      {info.blog && <li><a href={info.blog}>{info.blog}</a></li>}
    </SpaceListItem>
  </PlayerPreview>
);

Profile.propTypes = {
  info: PropTypes.object.isRequired
};

export default Profile;
