import { IActionType } from './transactions.type';

export const transactionsReducer = (state, action: IActionType) => {
  const { type, payload } = action;

  switch (type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        transactions: payload.transactions,
      };

    default:
      return state;
  }
};
