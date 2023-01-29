import { createContext, useContext, useReducer } from 'react';
import { accountsReducer } from './accounts.reducer';
import { IAccountsContext, IAccountsState } from './accounts.type';

const initialState: IAccountsState = {
  accounts: [],
  subAccounts: [],
};

const AccountsContext = createContext<IAccountsContext>({
  state: initialState,
  dispatch: () => null,
});

export function AccountsProvider({ children }) {
  const [state, dispatch] = useReducer(accountsReducer, initialState);

  return (
    <AccountsContext.Provider value={{ state, dispatch }}>
      {children}
    </AccountsContext.Provider>
  );
}

export function useAccounts() {
  return useContext(AccountsContext);
}
