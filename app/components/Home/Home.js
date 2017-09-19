import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../styles'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <HomeWrapper>
    <h1>Github Battle: Battle your friends...and stuff</h1>
    <Link to='/battle'>
      <Button>Battle</Button>
    </Link>
  </HomeWrapper>
);