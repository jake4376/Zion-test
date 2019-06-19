import React from 'react';
import { Provider } from 'react-redux';
import DashBoard from './pages/DashBoard';

import store from './redux/store';

export default class App extends React.Component {
    render () {
      return (
        <Provider store={store}>
          <DashBoard />
        </Provider>
      )
    }
}
