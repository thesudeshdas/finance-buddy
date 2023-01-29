import { createContext, useContext, useReducer } from 'react';
import { transactionsReducer } from './transactions.reducer';
import { ITransactionsContext, ITransactionsState } from './transactions.type';

const initialState: ITransactionsState = {
  transactions: [],
};

const TransactionsContext = createContext<ITransactionsContext>({
  state: initialState,
  dispatch: () => null,
});

export function TransactionsProvider({ children }) {
  const [state, dispatch] = useReducer(transactionsReducer, initialState);

  return (
    <TransactionsContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
