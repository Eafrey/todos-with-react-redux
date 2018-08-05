import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import App from './component/App';
import Detail from './component/Detail';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import Login from './component/Login';
import Register from './component/Register';

import {
  ConnectedRouter,
  routerMiddleware,
  connectRouter
} from 'connected-react-router';

import { applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { Switch } from 'react-router';

const history = createHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/todo-detail/:id" component={Detail} />
        <Route path="/todos" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
