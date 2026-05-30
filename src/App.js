import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './activity/Home'
import Login from './activity/Login'
import Package from './activity/Packages'
import Promo from './activity/Promo'
import Feedback from './activity/Feedback'
import { loadCookie } from './cookieStore';

class App extends Component {

  render() {
    const number = loadCookie('number');

    if(number){
      return (
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="/packages" component={Package} />
            <Route path="/promo" component={Promo} />
            <Route path="/feedback" component={Feedback} />
          </div>
        </BrowserRouter >
      );
    }
    else{
      return(
        <Login/>
      );
    }
  }
}

export default App;
