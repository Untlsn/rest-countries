import React, { useState } from 'react';
import * as S from './style';
import { regions } from '~/components/view/Search/data';
import SelectMenu from '~/components/atoms/SelectMenu';
import InputSearch from '~/components/atoms/InputSearch';
import MiniDescWrapper from '~/components/organisms/MiniDescWrapper';

const Search = () => {

  const [name, setName] = useState('');
  const [region, setRegion] = useState('');

  return (
    <S.Wrapper>
      <S.Nav>
        <InputSearch onSetName={setName} />
        <SelectMenu onSearch={setRegion} options={regions} placeholder='Filter by Region' />
      </S.Nav>
      <MiniDescWrapper region={region} name={name} />
    </S.Wrapper>
  );
};

export default Search;