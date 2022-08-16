import { GET_CURRENCIES } from '../actions';

const initialState = {
  currency: 'BRL',
  field: 0,
  currencies: [],
};

const wallet = (store = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...store,
      currencies: Object.keys(action.payload)
        .filter((currencie) => currencie !== 'USDT'),
    };
  default:
    return { ...store };
  }
};

export default wallet;
