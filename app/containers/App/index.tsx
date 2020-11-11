/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from 'theme';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Switch>
          <Route exact path="/">
            Hello world!
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}
