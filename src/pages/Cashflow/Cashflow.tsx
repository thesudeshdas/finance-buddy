import {
  Heading,
  HalfDoughnut,
  OverviewBalanceDoughnut,
  OverviewDebtDoughnut,
  Subheading,
  DayTransaction,
} from '../../components';
import { useState, useEffect } from 'react';
import { HiPlus, HiMinus } from 'react-icons/hi2';
import { txns } from '../../mockData/txns';
import { filterTransactionsByDate } from '../../utils/fitlerTransactions';
import { useAccounts } from '../../contexts/accounts/accounts.context';
import { useTransactions } from '../../contexts/transactions/transactions.context';

export default function Cashflow() {
  const { state: accountsState } = useAccounts();
  const { state: transactionsState } = useTransactions();

  const [datedTransactions, setDatedTransactions] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const x = await filterTransactionsByDate(transactionsState.transactions);

      setDatedTransactions(x);
    })();
  }, [transactionsState]);

  return (
    <div>
      {/* overviews with doughnuts */}
      <section className='mt-10 flex flex-col items-center justify-evenly gap-4 lg:flex-row'>
        {/* overview of balance */}
        <div className='bg flex items-center'>
          <OverviewBalanceDoughnut />

          <section className='ml-4 flex flex-col gap-1'>
            <Heading text='Balance - ₹ 1,236' color='brand' />

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

      <div className='flex-row-reverse justify-evenly lg:flex'>
        {/* top spends & incomes */}
        <section className='justify-evenly md:flex lg:w-[50%] xl:w-[35%]'>
          {/* overview of expenses */}
          <section className='mt-10 flex flex-col items-center'>
            <Heading text='Top Spends' />

            <div className='grid grid-cols-2 gap-x-12 lg:gap-x-8'>
              <HalfDoughnut label='Food' />
              <HalfDoughnut label='Rent' />
              <HalfDoughnut label='Fuel' />
              <HalfDoughnut label='Shopping' />
            </div>
          </section>

          {/* overview of incomes*/}
          <section className='mt-10 flex flex-col items-center'>
            <Heading text='Top Incomes' />

            <div className='grid grid-cols-2 gap-x-12 lg:gap-x-8'>
              <HalfDoughnut label='Food' />
              <HalfDoughnut label='Rent' />
              <HalfDoughnut label='Fuel' />
              <HalfDoughnut label='Shopping' />
            </div>
          </section>
        </section>

        {/* recent transactions */}
        <section className='my-10 flex flex-col items-center lg:w-[50%]'>
          <Heading text='Recent Transactions' />

          <div className='w-[80%] pt-6'>
            {datedTransactions.map(({ date, txns }) => (
              <DayTransaction date={date} transactions={txns} key={date} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
