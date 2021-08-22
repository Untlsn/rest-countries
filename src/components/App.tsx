import React, { useState } from 'react';
import Logo from '~/assets/images/logo.png';
import * as S from './App.style';
import prevDef from '~/helpers/prevDef';
import { GlobalStyle } from '~/assets/style/global';

const App = () => {
  const [count, changeCount] = useState(0);

  return (
    <>
      <GlobalStyle />
      <S.Wrapper
        onClick={() => changeCount(old => old + 1)}
        onContextMenu={prevDef(() => changeCount(0))}>
        <S.Image src={Logo}/>
        <p>Hello Vite + Preact Comp!</p>
        <p>Just write in react, run in preact</p>
        <p>Hooks work without issues: {count}</p>
      </S.Wrapper>
    </>
  );
};