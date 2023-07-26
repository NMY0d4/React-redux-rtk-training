const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

export default function customerReducer(state = initialStateCustomer, action) {
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

export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: 'customer/updateName', payload: fullName };
}
