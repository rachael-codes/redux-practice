import configureStore from "./store/configureStore.js";
import * as actions from "./store/bugs.js";
// w/o .js, I kept getting this error: 'ERR_MODULE_NOT_FOUND'

const store = configureStore();

// subscribe to store
store.subscribe(() => {
  console.log("Store changed!");
});

store.dispatch(actions.bugAdded({ description: "bug 1" }));
store.dispatch(actions.bugAdded({ description: "bug 2" }));
store.dispatch(actions.bugAdded({ description: "bug 3" }));
store.dispatch(actions.bugResolved(1));

console.log(store.getState());
