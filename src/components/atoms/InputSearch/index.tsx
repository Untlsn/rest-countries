import React, { useRef } from 'react';
import * as S from './style';
import handleKey from '~/helpers/handleKey';
import { InputSearchProps } from '~/components/atoms/InputSearch/types';

const InputSearch = ({ onSetName }: InputSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const getInputValue = () => onSetName(inputRef.current!.value);

  return (
    <S.Wrapper onClick={() => inputRef.current!.focus()}>
      <S.SearchIcon onClick={getInputValue} />
      <S.InputSearch
        onKeyDown={handleKey(getInputValue, 'Enter')}
        ref={inputRef}
        placeholder='Search for a county...' />
    </S.Wrapper>
  );
};

export default InputSearch;