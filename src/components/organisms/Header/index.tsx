import React from 'react';
import * as S from './style';
import { HeaderProps } from './types';
import { BiMoon } from 'react-icons/bi';

const Header = ({ onSwitchTheme }: HeaderProps) => {
  return (
    <S.Wrapper>
      <h2>Where is the world!</h2>
      <S.MockButton onClick={onSwitchTheme}><BiMoon size={18} />dark mode</S.MockButton>
    </S.Wrapper>
  );
};

export default Header;