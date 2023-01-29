import axios from 'axios';
import { useEffect } from 'react';
import { Outlet } from 'react-router';
import { AppFooter, TopNav } from '../components';
import { useAccounts } from '../contexts/accounts/accounts.context';

export default function AppLayout() {
  const { dispatch: accountsDispatch } = useAccounts();

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
