// This is Redux in a nutshell!

import reducer from "./reducer.js";

function createStore(reducer) {
  let state;
  // whenever a component subscribes, it gets pushed to this arr of listeners
  let listeners = [];

  // calls a reducer to get a new state + notifies the subscribers
  function dispatch(action) {
    // call reducer to get new state
    state = reducer(state, action);
    // notify the subscribers by calling each func in the listener funcs array
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  // pushes a listener into listeners array
  // a listener = a function that gets passed in
  function subscribe(listener) {
    listeners.push(listener);
  }

  // simply returns the state, but is done this way so state remains private
  function getState() {
    return state;
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore();
