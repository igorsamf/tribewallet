export const ADD_USER = 'ADD_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const GET_EXPENSE = 'GET_EXPENSE';

export const addUser = (email) => ({
  type: ADD_USER,
  payload: email,
});

export const getCurrencies = (currecies) => ({
  type: GET_CURRENCIES,
  payload: currecies,
});

export const getExpense = (expenses) => ({
  type: GET_EXPENSE,
  expenses,
});
