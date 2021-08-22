import React from 'react';
import * as S from './style';
import { BsArrowLeft } from 'react-icons/bs';
import { DescriptionProps } from './types';
import CountyInformation from '~/components/molecules/CountryInformation';
import { useFetchCountry } from '~/components/view/Description/hooks';

const Description = ({ countryName }: DescriptionProps) => {
  const country = useFetchCountry(countryName);

  return (
    <S.Wrapper>
      <S.RelDiv>
        <S.BackButton><BsArrowLeft size={20} /> back</S.BackButton>
        <S.Flag src={country?.flag} alt='flag' />
      </S.RelDiv>
      {country && <CountyInformation {...country} name={countryName} />}
    </S.Wrapper>
  );
};

export default Description;