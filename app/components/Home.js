import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeButton = styled.button`
  color: #e6e6e6;
  background: #0a0a0a;
  border: none;
  font-size: 16px;
  border-radius: 3px;
  width: 200px;
  text-align: center;
  display: block;
  padding: 7px 0;
  margin: 10px auto;

  :hover:enabled {
    background: linear-gradient(#1a1a1a,#0a0a0a);
    color: #fff;
    text-decoration: none;
  }

  :active {
    transform: translateY(1px);
  }
`;

export default () => (
  <HomeWrapper>
    <h1>Github Battle: Battle your friends...and stuff</h1>
    <Link to='/'>
      <HomeButton>Battle</HomeButton>
    </Link>
  </HomeWrapper>
);