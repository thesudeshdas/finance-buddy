import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-evenly lg:flex-row'>
      <Link to='/cashflow' className='text-center font-medium lg:w-[30%]'>
        <h3 className='text-2xl leading-tight lg:text-4xl'>TRACK MY</h3>
        <h1 className='text-6xl leading-tight lg:text-7xl xl:text-8xl 3xl:text-9xl'>
          EXPENSE
        </h1>
      </Link>

      <div className='h-2 w-[70%] rounded-full bg-brand md:w-[50%] lg:h-[50vh] lg:w-2'></div>

      <Link to='/budget' className='text-center font-medium lg:w-[30%]'>
        <h3 className='text-2xl leading-tight lg:text-4xl'>TRACK MY</h3>
        <h1 className='text-6xl leading-tight lg:text-7xl xl:text-8xl 3xl:text-9xl'>
          BUDGET
        </h1>
      </Link>
    </div>
  );
}
