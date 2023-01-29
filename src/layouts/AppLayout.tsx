import axios from 'axios';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { AppFooter, TopNav } from '../components';
import { useAccounts } from '../contexts/accounts/accounts.context';
import { useTransactions } from '../contexts/transactions/transactions.context';

export default function AppLayout() {
  const { dispatch: accountsDispatch } = useAccounts();
  const { dispatch: transactionsDispatch } = useTransactions();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/accounts`
      );

      if (response.status === 200) {
        accountsDispatch({
          type: 'INITIAL_FETCH',
          payload: { accounts: response.data.accounts },
        });
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/transactions`
      );

      if (response.status === 200) {
        transactionsDispatch({
          type: 'INITIAL_FETCH',
          payload: { transactions: response.data.transactions },
        });
      }
    })();
  }, []);

  return (
    <div className='h-[1px] min-h-screen'>
      <TopNav />

      <div className='min-h-[78vh]'>
        <Outlet />
      </div>

      <AppFooter />
    </div>
  );
}
