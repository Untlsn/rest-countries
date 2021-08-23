import React, { useState } from 'react';
import * as S from './style';
import { IoIosArrowDown } from 'react-icons/io';
import { SelectMenuProps } from '~/components/atoms/SelectMenu/types';

const SelectMenu = ({ options, placeholder, onSearch }: SelectMenuProps) => {
  const [selected, setSelected] = useState<string>();

  return (
    <S.Wrapper tabIndex={-1}>
      <S.Selected>
        <span>{selected ?? placeholder}</span>
        <IoIosArrowDown />
      </S.Selected>
      <S.Options>
        { options.map(it => <li onClick={() => {
          setSelected(it);
          onSearch(it);
          document.body.focus();
          document.body.blur();
        }} key={it}>{it}</li>) }
      </S.Options>
    </S.Wrapper>
  );
};

export default SelectMenu;