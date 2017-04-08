import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../ducks';
import Scenes from './Scenes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Scenes />
      </Provider>
    );
  }
}

export default App;
