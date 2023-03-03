import type { NextPage } from 'next';
import Head from 'next/head';
export interface HomePageProps extends React.ComponentPropsWithoutRef<'div'> {}

const Home: NextPage = () => {
  return (
    <Head>
      <title>Create Next TypeScript App</title>
      <meta name='description' content='Generated by create next app' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default Home;
