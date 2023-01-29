export interface IAccountsState {
  accounts: string[];
  subAccounts: string[];
}

export interface IAccountsContext {
  state: IAccountsState;
  dispatch: React.Dispatch<any>;
}

export type IActionType =
  | { type: 'INITIAL_FETCH'; payload: { accounts: string[] } }
  | { type: 'SOMEOTHER'; payload: any };
