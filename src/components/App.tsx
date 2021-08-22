import React from 'react';
import { GlobalStyle } from '~/assets/style/global';
import { ThemeProvider } from 'styled-components';
import useBoolState from '~/hooks/useBoolState';
import { dark, light } from '~/assets/style/theme';
import Header from '~/components/organisms/Header';

const App = () => {
  const [darkMode, switchDarkMode] = useBoolState();
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <GlobalStyle />
      <Header onSwitchTheme={switchDarkMode} />
    </ThemeProvider>
  );
};

export default App;