import { IActionType } from './accounts.type';

export const accountsReducer = (state, action: IActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        accounts: payload.accounts,
      };

    default:
      return state;
  }
};
