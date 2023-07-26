import { combineReducers, createStore } from 'redux';

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

function accountReducer(state = initialStateAccount, action) {
  const { type, payload } = action;

  switch (type) {
    case 'account/deposit':
      return { ...state, balance: state.balance + payload };
    case 'account/withdraw':
      return { ...state, balance: state.balance - payload };
    case 'account/requestLoan':
      if (state.loan > 0) return state;
      // LATER
      return {
        ...state,
        loan: payload.amount,
        loanPurpose: payload.purpose,
        balance: state.balance + payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loanPurpose: '',
        loan: 0,
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  const { type, payload } = action;
  switch (type) {
    case 'customer/createCustomer':
      return {
        ...state,
        ...payload,
      };
    case 'customer/updateName':
      return { ...state, fullName: payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(rootReducer);

// store.dispatch({ type: 'account/deposit', payload: 500 });
// console.log(store.getState());
// store.dispatch({ type: 'account/withdraw', payload: 200 });
// console.log(store.getState());
// store.dispatch({
//   type: 'account/requestLoan',
//   payload: { amount: 1000, purpose: 'Buy a car' },
// });
// console.log(store.getState());
// store.dispatch({ type: 'account/payLoan' });
// console.log(store.getState());

function deposit(amount) {
  return { type: 'account/deposit', payload: amount };
}
store.dispatch(deposit(500));

console.log(store.getState());

function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}
store.dispatch(withdraw(300));
console.log(store.getState());

function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } };
}
store.dispatch(requestLoan(1000, 'Buy a car'));
console.log(store.getState());

function payLoan() {
  return { type: 'account/payLoan' };
}
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
}

store.dispatch(createCustomer('Grégory Marini', 'fr1234'));
console.log(store.getState());

store.dispatch(updateName('Greg Marini'));
console.log(store.getState().customer);
