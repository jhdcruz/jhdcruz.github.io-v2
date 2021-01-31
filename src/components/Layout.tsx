import Head from 'next/head';
import { Meta } from '../interfaces/Meta';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ title, children }: Meta) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>

    {/* Body */}
    <Nav />
    {children}
    <Footer />
  </>
);

export default Layout;
