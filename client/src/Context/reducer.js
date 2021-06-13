import { TYPES } from './types';

export const initialState = {
  user: {}
};

/* eslint import/no-anonymous-default-export: */
export default (state, action) => {
  const { SET_USER } = TYPES;

  switch (action.type) {
    case SET_USER:
      const { user } = action.payload;

      return {
        ...state,
        user
      };

    default:
      return state;
  }
};
