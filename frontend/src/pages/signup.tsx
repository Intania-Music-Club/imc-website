import TextField from '@/components/TextField';
import { ChangeEventHandler, FormEvent, useReducer, useState } from 'react';
import { useLoadingCallback } from 'react-loading-hook';
import Image from 'next/image';
import LgLogo from '#/icons/lg-logo.svg';
import Button from '@/components/Button';
import {
  INITIAL_STATE,
  SignUpFlattenError,
  signUpReducer,
  signUpSchema,
} from '@/components/signup/reducer';
import { useRouter } from 'next/router';
import Loading from '@/components/login/loading';

function SignUpPage() {
  const router = useRouter();
  const [state, dispatch] = useReducer(signUpReducer, INITIAL_STATE);
  const [{ fieldErrors: errors, formErrors }, setError] =
    useState<SignUpFlattenError>({
      formErrors: [],
      fieldErrors: {},
    });

  const [handleSignUp, loading] = useLoadingCallback(async (e: FormEvent) => {
    e.preventDefault();

    setError({ formErrors: [], fieldErrors: {} });

    const result = signUpSchema.safeParse(state);

    if (!result.success) {
      setError(result.error.flatten());
      return;
    }

    const req = new Request(`${process.env.NEXT_PUBLIC_API_URI}/auth/signup`, {
      mode: 'cors',
      credentials: 'include',
    });

    try {
      const res = await fetch(req, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...result.data,
        }),
      });
      const { message } = await res.json();
      if (message === 'ok') router.replace('/booking');
      else if (res.status === 401)
        router.replace('/login'); // should never reach here
      else
        setError((e) => ({
          ...e,
          formErrors: ['Unexpected error, please try again'],
        }));
    } catch (err) {
      setError((e) => ({
        ...e,
        formErrors: ['Unexpected error, please try again'],
      }));
    }
  });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <header className='grid place-items-center gap-10'>
        <Image src={LgLogo} alt='IMC logo' className='mt-2 w-44' />
        <h1 className='text-center text-4xl font-bold uppercase text-white'>
          Sign Up
        </h1>
      </header>
      <form
        className='!mt-9 flex flex-col items-center gap-5'
        onSubmit={handleSignUp}
      >
        <TextField
          required
          id='studentId'
          type='number'
          label='Student ID'
          placeholder='64xxxxx21'
          value={state.studentId}
          onChange={handleChange}
          error={errors.studentId?.join('\n')}
        />
        <TextField
          required
          id='nickname'
          label='Nickname'
          placeholder='อิอิ'
          value={state.nickname}
          onChange={handleChange}
          error={errors.nickname?.join('\n')}
        />
        <TextField
          required
          id='firstName'
          label='First Name'
          placeholder='เรียนเด่น'
          value={state.firstName}
          onChange={handleChange}
          error={errors.firstName?.join('\n')}
        />
        <TextField
          required
          id='lastName'
          label='Last Name'
          placeholder='เล่นดี'
          value={state.lastName}
          onChange={handleChange}
          error={errors.lastName?.join('\n')}
        />
        {formErrors.length !== 0 && (
          <span className='block text-red'>{formErrors.join('\n')}</span>
        )}
        <Button
          className='flex uppercase'
          type='submit'
          variant='primary'
          size='fit'
        >
          {loading ? (
            // h-7 w-7
            <Loading size={7} className='flex w-[6ch] text-transparent' />
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>
    </>
  );
}

export default SignUpPage;
