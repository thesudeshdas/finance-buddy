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
      <h2 className={`text-2xl font-semibold ${color}`}>{text}</h2>
      {rightIcon}
    </div>
  );
}

export function Subheading({
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
      <h2 className={`text-lg font-semibold ${color}`}>{text}</h2>
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
