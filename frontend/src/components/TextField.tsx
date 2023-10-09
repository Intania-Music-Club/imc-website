import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type CustomTextFieldProps = {
  error?: string;
  id: string;
  label?: string;
  placeholder?: string;
};

type TextFieldProps = CustomTextFieldProps &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextField = ({
  id,
  label,
  placeholder,
  error,
  ...props
}: TextFieldProps) => {
  return (
    <div className='w-full'>
      {label ? (
        <label className='mb-2 block font-medium text-white' htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input
        className={clsx(
          'w-full rounded-2xl border bg-darkgray py-4 pl-[1.125rem] pr-6 text-white placeholder:text-white placeholder:opacity-30',
          {
            'border-red': error,
            'border-white/30': !error,
          }
        )}
        type='text'
        name={id}
        id={id}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className='mt-2 block text-red'>{error}</span>}
    </div>
  );
};

export default TextField;
