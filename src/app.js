import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/main';


// Messing around with stores: ================================================

import navigation from './reducers/main';
import { setURL } from './actions/actions';

let store = createStore(navigation);

// Log the initial state
console.log(store.getState());

// Every time a store changes, log it.
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch the several change URL actions

store.dispatch(setURL('https://google.com'));
store.dispatch(setURL('https://github.com'));
unsubscribe();

// Actual code resumes here: ==================================================

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
