import React from 'react';
import Head from 'next/head';
import { CarmelsScreen } from '~/components/carmels/screens';
import { WaitScreen } from '~/components/wait/screens';
import { AppLayout, WaitLayout } from '~/components/layout/Layout';

const Main = ({ env }: any) => {
  return (
    <>
      <Head>
        <title>Carmel</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <AppLayout>
          <CarmelsScreen/>
      </AppLayout>
    </>
  );
};

export default Main