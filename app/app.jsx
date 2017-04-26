var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

import initFirebase from './../playground/firebase/index';
initFirebase();



// Load foundation
import 'style!css!foundation-sites/dist/css/foundation.min.css';
import appCss from 'style!css!sass!./styles/app.scss';
$(document).foundation();

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos1 = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos1));



ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
