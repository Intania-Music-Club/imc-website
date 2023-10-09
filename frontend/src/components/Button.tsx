import clsx from 'clsx';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type CustomButtonProps = {
  variant: 'primary' | 'secondary';
  size: 'fit' | 'full';
  children?: React.ReactNode;
  className?: string;
};

type ButtonProps = CustomButtonProps &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  variant,
  size,
  children,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'rounded-lg text-xl font-bold',
        {
          'bg-red px-5 py-2 text-white': variant === 'primary',
          'bg-gray px-5 py-2 text-white': variant === 'secondary',
        },
        {
          'w-full': size === 'full',
          'w-fit px-2': size === 'fit',
        },
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
