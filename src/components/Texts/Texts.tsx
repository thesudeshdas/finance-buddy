export function Heading({
  text,
  color,
  leftIcon,
  rightIcon,
}: {
  text: string;
  color?: string;
  leftIcon?: any;
  rightIcon?: JSX.Element;
}) {
  return (
    <div className='flex items-center gap-1'>
      {leftIcon}
      <h2 className={`text-2xl font-semibold text-${color}`}>{text}</h2>
      {rightIcon}
    </div>
  );
}

export function Subheading({
  text,
  color,
  leftIcon,
  rightIcon,
  textAlign,
}: {
  text: string;
  color?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  textAlign?: string;
}) {
  return (
    <div className='text- flex items-center gap-1 '>
      {leftIcon}
      <h2
        className={`text-lg font-semibold text-${color} text-${textAlign} w-full `}
      >
        {text}
      </h2>
      {rightIcon}
    </div>
  );
}

export function Text({
  text,
  color,
  leftIcon,
  rightIcon,
}: {
  text: string;
  color?: string;
  leftIcon?: any;
  rightIcon?: JSX.Element;
}) {
  return (
    <div className='flex items-center gap-1'>
      {leftIcon}
      <h2 className={`${color}`}>{text}</h2>
      {rightIcon}
    </div>
  );
}
