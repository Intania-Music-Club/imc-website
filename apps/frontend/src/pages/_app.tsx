import DefaultLayout from '@/layouts/DefaultLayout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Prompt } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';

const propmt = Prompt({
  subsets: ['latin', 'thai'],
  weight: ['400', '600', '800'],
  variable: '--font-prompt',
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <main
      className={`${propmt.className} mx-auto min-h-full max-w-xl space-y-8 px-7 pb-40 pt-16 lg:px-0`}
    >
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
};

export default App;
