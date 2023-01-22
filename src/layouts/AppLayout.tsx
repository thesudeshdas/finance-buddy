import { Outlet } from 'react-router';
import { AppFooter, TopNav } from '../components';

export default function AppLayout() {
  return (
    <div className='min-h-screen flex-col overflow-hidden bg-off-white'>
      <TopNav />

      <Outlet />

      <AppFooter />
    </div>
  );
}
