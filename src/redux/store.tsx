import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";


import dataReducer from './dataReducer';


const ReactReduxDevTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      dataAdd:
        dataReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
