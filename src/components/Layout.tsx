import Head from 'next/head';
import { Meta } from '../interfaces/Meta';

const Layout = ({ title, children }: Meta) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </>
);

export default Layout;
