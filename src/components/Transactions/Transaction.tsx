import { SmallParagraph, SmallText, Text } from '../Texts/Texts';

export default function Transaction({ details }) {
  const { amount, category, subcategory, note } = details;

  return (
    <article className='flex items-start'>
      {/* account */}
      <SmallText text='SBI' color='neutral-dark' width='16' />

      <div className='w-[100%]'>
        {/* categories */}
        <div className='flex  gap-1'>
          {/* main category */}
          <Text text={category} />

          {subcategory && (
            <>
              <Text text='>' />

              {/* sub category */}
              <Text text={subcategory} />
            </>
          )}
        </div>

        {/* note */}
        {note && <SmallParagraph text={note} color='neutral-dark' />}
      </div>

      {/* amount */}
      <Text text={`₹ ${amount}`} textAlign='right' width='24' />
    </article>
  );
}
