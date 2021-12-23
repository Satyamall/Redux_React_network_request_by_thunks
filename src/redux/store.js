import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducer";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

const networkRequestsMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("found an action which is a function");
    const func = action;
    return func(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log("dispatching the action in 1", action);
//   console.log(store.getState());
//   const value = next(action);
//   console.log(value);
//   console.log(store.getState());
//   console.log("end of 1");
// };

// // 2nd middleware

// const loggerMiddleware2 = (store) => (next) => (action) => {
//   console.log("dispatching the action in 2", action);
//   console.log(store.getState());
//   const value = next(action);
//   console.log(value);
//   console.log(store.getState());
//   console.log("end of 2");
//   return "value";
// };

let enhancers = compose;

if (process.env.NODE_ENV !== "production") {
  enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = enhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer);

// loggerMiddleware(store)(nextMiddleware)(action)

console.log(store.getState());
// * combine reducers
// create app and auth folders
// action, actionTypes, reducers
// use combineReducers, to create a root reducer
// refactor components which consume the store  values
// useSelector(state=>state.auth.token)
// useSelector(state=>state.app.todos)
// fix import statements across all actions that we are importing

// * setting up redux
// create actions
// create reducer
// create store
// pass store in provider
// select data from store, and
//  ---- pass it to required elements
// dispatch an action depending on user input

// * developer tools
