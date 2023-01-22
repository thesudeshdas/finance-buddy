import { Outlet } from 'react-router';
import { AppFooter, TopNav } from '../components';

export default function AppLayout() {
  return (
    <div className='h-[1px] min-h-screen'>
      <TopNav />

      <Outlet />

      <AppFooter />
    </div>
  );
}
