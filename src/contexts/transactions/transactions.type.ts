export interface Transaction {
  t_id?: string;
  amount: Number;
  account: String;
  subAccount?: String;
  category: String;
  subCategory?: String;
  type: 'Expense' | 'Income' | 'Transfer';
  note: String;
  description: string;
  date: Date;
}

export interface ITransactionsState {
  transactions: Transaction[];
}

export interface ITransactionsContext {
  state: ITransactionsState;
  dispatch: React.Dispatch<any>;
}

export type IActionType =
  | { type: 'INITIAL_FETCH'; payload: { transactions: Transaction[] } }
  | { type: 'SOMEOTHER'; payload: any };
