import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './component/App';
import Detail from './component/Detail';
import registerServiceWorker from './registerServiceWorker';

import { connect } from 'react-redux';
import {
  ConnectedRouter,
  routerMiddleware,
  connectRouter
} from 'connected-react-router';

import { applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';

import { Switch } from 'react-router';

// const store = createStore(rootReducer);

// render(<Provider store={store}>

//   <Router>
//     <Route path="/:id?" component={App} />
//   </Router>
// </Provider>, document.getElementById('root'));

const history = createHistory();

const store = createStore(
  connectRouter(history)(reducers),
  compose(applyMiddleware(routerMiddleware(history)))
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/todo-detail/:id" component={Detail} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
