import React from 'react';
import * as S from './style';
import MiniDescription from '~/components/molecules/MiniDescription';
import { useFetchCountries } from '~/components/organisms/MiniDescWrapper/hooks';
import { MiniDescWrapperProps } from '~/components/organisms/MiniDescWrapper/types';

const MiniDescWrapper = ({ region, name }: MiniDescWrapperProps) => {
  const countries = useFetchCountries({ region, name });
  const filteredCountries = region ? countries.filter(it => it.region.toLowerCase() == region) : countries;

  return (
    <S.Wrapper>
      { filteredCountries.map(it => <MiniDescription key={it.name} {...it} />) }
    </S.Wrapper>
  );
};

export default MiniDescWrapper;