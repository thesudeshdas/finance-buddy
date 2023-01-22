import { Outlet } from 'react-router';
import { AppFooter, TopNav } from '../components';

export default function AppLayout() {
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
