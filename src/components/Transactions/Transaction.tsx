import { SmallParagraph, SmallText, Text } from '../Texts/Texts';

export default function Transaction({ details }) {
  const { amount, category, subcategory, note } = details;

  return (
    <article className='flex items-start '>
      {/* account */}

      <p className='w-12 flex-shrink-0 text-sm font-semibold text-neutral-dark'>
        SBI
      </p>

      <div className='mr-auto  -translate-y-0.5'>
        {/* categories */}
        <div className='flex gap-1'>
          {/* main category */}

          <h3 className='font-semibold'>{category}</h3>

          {subcategory && (
            <>
              <h3 className='font-semibold'>&gt;</h3>

              {/* sub category */}
              <h3 className='font-semibold'>{subcategory}</h3>
            </>
          )}
        </div>

        {/* note */}
        {note && (
          <p className='text-sm font-semibold text-neutral-dark'>{note}</p>
        )}
      </div>

      <p className='w-12 flex-shrink-0  text-right font-semibold'>₹ {amount}</p>
    </article>
  );
}
