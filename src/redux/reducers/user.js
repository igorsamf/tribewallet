import { ADD_USER } from '../actions';

const initialState = {
  email: '',
};

const user = (store = initialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return {
      ...store,
      email: action.payload,
    };
  default:
    return { ...store };
  }
};

export default user;
