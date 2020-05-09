import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Provider } from 'react-redux';
import store from './store/store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
function App() {
  return (
    <Provider store={store} >
      <ConnectedRouter history={history}>
        {/* <Routes/>*/}
        <Typography variant="h5">SOMETHING COOL'S COMING</Typography>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
