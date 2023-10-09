import LgLogo from '#/icons/lg-logo.svg';
import LINELoginButton from '@/components/login/LINELoginButton';
import Loading from '@/components/login/loading';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useLoadingCallback } from 'react-loading-hook';
import { NextPageWithLayout } from './_app';

const LoginPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  const { code, state } = router.query;

  useEffect(() => {
    setLoading(true);
    const abortController = new AbortController();

    if (!code || !state) {
      setLoading(false);
      return;
    }

    const req = new Request(`${process.env.NEXT_PUBLIC_API_URI}/auth/login`, {
      mode: 'cors',
      credentials: 'include',
    });

    fetch(req, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state,
        code,
      }),
    })
      .then((res) => res.json())
      .then(({ message, redirect }) => {
        router.replace(redirect);
      })
      .catch((err) => setLoading(false));

    return () => {
      abortController.abort();
    };
  }, [router]);

  const [handleLoginButton, isButtonLoading] = useLoadingCallback(async () => {
    // clear query
    router.replace('/login', undefined, { shallow: true });

    const req = new Request(`${process.env.NEXT_PUBLIC_API_URI}/auth/state`, {
      mode: 'cors',
      credentials: 'include',
    });

    const res = await fetch(req);
    const { state } = await res.json();

    const params = {
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_LINE_CHANNEL_ID as string,
      redirect_uri: window.location.href,
      state,
      scope: 'profile openid',
    };

    router.push(
      `https://access.line.me/oauth2/v2.1/authorize?${new URLSearchParams(
        params
      )}`
    );
  });

  return (
    <div className='absolute left-1/2 top-0 !mt-0 box-border flex h-[100dvh] w-full max-w-xl -translate-x-1/2 transform px-7 pb-40 pt-16 lg:px-0'>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='flex w-full flex-1 flex-col items-center justify-between'>
          <Image src={LgLogo} alt='IMC logo' className='mt-2 w-44' />
          <LINELoginButton
            isLoading={isButtonLoading}
            onClick={handleLoginButton}
          />
        </div>
      )}
    </div>
  );
};

const getServerSideProps: GetServerSideProps = async ({ query, req }) => {
  const { code, state } = query;
  const cookies = req.headers.cookie;

  if (!code || !state) return { props: {} };

  const request = new Request(`${process.env.NEXT_PUBLIC_API_URI}/login`, {
    mode: 'cors',
    credentials: 'include',
  });

  const res = await fetch(request, {
    method: 'POST',
    headers: {
      Cookie: cookies ?? '',
    },
    body: JSON.stringify({
      state,
      code,
    }),
  });

  return {
    props: {},
  };
};

export default LoginPage;
