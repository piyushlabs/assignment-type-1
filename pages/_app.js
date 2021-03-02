import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createCache from '@emotion/cache';
import theme from '../src/theme';
import '../styles/index.css';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { withRouter } from 'next/router';

import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import store from '../src/store/';

export const cache = createCache({ key: 'css', prepend: true });

const MyApp = (props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <CacheProvider value={cache}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <GlobalStyles /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
};

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(withReduxSaga(withRouter(MyApp)));
