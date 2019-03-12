import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index.js';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Post from './pages/write';
import { GlobalStyle } from './style.js';
import{ GlobalIconFont}from './statics/iconfont/iconfont';
import store from './store';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Post}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
        <GlobalStyle />
        <GlobalIconFont />
      </Fragment>
    );
  }
}

export default App;
