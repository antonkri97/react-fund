import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Popular from './containers/PopularPage';
import Battle from './components/Battle';
import Results from './components/Battle/Results';

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/popular' component={Popular}/>
    <Route exact path='/battle' component={Battle}/>
    <Route path='/battle/results' component={Results}/>
    <Route render={() => <p>Not Found</p>}/>
  </Switch>
);