import { GET_CURRENCIES, SAVE_EXPENSES } from '../actions';

const initialState = {
  currency: 'BRL',
  field: 0,
  currencies: [],
  expenses: [],
};

const wallet = (store = initialState, action) => {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...store,
      currencies: Object.keys(action.payload)
        .filter((currencie) => currencie !== 'USDT'),
    };
  case SAVE_EXPENSES:
    return {
      ...store,
      field: (

        parseFloat(store.field)
        + (
          parseFloat(action.payload.value)
        * parseFloat(action.payload.exchangeRates[action.payload.currency]
          .ask)
        )
      ).toFixed(2),
      expenses: [...store.expenses, action.payload],
    };
  default:
    return { ...store };
  }
};

export default wallet;
