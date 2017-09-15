import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavWrapper = styled.ul`
  display: flex;
`;

const NavItem = styled(NavLink)`
  margin-right: 15px;
  text-decoration: none;
  color: #d0021b;
  
  &.${(props) => props.activeClassName} {
    font-weight: bold;
  }
`;

NavItem.defaultProps = {
  activeClassName: 'active',
};

export default () => (
  <NavWrapper>
    <NavItem exact to='/'>
      Home
    </NavItem>
    <NavItem to='/battle'>
      Battle
    </NavItem>
    <NavItem to='/popular'>
      Popular
    </NavItem>
  </NavWrapper>
);