import { combineReducers, createStore } from 'redux';
import customerReducer from './features/customers/customerSlice';
import accountReducer from './features/accounts/accountSlice';

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(rootReducer);

export default store;
