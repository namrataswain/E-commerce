import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/homepage.components';

const HatsPage = () =>(
  <div>
  <h1>HATS PAGEs</h1>
  </div>
)

function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path='/' component={HomePage}/>
      <Route  path='/shop/hats' component = {HatsPage}/>
    </Switch>
      
    </div>
  );
}

export default App;
