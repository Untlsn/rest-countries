import React from 'react';
import { GlobalStyle } from '~/assets/style/global';
import { ThemeProvider } from 'styled-components';
import useBoolState from '~/hooks/useBoolState';
import { dark, light } from '~/assets/style/theme';
import Header from '~/components/organisms/Header';
import { BrowserRouter } from 'react-router-dom';
import Loading from '~/components/atoms/Loading';
import LazyProvider from '~/providers/LazyProvider';

const Description = React.lazy(() => import('~/components/view/Description'));
const Search = React.lazy(() => import('~/components/view/Search'));

const App = () => {
  const [darkMode, switchDarkMode] = useBoolState();
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? dark : light}>
        <GlobalStyle />
        <Header onSwitchTheme={switchDarkMode} />
        <LazyProvider
          fallback={<Loading />}
          pathCompRecord={{
            '/country/:country': <Description />,
            '/': <Search />,
          }} />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;