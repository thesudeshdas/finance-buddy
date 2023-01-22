import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex min-h-[90vh] items-center justify-evenly '>
      <Link to='/cashflow' className='min-w-[30%] text-center font-medium'>
        <h3 className='text-4xl leading-tight'>TRACK MY</h3>
        <h1 className='text-9xl leading-tight'>EXPENSE</h1>
      </Link>

      <div className='h-[70vh] w-2 rounded-full bg-brand'></div>

      <Link to='/budget' className='min-w-[30%] text-center font-medium'>
        <h3 className='text-4xl leading-tight'>TRACK MY</h3>
        <h1 className='text-9xl leading-tight'>BUDGET</h1>
      </Link>
    </div>
  );
}
