import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Example from './Example'
import Nav from './layout/Nav'
export default () => <div>
  <Provider store={store}>
    <Nav />
  </Provider>
</div>
