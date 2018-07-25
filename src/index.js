import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
