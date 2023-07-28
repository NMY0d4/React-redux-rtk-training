import customerReducer from './features/customers/customerSlice';
import accountReducer from './features/accounts/accountSlice';

import { configureStore } from '@reduxjs/toolkit';

const reducers = { account: accountReducer, customer: customerReducer };

const store = configureStore({
  reducer: reducers,
});

export default store;
