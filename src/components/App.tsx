import React, { Suspense } from 'react';
import { GlobalStyle } from '~/assets/style/global';
import { ThemeProvider } from 'styled-components';
import useBoolState from '~/hooks/useBoolState';
import { dark, light } from '~/assets/style/theme';
import Header from '~/components/organisms/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from '~/components/atoms/Loading';

const Description = React.lazy(() => import('~/components/view/Description'));

const App = () => {
  const [darkMode, switchDarkMode] = useBoolState();
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <GlobalStyle />
        <Header onSwitchTheme={switchDarkMode} />
        <Suspense fallback={<Loading />} >
          <Switch>
            <Route path='/country/:country'>
              <Description />
            </Route>
            <Route path='/'>

            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;