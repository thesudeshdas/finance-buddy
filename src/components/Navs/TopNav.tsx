import { Link } from 'react-router-dom';

export default function TopNav() {
  return (
    <nav className='h-1/10 w-full bg-brand p-4 text-center text-brand'>
      <Link to='/'>
        <h1 className='text-2xl font-bold text-off-white'>Finance Buddy</h1>
      </Link>
    </nav>
  );
}
