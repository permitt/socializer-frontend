import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const sagaMiddleWare = createSagaMiddleware();
const history = createBrowserHistory();
const store = createStore(
    composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleWare))
);


export default store;