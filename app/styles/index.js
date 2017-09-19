import React from 'react';
import styled from 'styled-components';

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
`;

export const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  
  > input {
    border-radius: 3px;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0.43);
    font-size: 16px;
    width: 80%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Header = styled.label`
  text-align: center;
  font-size: 30px;
  font-weight: 200;
`;

export const Button = styled.button`
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

export const Reset = styled.button`
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

export const SpaceListItem = styled.ul`
  margin-bottom: 7px;
  list-style-type: none;
  padding: inherit;
`;
