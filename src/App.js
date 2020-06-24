import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Blog from './Blog';
import Technology from './Technology';
import Demo from './Demo'

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Switch>
          <Route exact path ="/" component={Blog}/>
          <Route exact path ="/tech" component={Technology}/>
          <Route exact path ="/demo" component={Demo}/>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
