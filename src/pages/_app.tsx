import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '@/components/Layout';
import { SSRProvider } from "react-bootstrap";

function App({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}

export default App;

