import { Subheading } from '../Texts/Texts';
import Transaction from './Transaction';

export default function DayTransaction({ date, txns }) {
  return (
    <article className='mb-6 flex w-full flex-col gap-4'>
      {/* date & overall expense/income */}
      <div className='flex justify-between'>
        <Subheading text={date} />

        <Subheading text='₹ 1,236' />
      </div>

      <hr className='h-2 rounded-full border-none bg-brand' />

      {/* individual txn list */}

      {txns.map((txn) => (
        <Transaction key={txn.id} details={txn} />
      ))}
    </article>
  );
}
