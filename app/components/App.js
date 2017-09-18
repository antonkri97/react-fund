import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from '../Routes';


const AppWrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;

  max-width: 1200px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppWrapper>
          <Nav />
          <Routes/>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
