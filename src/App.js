import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import Routes from './components/Routes';

const history = createBrowserHistory();
function App() {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
