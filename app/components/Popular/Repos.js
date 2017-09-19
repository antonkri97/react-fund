import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '../../styles';
import Spinner from '../Spinner';

const RepoGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RepoItem = styled.li`
  margin: 20px;
  text-align: center;
  list-style-type: none;
`;

const RepoRank = styled.div`
  font-size: 20px;
  margin: 10px;
`;

const RepoItemInfo = styled.ul`
  margin-bottom: 7px;
  list-style-type: none;
  padding: inherit;
`;

const Repos = ({ repos }) => {
  if (!repos.length) {
    return <Spinner />
  }

  return (
    <RepoGrid>
      {
        repos.map((repo, i) => (
          <RepoItem key={i}>
            <RepoRank>{i + 1}</RepoRank>
            <RepoItemInfo>
              <li><Avatar src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`}/></li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </RepoItemInfo>
          </RepoItem>
        ))
      }
    </RepoGrid>
  )
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
