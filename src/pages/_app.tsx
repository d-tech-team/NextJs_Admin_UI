import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from '@/components/Layout';
import { SSRProvider } from "react-bootstrap";
import { Provider } from 'react-redux';
import store from '@/redux/store';

function App({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </Provider>
  );
}

export default App;
 
