import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/homepage/homepage.components';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/Header/header-component';

function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component = {ShopPage}/>
      <Route exact path='/signin' component = {SignInAndSignUpPage}/>
    </Switch>
      
    </div>
  );
}

export default App;
