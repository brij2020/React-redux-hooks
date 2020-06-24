import { createStore, combineReducers,applyMiddleware,compose } from "redux";
import thunk from 'redux-thunk'
import TestReducer from "../src/reducers/CounterReducer";
import GetUser     from "../src/reducers/UserReducer"
import LoadingReducer from '../src/reducers/LoadingReducer'
import FilterReducer from '../src/reducers/FilterReducer'
const RootReducer = combineReducers({
  TestReducer,
  Users:GetUser,
  isLoading:LoadingReducer,
  list:FilterReducer
});
const store = createStore(
  RootReducer,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
