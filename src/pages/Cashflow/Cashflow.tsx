import {
  Heading,
  OverviewBalanceDoughnut,
  OverviewDebtDoughnut,
  Subheading,
} from '../../components';

import { HiPlus, HiMinus } from 'react-icons/hi2';

export default function Cashflow() {
  return (
    <div>
      {/* overviews with doughnuts */}
      <section className='mt-10 flex flex-col items-center justify-evenly gap-4 lg:flex-row'>
        {/* overview of balance */}
        <div className='bg flex items-center'>
          <OverviewBalanceDoughnut />

          <section className='ml-4 flex flex-col gap-1'>
            <Heading text='Balance - ₹ 1,236' color='text-brand' />

            <Subheading
              text='Income - ₹ 567'
              leftIcon={<HiPlus fill='off-black' />}
            />

            <Subheading
              text='Expense - ₹ 454'
              leftIcon={<HiMinus fill='off-black' />}
            />
          </section>
        </div>

        {/* overview of debts */}
        <div className='bg flex items-center'>
          <OverviewDebtDoughnut />

          <section className='ml-4 flex flex-col gap-1'>
            <Subheading text='Debt & Receivables' />

            <Subheading
              text='Debt - ₹ 454'
              leftIcon={<HiMinus fill='off-black' />}
            />

            <Subheading
              text='Receivables - ₹ 454'
              leftIcon={<HiPlus fill='off-black' />}
            />
          </section>
        </div>
      </section>

      {/* overview of expenses and incomes */}
    </div>
  );
}
