import { createStore } from 'redux';

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
};

function reducer(state = initialState, action) {
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
    case 'account/payloan':
      return { ...state, loanPurpose: '', balance: state.balance - state.loan };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: 'account/deposit', payload: 500 });
console.log(store.getState());
store.dispatch({ type: 'account/withdraw', payload: 200 });
console.log(store.getState());

store.dispatch({
  type: 'account/requestLoan',
  payload: { amount: 1000, purpose: 'Buy a car' },
});
console.log(store.getState());

store.dispatch({ type: 'account/payloan' });
console.log(store.getState());
