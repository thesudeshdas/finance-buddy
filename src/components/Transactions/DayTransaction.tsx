import Transaction from './Transaction';

export default function DayTransaction({ date, transactions }) {
  const showDate = ('0' + new Date(date).getDate()).slice(-2);

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const showMonth = month[new Date(date).getMonth()];

  const dayTotal = transactions.reduce((sum, val) => sum + val.amount, 0);

  return (
    <article className='mb-6 flex w-full flex-col gap-4'>
      {/* date & overall expense/income */}
      <div className='flex justify-between'>
        <h2 className='text-xl font-semibold'>
          {showMonth} {showDate}
        </h2>

        <h2 className='text-xl font-semibold'> ₹ {dayTotal}</h2>
      </div>

      <hr className='h-2 rounded-full border-none bg-brand' />

      {/* individual txn list */}

      {transactions.map((txn) => (
        <Transaction key={txn.t_id} details={txn} />
      ))}
    </article>
  );
}
