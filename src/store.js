import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from './features/customers/customerSlice';
import accountReducer from './features/accounts/accountSlice';

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
