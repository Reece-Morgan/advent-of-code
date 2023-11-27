import { NextPage } from 'next'
import { AppProps } from 'next/app';
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react';
import { BaseStyles } from '../lib/base-styles';
import Snowfall from 'react-snowfall';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const AdventOfCode = ({ Component, pageProps, ...props }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Content = getLayout(
    <>
      <BaseStyles />
      <Snowfall />
      <Component {...pageProps} {...props} />
    </>
  )
  return (
    <>
      <Head>
        <title>Advent of Code</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {Content}
      </main>
    </>
  )
}

export default AdventOfCode;
