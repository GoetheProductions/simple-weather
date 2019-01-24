import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import Widget from '../src/containers/Widget';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/widget.example/city=:city" name="Widget" component={Widget} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
