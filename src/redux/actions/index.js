export const ADD_USER = 'ADD_USER';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';
export const REMOVE_EXPENSES = 'REMOVE_EXPENSES';

export const addUser = (email) => ({
  type: ADD_USER,
  payload: email,
});

export const getCurrencies = (currecies) => ({
  type: GET_CURRENCIES,
  payload: currecies,
});

export const saveExpenses = (expense) => ({
  type: SAVE_EXPENSES,
  payload: expense,
});

export const removeExpensesAction = (objeto, field) => ({
  type: REMOVE_EXPENSES,
  payload: [objeto, field],
});
